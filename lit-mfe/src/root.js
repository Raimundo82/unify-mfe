/** @format */

import helloWorld from './page/hello-world';
//import './page/my-timer/lit-timer';

let element;

const mount = () => {
	element = helloWorld();
	return element;
};

function unMount() {
	element?.remove();
}

export { mount, unMount };
