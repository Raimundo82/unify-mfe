/** @format */

const message = {
	en: 'LdoD: Page not found...',
};

const getNoPage = () => document.body.querySelector('div#no-page.container');

const NoPage = () => /*html*/ `<div id="no-page" class="container">${message.en}</div>`;

let langUnsub;

const mount = (language, ref) => {
	const container = document.body.querySelector(ref);
	container.innerHTML = NoPage(language);
};
const unMount = () => {
	langUnsub();
	getNoPage().remove();
};

export default () => ({
	path: '/not-found',
	mount,
	unMount,
});
