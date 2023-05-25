/** @format */

const message = {
	en: 'Page not found...',
};

const noPage = document.createElement('div');
noPage.id = 'no-page';
noPage.className = 'container';
noPage.textContent = message.en;

const mount = () => {
	return noPage;
};
const unMount = () => {
	noPage?.remove();
};

export default () => ({
	path: '/not-found',
	mount,
	unMount,
});
