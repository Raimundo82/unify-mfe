import{createElement as t,createFragment as e}from"@core";import{t as a,a as n,s}from"./api-requests-f7bd57d8.js";import{c as r}from"./constants-833df29c.js";import{references as o}from"./virtual.js";import{t as i}from"./external-deps-beceb3c1.js";await import("@ui/table.js");const l=({node:a})=>t("div",null,t("h3",{class:"text-center"},t("span",{"data-virtual-key":"category"},a.getConstants("category")),":"," ",t("span",null,a.name)),t("div",{id:"categoryInfo"},t("p",{id:"taxonomy"},t("strong",{"data-virtual-key":"taxonomy"},a.getConstants("taxonomy")),t("span",null,": "),t("a",{is:"nav-to",to:o.taxonomy(a.category?.veAcronym)},a.category?.veTitle)),t("p",{id:"fragments"},t("strong",null,a.category?.veInters.length||"0"," "),t("strong",{"data-virtual-key":"fragments"},a.getConstants("fragments")))),t("ldod-table",{id:"virtual-categoryVeTable",classes:"table table-bordered table-hover",headers:a.constants.categoryVeHeaders,data:a.category.veInters.map((a=>{const n=a.usedList[0],s=a.users;return{externalId:a.externalId,data:()=>({title:t("a",{is:"nav-to",to:i(a.xmlId,a.urlId)},a.title),virtualEdition:t("a",{is:"nav-to",to:o.virtualEdition(a.shortName)},a.editionTitle),user:s.map((e=>t("a",{is:"nav-to",to:o.user(e.username)},`${e.firstname} ${e.lastname} (${e.username})`))),useEdition:t(e,null,t("span",null,"-> "),t("a",{is:"nav-to",to:i(n.xmlId,n.urlId)},n.shortName))}),search:JSON.stringify(a)}})),constants:a.constants,language:a.language,"data-searchkey":"externalId"}));class c extends HTMLElement{constructor(t){super(),this.language=t,this.constants=Object.entries(a).reduce(((t,[e,a])=>(t[e]=a instanceof Array?a:{...r[e],...a},t)),{})}set language(t){this.setAttribute("language",t)}get language(){return this.getAttribute("language")}static get observedAttributes(){return["language"]}get name(){return this.category?.name}get title(){return this.category?.title}get acronym(){return this.category?.acronym}fetchData=async({acrn:t,cat:e})=>{await n(t,e).then((t=>this.category=t)).catch((t=>console.error(t)))};getConstants=t=>this.constants[this.language][t];async connectedCallback(){await this.fetchData(history.state),this.render()}render=()=>{this.appendChild(t("style",null,s)),this.appendChild(t(l,{node:this}))};attributeChangedCallback(t,e,a){this.onChangeAttribute[t](e,a)}onChangeAttribute={language:(t,e)=>t&&t!==e&&this.handleChangeLanguage()};handleChangeLanguage=()=>{this.querySelectorAll("[data-virtual-key]").forEach((t=>{t.firstChild.textContent=this.getConstants(t.dataset.virtualKey)}))};disconnectedCallback(){}}!customElements.get("ldod-ve-category")&&customElements.define("ldod-ve-category",c);const g=async(t,e)=>{document.querySelector(e).appendChild(new c(t))},u=()=>document.querySelector("ldod-ve-category")?.remove(),d="/acronym/:acrn/category/:cat";export{g as mount,d as path,u as unMount};
//# sourceMappingURL=ve-category-c9b8bd86.js.map