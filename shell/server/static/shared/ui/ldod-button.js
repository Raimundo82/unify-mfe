import t from"@ui/bootstrap/buttons-css.js";import e from"@ui/bootstrap/root-css.js";class s extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.sheet=new CSSStyleSheet,this.sheet.replaceSync(t+e),this.shadowRoot.adoptedStyleSheets=[this.sheet]}get class(){return this.getAttribute("class")??""}get type(){return this.getAttribute("type")??""}get btnId(){return this.dataset.btnid}get title(){return this.getAttribute("title")}get button(){let t=this.btnId?`#${this.btnId}`:"";return this.shadowRoot.querySelector(`button${t}`)}static get observedAttributes(){return["title"]}connectedCallback(){var t,e,s,n;this.shadowRoot.innerHTML=(t=this.btnId,e=this.class,s=this.type,n=this.title,`<button id=${t} class="${e}" type="${s}" >${n}</button>`),this.addEventListeners()}addEventListeners(){"object"==typeof this.handlers&&Object.entries(this.handlers).forEach((([t,e])=>{this.button.addEventListener(t,e)}))}attributeChangedCallback(t,e,s){this.changeAttribute[t](e,s)}changeAttribute={title:(t,e)=>{t&&t!==e&&(this.button.textContent=e)}};disconnectedCallback(){}}!customElements.get("ldod-button")&&customElements.define("ldod-button",s);export{s as LdodButton};
//# sourceMappingURL=ldod-button.js.map
