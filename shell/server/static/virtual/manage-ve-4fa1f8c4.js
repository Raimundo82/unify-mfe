import{fetcher as t,createElement as e,createFragment as a}from"@core";import{c as n}from"./constants-833df29c.js";import{errorPublisher as r,messagePublisher as i}from"./event-module-0f223477.js";import"./virtual.js";const s="/virtual/admin",o=async()=>await t.get(`${s}/virtual-editions`,null),l=({root:t})=>e("ldod-table",{id:"virtual-manageVeTable",classes:"table table-bordered table-hover",headers:t.constants.headersManage,data:t.virtualEditions.map((a=>({externalId:a.externalId,data:()=>({acronym:a.acronym,title:a.title,editors:a.activeMembers.join(", "),categories:a.categories.join(", "),annotations:a.annotations.join(", "),remove:e("span",{id:a.externalId,"data-acrn":a.acronym,class:"icon icon-trash",onClick:t.handleRemoveVE})}),search:JSON.stringify(a)}))),constants:t.constants,language:t.language,"data-searchkey":"externalId"});await import("@ui/table.js"),import("@ui/buttons.js").then((({exportButton:t,uploadButton:e})=>{t(),e()}));class d extends HTMLElement{constructor(){super()}get constants(){return n}get language(){return this.getAttribute("language")}get wrapper(){return this.querySelector("div#manageVeWrapper")||e("div",{id:"manageVeWrapper"})}get table(){return this.querySelector("#virtual-manageVeTable")}static get observedAttributes(){return["language"]}getConstants(t,...e){const a=n[this.language][t];return e.length?a(...e):a}connectedCallback(){this.appendChild(this.wrapper),this.addEventListeners()}updateData=t=>{this.virtualEditions=t,this.render()};render(){var t;this.wrapper.innerHTML="",this.wrapper.appendChild(e(a,null,e("h3",{class:"text-center","data-virtual-key":"manageVE"},(t=this).getConstants("manageVE"),e("span",null,` (${t.virtualEditions.length})`)),e("div",{class:"flex-row"},e("div",{class:"flex-column"},e("ldod-upload",{id:"corpus",width:"600px","data-virtual-button-key":"uploadVeCorpus",title:t.getConstants("uploadVeCorpus"),"data-url":"/virtual/admin/upload-virtual-corpus"}),e("ldod-upload",{id:"fragments",width:"600px","data-virtual-button-key":"uploadVeFragments",multiple:!0,title:t.getConstants("uploadVeFragments"),"data-url":"/virtual/admin/upload-virtual-fragments"})),e("div",{class:"flex-column"},e("ldod-export",{width:"350px","file-type":"zip","data-virtual-button-key":"exportVe",title:t.getConstants("exportVe"),"file-prefix":"VirtualEditionsFragments","data-url":"/virtual/admin/export-virtual-editions",method:"GET"}))),e("div",null,e(l,{root:t}))))}attributeChangedCallback(t,e,a){this.handleChangedAttribute[t](e,a)}handleChangedAttribute={language:(t,e)=>{t&&t!==e&&(this.updateElementContent(),this.updateTooltipContent(),this.updateButtonContent())}};addEventListeners=()=>{this.addEventListener("ldod:file-uploaded",this.handleFileUploaded),this.addEventListener("ldod-table-searched",this.updateTitle)};handleFileUploaded=t=>{t.stopPropagation();const e=t.detail.payload;if(!e.ok)return r(e.message);o().then((t=>{this.updateData(t),i(e.message)})).catch((t=>console.error(t)))};updateTitle=({detail:t})=>{this.querySelector("h3>span").textContent=` (${t.size})`};handleRemoveVE=async({target:e})=>{confirm(`Are you sure you want to remove the Virtual Edition ${e.dataset.acrn} ?`)&&(async e=>await t.get(`${s}/virtual-edition-delete/${e}`,null))(e.id).then((t=>{this.virtualEditions=t||[],this.render()})).catch(console.error)};updateElementContent=()=>{this.querySelectorAll("[data-virtual-key]").forEach((t=>t.firstChild.textContent=t.dataset.args?this.getConstants(t.dataset.virtualKey,JSON.parse(t.dataset.args)):this.getConstants(t.dataset.virtualKey)))};updateButtonContent=()=>{this.querySelectorAll("[data-virtual-button-key]").forEach((t=>{t.setAttribute("title",this.getConstants(t.dataset.virtualButtonKey))}))};updateTooltipContent=()=>{this.querySelectorAll("[data-virtual-tooltip-key]").forEach((t=>{t.setAttribute("content",this.getConstants(t.dataset.virtualTooltipKey))}))}}!customElements.get("ldod-manage-ve")&&customElements.define("ldod-manage-ve",d);const u=async(t,a)=>{o().then((t=>n.updateData(t))).catch((t=>console.error(t)));const n=document.querySelector(a).appendChild(e("ldod-manage-ve",{language:t,virtualEditions:[]}))},c=()=>document.querySelector("ldod-manage-ve")?.remove(),p="/manage-virtual-editions";export{u as mount,p as path,c as unMount};
//# sourceMappingURL=manage-ve-4fa1f8c4.js.map