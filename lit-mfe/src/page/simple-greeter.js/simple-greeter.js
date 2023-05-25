/** @format */

import { LitElement, html, css } from 'lit';

export class SimpleGreeter extends LitElement {
	static styles = css`
		div {
			border: 1px solid black;
			padding: 1rem;
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		span {
			color: rebeccapurple;
		}

		p {
			font-family: sans-serif;
		}
	`;

	static properties = {
		name: {},
		count: { type: Number },
	};

	constructor() {
		super();
		this.name = 'Somebody';
		this.count = 0;
	}

	render() {
		return html`
			<div>
				<h1>Hello, <span>${this.name}</span>!</h1>
				<p>Count: ${this.count}</p>
				<button @click=${() => this.count++}>++</button>
			</div>
		`;
	}
}

customElements.define('simple-greeter', SimpleGreeter);
