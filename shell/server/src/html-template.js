/** @format */

import { loadMfes } from './mfes.js';
import { preRenderIndexHtml } from './pre-render.js';
import fs from 'fs';
import { getOriginalHTML } from './static.js';
import { loadImportmap } from './importmap.js';
import { BASE_PATH, indexHTML } from './constants.js';
import { parse } from 'node-html-parser';
import { minify } from 'html-minifier';
import { updateSWCache } from './update-cache-version.js';

export async function updateIndexHTML() {
	const html = getOriginalHTML();
	if (!html) return;
	let dom = parse(html);
	updateImportmapScript(dom);
	updateProcessScript(dom);
	updateMfesReferencesScript(dom);
	dom = await preRenderIndexHtml(dom);
	writeIndexHTML(dom.outerHTML);
	updateSWCache();
}

export function writeIndexHTML(outerHTML) {
	fs.writeFileSync(
		indexHTML,
		minify(outerHTML, { minifyCSS: true, minifyJS: true, collapseWhitespace: true })
	);
}

function updateImportmapScript(dom) {
	const importmapScript = dom.querySelector('script[type=importmap]');
	importmapScript.set_content(JSON.stringify(loadImportmap()));
}

function updateProcessScript(dom) {
	const mfes = JSON.stringify(loadMfes());
	const ldodProcessScript = parse(/*html */ `
                <script id="ldod-process">
                    globalThis.PRODUCTION = true;
                    globalThis.mfes = ${mfes}
                    globalThis.process = {
                            FE_HOST: "${process.env.FE_HOST}",
                            BE_HOST: "${process.env.BE_HOST}",
							BASE_PATH: "${process.env.BASE_PATH}"
                        };
                </script>`);

	const script = dom.querySelector('head script#ldod-process');
	if (script) script.replaceWith(ldodProcessScript);
	else dom.querySelector('head').appendChild(ldodProcessScript);
}

function updateMfesReferencesScript(dom) {
	const src = BASE_PATH + '/references.js';
	let script = dom.querySelector('head script#mfes-references');
	if (script && script.attributes.src === src) return;
	script = parse(`<script id="mfes-references" src="${src}" async></script>`);
	dom.querySelector('head').appendChild(script);
}
