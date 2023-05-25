/** @format */

import { addEndSlash, addStartSlash, isSlash, PATH_PATTERN, removeEndSlash } from './utils';
import { sleep } from '../../ldod-core/helpers';
export let BASE_PATH;

export default class LdodRouter extends HTMLElement {
	constructor() {
		super();
		if (!this.id) throw new Error('Each router must have an unique ID');
		this.routes = {};
		this.wrapper = this.querySelector('unify-wrapper');
	}

	static get observedAttributes() {
		return ['base'];
	}

	get location() {
		return removeEndSlash(location.pathname);
	}

	get route() {
		return addStartSlash(removeEndSlash(this.getAttribute('route'))) || '';
	}

	get base() {
		return addStartSlash(removeEndSlash(BASE_PATH)) || '';
	}

	get routerPathname() {
		return removeEndSlash(`/${this.base}${this.route}`)?.replace(/\/\/+/g, '/');
	}

	get language() {
		return this.getAttribute('language');
	}

	set language(language) {
		this.setAttribute('language', language);
	}

	getWrapper() {
		if (!this.wrapper)
			this.innerHTML = /*html */ `<unify-wrapper id="wrapper__${this.id}"></unify-wrapper>`;
		return this.wrapper.shadowRoot;
	}

	getFullPath = path => removeEndSlash(`/${this.base}/${path ?? ''}`.replace(/\/\/+/g, '/'));

	normalizePath = pathname =>
		isSlash(this.routerPathname)
			? pathname
			: addEndSlash(pathname).replace(`${this.routerPathname}/`, '/').replace(/\/\/+/g, '/');

	isPathActive = path => {
		if (!this.active) return false;
		let target = PATH_PATTERN.exec(this.normalizePath(path)).at(0);
		let current = removeEndSlash(this.normalizePath(this.active.path));
		return current === target;
	};

	isFromThisRouter = path => {
		if (!this.route) return true;
		const target = this.base ? path.replace(this.base, '') : path;
		return target.startsWith(this.route);
	};

	async connectedCallback() {
		this.addEventListeners();
		this.processRoutes();
	}

	processRoutes(routes = this.routes) {
		this.routes = Object.entries(routes).reduce((prev, [key, api]) => {
			let path = removeEndSlash(`/${this.base}/${this.route}/${key}`.replace(/\/\/+/g, '/'));
			prev[path] = api;
			return prev;
		}, {});
		this.navigate();
	}

	attributeChangedCallback(name, oldV, newV) {
		this.onAttributeChange[name](oldV, newV);
	}

	onAttributeChange = {
		base: (_, basePath) => {
			if (!BASE_PATH && basePath) BASE_PATH = basePath;
		},
	};

	handleLanguageChange(language) {
		this.querySelectorAll('[language]').forEach(ele => ele.setAttribute('language', language));
	}

	disconnectedCallback() {
		this.unsubURL();
		window.removeEventListener('popstate', this.handlePopstate);
	}

	addEventListeners() {
		this.unsubURL = eventBus.subscribe('unify:url', this.handleURLChanged);
		window.addEventListener('popstate', this.handlePopstate);
	}

	navigate = (path = this.location, state = {}) => {
		if (this.isPathActive(path)) return;
		if (this.location !== path) history.pushState(state, undefined, path);
		this.render();
	};

	handleURLChanged = ({ payload: { path, state } }) => {
		if (path && this.isFromThisRouter(path)) this.navigate(this.getFullPath(path), state);
	};

	handlePopstate = () => {
		this.isFromThisRouter(this.location) && this.navigate(this.location);
	};

	async render() {
		let route = await this.getRoute();
		this.handleLoading(true);
		try {
			await this.appendMFE(route);
		} catch (error) {
			console.error(error);
		} finally {
			this.handleLoading(false);
		}
	}

	isARouteMatch = path => {
		const pathSplit = path.split('/');
		const locationSplit = this.location.split('/');
		return pathSplit.every((subpath, index) =>
			!subpath.startsWith(':') ? locationSplit[index] === subpath : true
		);
	};

	async getRoute() {
		let targetPath =
			this.location === this.routerPathname
				? this.index
				: Object.entries(this.routes)
						.filter(([path, api]) => this.isARouteMatch(path) && api)
						.sort(([pathA], [pathB]) => {
							const locationLength = this.location.split('/').length;
							const pathAlength = pathA?.split('/').length;
							const pathBlength = pathB?.split('/').length;
							return (
								+(pathBlength === locationLength) -
								+(pathAlength === locationLength)
							);
						})[0]?.[1] ?? this.fallback;
		if (typeof targetPath === 'function') this.updateRoutingParameters(await targetPath());
		return targetPath;
	}

	updateRoutingParameters = api => {
		const newState = this.updateHistoryState(api.path.split('/'));
		if (newState) history.replaceState(newState, '');
	};

	/**
	 *
	 * @param {Array<string>} subPaths
	 * @returns
	 */
	updateHistoryState = subPaths => {
		let updatedHistoryState = { ...history.state };
		subPaths.forEach((subPath, index) => {
			if (!subPath.startsWith(':')) return;
			const key = subPath.replace(':', '');
			const value = addStartSlash(this.location.replace(this.routerPathname, '')).split('/')[
				index
			];
			updatedHistoryState = { ...updatedHistoryState, [key]: value };
		});
		return updatedHistoryState;
	};

	async appendMFE(route) {
		if (!route) return;
		this.active && (await this.removeMFE());
		this.active = await route();
		const element = await this.active.mount();
		this.getWrapper().appendChild(element);
	}

	async removeMFE() {
		await this.active?.unMount();
		this.wrapper.innerHTML = '';
	}

	handleLoading(bool) {
		eventBus.publish('unify:loading', bool);
	}
}

!customElements.get('ldod-router') && customElements.define('ldod-router', LdodRouter);
