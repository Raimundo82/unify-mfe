import{createElement as e,createFragment as t}from"@core";import{t as a,a as s,s as r,b as n}from"./external-deps-9fbd6a2a.js";const o=(t,a)=>({headers:["fragments","interpretations"],jpc:"Jacinto Prado Coelho",tsc:"Teresa Sobral Cunha",rz:"Richard Zenith",jp:"Jerónimo Pizarro",pt:{all:"Todas",witnesses:"Testemunhos",searchSimple:"Pesquisa Simples",searchFor:"Pesquisar por...",searchType:"Tipo de pesquisa",searchSource:"Tipos de fonte",titleSearch:"Pesquisa por título",completeSearch:"Pesquisa completa",fragment:"Fragmento",fragments:e("div",null,e("span",{"data-search-key":"fragment"},"Fragmento "),` (${t})`),interpretation:"Interpretações",interpretations:e("div",null,e("span",{"data-search-key":"interpretation"},"Interpretações"),` (${a})`)},en:{all:"All",witnesses:"Witnesses",searchSimple:"Simple Search",searchFor:"Search for...",searchType:"Search type",searchSource:"Source types",titleSearch:"Search by title",completeSearch:"Full search",fragment:"Fragment",fragments:e("div",null,e("span",{"data-search-key":"fragment"},"Fragment"),` (${t})`),interpretation:"Interpretations",interpretations:e("div",null,e("span",{"data-search-key":"interpretation"},"Interpretations"),` (${a})`)},es:{all:"Todas",witnesses:"Testimonios",searchSimple:"Búsqueda Sencilla",searchType:"Tipo de búsqueda",searchSource:"Tipos de fuente",searchFor:"Busca por...",titleSearch:"Búsqueda por título",completeSearch:"Búsqueda completa",fragment:"Fragmento",fragments:e("div",null,e("span",{"data-search-key":"fragment"},"Fragmento"),` (${t})`),interpretation:"Interpretaciones",interpretations:e("div",null,e("span",{"data-search-key":"interpretations"},"Interpretaciones"),` (${a})`)}}),i=({node:t})=>e("form",{onSubmit:t.searchRequest},e("div",{style:{display:"flex",justifyContent:"center",gap:"20px",flexWrap:"wrap"}},e("div",{class:"form-floating"},e("input",{id:"searchTerm",class:"form-control",type:"search",name:"searchTerm",required:!0,placeholder:"searchFor"}),e("label",{"data-search-key":"searchFor"},t.getConstants("searchFor"))),e("div",{class:"form-floating"},e("select",{name:"searchType",class:"form-select",id:"searchType"},e("option",{"data-search-key":"completeSearch",value:"",selected:!0},t.getConstants("completeSearch")),e("option",{"data-search-key":"titleSearch",value:"title"},t.getConstants("titleSearch"))),e("label",{"data-search-key":"searchType"},t.getConstants("searchType"))),e("div",{class:"form-floating"},e("select",{name:"searchSource",class:"form-select",id:"source"},e("option",{value:"","data-search-key":"all"},"All"),e("option",{value:"Coelho"},o().jpc),e("option",{value:"Cunha"},o().tsc),e("option",{value:"Pizarro"},o().jp),e("option",{value:"Zenith"},o().rz),e("option",{value:"BNP","data-search-key":"witnesses"},t.getConstants("witnesses"))),e("label",{"data-search-key":"searchSource"},t.getConstants("searchSource"))),e("button",{type:"submit",class:"btn btn-outline-secondary"},e("span",{class:"icon icon-magnifying-glass"}),"search"))),l=t=>t.map((t=>({externalId:t.externalId,fragments:e("a",{is:"nav-to",content:!0,to:a(t.xmlId)},t.title),interpretations:e("a",{is:"nav-to",content:!0,to:s(t.xmlId,t.urlId)},`${t.acronym?`${t.interTitle} (${t.acronym})`:t.shortName} \n          `),search:JSON.stringify(t)}))),c=({node:t})=>e("div",{id:"search-tableContainer"},e("hr",null),e("ldod-table",{id:"search-simpleTable",classes:"table table-bordered table-hover",headers:o().headers,data:l(t.data),constants:o(t.numberOfFragments,t.numberOfInters)[t.language],"data-searchkey":"externalId"}));await import("@ui/table.js");class h extends HTMLElement{constructor(t){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(e("style",null,r)),this.mode=t?.isFragmentMode,this.language=t?.language}static get observedAttributes(){return["language"]}set language(e){e&&this.setAttribute("language",e)}get language(){return this.getAttribute("language")}get numberOfFragments(){return new Set(this.data?.map((e=>e.xmlId))).size}get numberOfInters(){return this.data?.length}get isFragmentMode(){return this.hasAttribute("fragment")}set isFragmentMode(e){this.toggleAttribute("fragment",e)}get selectedInters(){return Array.from(this.shadowRoot.querySelectorAll("tr[selected]")).map((e=>e.id))}getConstants(e){return o(this.numberOfFragments,this.numberOfInters)[this.language][e]}connectedCallback(){this.render()}render(){this.shadowRoot.appendChild(e(t,null,!this.isFragmentMode&&e("h3",{class:"text-center","data-search-key":"searchSimple"},this.getConstants("searchSimple")),e(i,{node:this}),e("br",null),e("br",null),e("div",{id:"search-tableContainer"})))}renderTable(){this.shadowRoot.querySelector("div#search-tableContainer").replaceWith(e(c,{node:this})),this.addEventListeners()}attributeChangedCallback(e,t,a){this.onChangeAttribute[e](t,a)}getSelectedInters=()=>{const e=this.selectedInters;return this.data?.filter((t=>-1!==e.indexOf(t.externalId)))};onChangeAttribute={language:(e,t)=>{e&&e!==t&&this.shadowRoot.querySelectorAll("[data-search-key]").forEach((e=>{e.innerHTML=this.getConstants(e.dataset.searchKey)}))}};disconnectedCallback(){}addEventListeners=()=>{this.isFragmentMode&&this.shadowRoot.querySelectorAll("table#search-simpleTable>tbody>tr").forEach((e=>{e.addEventListener("click",this.handleRowClick)}))};handleRowClick(){this.toggleAttribute("selected")}searchRequest=async e=>{e.preventDefault();const t=Object.fromEntries(new FormData(e.target));this.data=await n(t),this.renderTable()}}!customElements.get("ldod-search-simple")&&customElements.define("ldod-search-simple",h);export{h as LdodSearchSimple};
//# sourceMappingURL=ldod-search-simple-a5e13c63.js.map
