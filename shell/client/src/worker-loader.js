/** @format */

const worker = new Worker('/ldod-mfes/shell/worker.js', { type: 'module' });

const FONTS_URL = '/ldod-mfes/shell/style/fonts';
const ROOT_CSS_URL = '/ldod-mfes/shared/ui/bootstrap/root.css';
const BOOTSTRAP_CSS_URL = '/ldod-mfes/shared/ui/bootstrap/bootstrap.css';

const fonts = [];

fonts.forEach(font => {
	worker.postMessage({ type: 'font', url: font.src });
});
worker.postMessage({ type: 'css', url: BOOTSTRAP_CSS_URL });

//worker.postMessage({ type: 'script', url: '/ldod-mfes/shared/notifications.js' });
//worker.postMessage({ type: 'script', url: '/ldod-mfes/shared/ldod-icons.js' });
//worker.postMessage({ type: 'script', url: '/ldod-mfes/references.js' });

const workerHandler = {
	font: (res, url) => onFont(res, url),
	css: (res, url) => onCss(res),
	script: (res, url) => onScript(res),
};

worker.onmessage = ({ data: { type, url, res } }) => workerHandler[type](res, url);

function onFont(res, url) {
	const { family, display, style, weight } = fonts.find(font => font.src === url);
	document.fonts.add(
		new FontFace(family, res, {
			style,
			weight,
			display,
		})
	);
}
function onCss(res) {
	const style = document.createElement('style');
	style.innerHTML = new TextDecoder().decode(res);
	document.head.appendChild(style);
}

function onScript(res) {
	const script = document.createElement('script');
	script.type = 'module';
	script.innerHTML = new TextDecoder().decode(res);
	document.body.appendChild(script);
}
