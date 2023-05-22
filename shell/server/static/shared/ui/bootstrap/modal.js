import{r as t,a as e,b as i,c as s,d as n,e as o,f as a}from"../../base-component-45dd41b6.js";var l,r={},d={},h={get exports(){return d},set exports(t){d=t}};
/*!
  * Bootstrap scrollbar.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */function c(){return l||(l=1,h.exports=function(t,e,i){const s=t=>t&&"object"==typeof t&&"default"in t?t:{default:t},n=s(t),o=s(e),a=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",l=".sticky-top",r="padding-right",d="margin-right";class h{constructor(){this._element=document.body}getWidth(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}hide(){const t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,r,(e=>e+t)),this._setElementAttributes(a,r,(e=>e+t)),this._setElementAttributes(l,d,(e=>e-t))}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,r),this._resetElementAttributes(a,r),this._resetElementAttributes(l,d)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(t,e,i){const s=this.getWidth(),n=t=>{if(t!==this._element&&window.innerWidth>t.clientWidth+s)return;this._saveInitialAttribute(t,e);const n=window.getComputedStyle(t).getPropertyValue(e);t.style.setProperty(e,`${i(Number.parseFloat(n))}px`)};this._applyManipulationCallback(t,n)}_saveInitialAttribute(t,e){const i=t.style.getPropertyValue(e);i&&o.default.setDataAttribute(t,e,i)}_resetElementAttributes(t,e){const i=t=>{const i=o.default.getDataAttribute(t,e);null!==i?(o.default.removeDataAttribute(t,e),t.style.setProperty(e,i)):t.style.removeProperty(e)};this._applyManipulationCallback(t,i)}_applyManipulationCallback(t,e){if(i.isElement(t))e(t);else for(const i of n.default.find(t,this._element))e(i)}}return h}(t(),e(),i())),d}var u,_={},f={get exports(){return _},set exports(t){_=t}};
/*!
  * Bootstrap backdrop.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */function m(){return u||(u=1,f.exports=function(t,e,i){const s=t=>t&&"object"==typeof t&&"default"in t?t:{default:t},n=s(t),o=s(i),a="backdrop",l="fade",r="show",d=`mousedown.bs.${a}`,h={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},c={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class u extends o.default{constructor(t){super(),this._config=this._getConfig(t),this._isAppended=!1,this._element=null}static get Default(){return h}static get DefaultType(){return c}static get NAME(){return a}show(t){if(!this._config.isVisible)return void e.execute(t);this._append();const i=this._getElement();this._config.isAnimated&&e.reflow(i),i.classList.add(r),this._emulateAnimation((()=>{e.execute(t)}))}hide(t){this._config.isVisible?(this._getElement().classList.remove(r),this._emulateAnimation((()=>{this.dispose(),e.execute(t)}))):e.execute(t)}dispose(){this._isAppended&&(n.default.off(this._element,d),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const t=document.createElement("div");t.className=this._config.className,this._config.isAnimated&&t.classList.add(l),this._element=t}return this._element}_configAfterMerge(t){return t.rootElement=e.getElement(t.rootElement),t}_append(){if(this._isAppended)return;const t=this._getElement();this._config.rootElement.append(t),n.default.on(t,d,(()=>{e.execute(this._config.clickCallback)})),this._isAppended=!0}_emulateAnimation(t){e.executeAfterTransition(t,this._getElement(),this._config.isAnimated)}}return u}(n(),i(),o())),_}var g,p={},b={get exports(){return p},set exports(t){p=t}};
/*!
  * Bootstrap focustrap.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */function y(){return g||(g=1,b.exports=function(t,e,i){const s=t=>t&&"object"==typeof t&&"default"in t?t:{default:t},n=s(t),o=s(e),a=s(i),l="focustrap",r=".bs.focustrap",d=`focusin${r}`,h=`keydown.tab${r}`,c="Tab",u="forward",_="backward",f={autofocus:!0,trapElement:null},m={autofocus:"boolean",trapElement:"element"};class g extends a.default{constructor(t){super(),this._config=this._getConfig(t),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return f}static get DefaultType(){return m}static get NAME(){return l}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),n.default.off(document,r),n.default.on(document,d,(t=>this._handleFocusin(t))),n.default.on(document,h,(t=>this._handleKeydown(t))),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,n.default.off(document,r))}_handleFocusin(t){const{trapElement:e}=this._config;if(t.target===document||t.target===e||e.contains(t.target))return;const i=o.default.focusableChildren(e);0===i.length?e.focus():this._lastTabNavDirection===_?i[i.length-1].focus():i[0].focus()}_handleKeydown(t){t.key===c&&(this._lastTabNavDirection=t.shiftKey?_:u)}}return g}(n(),t(),o())),p}var A,v={};
/*!
  * Bootstrap component-functions.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */function w(){return A||(A=1,function(t,e,i){const s=(t=>t&&"object"==typeof t&&"default"in t?t:{default:t})(e),n=(t,e="hide")=>{const n=`click.dismiss${t.EVENT_KEY}`,o=t.NAME;s.default.on(document,n,`[data-bs-dismiss="${o}"]`,(function(s){if(["A","AREA"].includes(this.tagName)&&s.preventDefault(),i.isDisabled(this))return;const n=i.getElementFromSelector(this)||this.closest(`.${o}`);t.getOrCreateInstance(n)[e]()}))};t.enableDismissTrigger=n,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}(v,n(),i())),v
/*!
  * Bootstrap modal.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */}({get exports(){return r},set exports(t){r=t}}).exports=function(t,e,i,s,n,o,a,l){const r=t=>t&&"object"==typeof t&&"default"in t?t:{default:t},d=r(e),h=r(i),c=r(s),u=r(n),_=r(o),f=r(a),m="modal",g=".bs.modal",p="Escape",b=`hide${g}`,y=`hidePrevented${g}`,A=`hidden${g}`,v=`show${g}`,w=`shown${g}`,E=`resize${g}`,k=`click.dismiss${g}`,T=`mousedown.dismiss${g}`,x=`keydown.dismiss${g}`,D=`click${g}.data-api`,$="modal-open",L="fade",C="show",N="modal-static",j=".modal.show",M=".modal-dialog",P=".modal-body",S='[data-bs-toggle="modal"]',O={backdrop:!0,focus:!0,keyboard:!0},B={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class F extends u.default{constructor(t,e){super(t,e),this._dialog=h.default.findOne(M,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new c.default,this._addEventListeners()}static get Default(){return O}static get DefaultType(){return B}static get NAME(){return m}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||this._isTransitioning||d.default.trigger(this._element,v,{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add($),this._adjustDialog(),this._backdrop.show((()=>this._showElement(t))))}hide(){!this._isShown||this._isTransitioning||d.default.trigger(this._element,b).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(C),this._queueCallback((()=>this._hideModal()),this._element,this._isAnimated()))}dispose(){for(const t of[window,this._dialog])d.default.off(t,g);this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new _.default({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new f.default({trapElement:this._element})}_showElement(e){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const i=h.default.findOne(P,this._dialog);i&&(i.scrollTop=0),t.reflow(this._element),this._element.classList.add(C);const s=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,d.default.trigger(this._element,w,{relatedTarget:e})};this._queueCallback(s,this._dialog,this._isAnimated())}_addEventListeners(){d.default.on(this._element,x,(t=>{if(t.key===p){if(this._config.keyboard)return t.preventDefault(),void this.hide();this._triggerBackdropTransition()}})),d.default.on(window,E,(()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()})),d.default.on(this._element,T,(t=>{d.default.one(this._element,k,(e=>{if(this._element===t.target&&this._element===e.target){if("static"===this._config.backdrop)return void this._triggerBackdropTransition();this._config.backdrop&&this.hide()}}))}))}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide((()=>{document.body.classList.remove($),this._resetAdjustments(),this._scrollBar.reset(),d.default.trigger(this._element,A)}))}_isAnimated(){return this._element.classList.contains(L)}_triggerBackdropTransition(){if(d.default.trigger(this._element,y).defaultPrevented)return;const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._element.style.overflowY;"hidden"===e||this._element.classList.contains(N)||(t||(this._element.style.overflowY="hidden"),this._element.classList.add(N),this._queueCallback((()=>{this._element.classList.remove(N),this._queueCallback((()=>{this._element.style.overflowY=e}),this._dialog)}),this._dialog),this._element.focus())}_adjustDialog(){const e=this._element.scrollHeight>document.documentElement.clientHeight,i=this._scrollBar.getWidth(),s=i>0;if(s&&!e){const e=t.isRTL()?"paddingLeft":"paddingRight";this._element.style[e]=`${i}px`}if(!s&&e){const e=t.isRTL()?"paddingRight":"paddingLeft";this._element.style[e]=`${i}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(t,e){return this.each((function(){const i=F.getOrCreateInstance(this,t);if("string"==typeof t){if(typeof i[t]>"u")throw new TypeError(`No method named "${t}"`);i[t](e)}}))}}return d.default.on(document,D,S,(function(e){const i=t.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&e.preventDefault(),d.default.one(i,v,(e=>{e.defaultPrevented||d.default.one(i,A,(()=>{t.isVisible(this)&&this.focus()}))}));const s=h.default.findOne(j);s&&F.getInstance(s).hide(),F.getOrCreateInstance(i).toggle(this)})),l.enableDismissTrigger(F),t.defineJQueryPlugin(F),F}(i(),n(),t(),c(),a(),m(),y(),w());const E=r;export{E as default};