/** @format */

import fs from 'fs';
import { importmapPath, BASE_PATH } from './constants.js';

export function createOrUpdateImportmap() {
	const importmap = loadImportmap();
	if (!('@core' in importmap))
		addToImportmap({ name: '@core', entry: BASE_PATH + '/shared/core/ldod-core.js' });
	if (!('@core-ui' in importmap))
		addToImportmap({
			name: '@core-ui',
			entry: BASE_PATH + '/shared/core-ui/ldod-core-ui.js',
		});
	if (!('@ui' in importmap)) addToImportmap({ name: '@ui/', entry: BASE_PATH + '/shared/ui/' });
	if (!('@vendor/' in importmap))
		addToImportmap({ name: '@vendor/', entry: BASE_PATH + '/shared/node_modules/' });
}

export function loadImportmap() {
	let importmap;
	try {
		importmap = JSON.parse(fs.readFileSync(importmapPath, 'utf-8'));
	} catch (error) {
		importmap = { imports: {} };
	}
	return importmap;
}

export function saveImportmap(importmap) {
	fs.writeFileSync(importmapPath, JSON.stringify(importmap));
}

export async function addToImportmap({ name, entry }) {
	const importmap = loadImportmap();
	importmap.imports[name] = entry;
	saveImportmap(importmap);
}

export const removeFromImportmaps = ({ name }) => {
	const importmap = loadImportmap();
	delete importmap.imports[name];
	saveImportmap(importmap);
};
export function getEntryPoint(id) {
	return loadImportmap().imports[id]?.replace(`${BASE_PATH}/`, '');
}
