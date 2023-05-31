/** @format */

import helloWorld from './page/hello-world';

let element;

function mount() {
	element = helloWorld();
	return element;
}
function unMount() {
	element?.remove();
}

export { mount, unMount };
