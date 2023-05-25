/** @format */

class UnifyWrapper extends HTMLElement {
	constructor() {
		super();
		if (!this.shadowRoot) this.attachShadow({ mode: 'open' });
	}
}
customElements.define('unify-wrapper', UnifyWrapper);
