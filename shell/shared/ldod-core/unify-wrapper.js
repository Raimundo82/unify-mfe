/** @format */
import { navigateTo } from './index';
class UnifyWrapper extends HTMLElement {
	constructor() {
		super();
		if (!this.shadowRoot) this.attachShadow({ mode: 'open' });
		this.addEventListener('unify:error-boundary', onErrorCaught);
	}
}

function onErrorCaught(e) {
	console.error(e);
	eventBus.publish('unify:error', e?.message);
	navigateTo('/');
}

customElements.define('unify-wrapper', UnifyWrapper);
