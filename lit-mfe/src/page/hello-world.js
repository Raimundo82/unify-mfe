/** @format */

import MessageComponent from './MessageComponent';

export default () => {
	const temp = document.createElement('template');
	temp.innerHTML = /*html*/ `<div is="hello-world" ></div>`;
	return temp.content.firstElementChild.cloneNode(true);
};

customElements.define(
	'hello-world',
	class extends HTMLDivElement {
		constructor() {
			super();
			this.render();
		}

		render = () =>
			this.appendChild(MessageComponent({ header: 'Hello World!', message: 'Some message' }));
	},
	{ extends: 'div' }
);
