import{ldodValidator as t,navigateTo as e}from"@core";import{g as n,b as i,u as a,c as r}from"./api-requests-c6fca00d.js";import"@core-ui";import"@ui/tooltip.js";import s from"@ui/bootstrap/buttons-css.js";import{t as o}from"./text-7122b869.js";import{f as d,p as l}from"./constants-5d8195b3.js";const c={diff:!1,del:!1,sub:!1,ins:!0,note:!0,fac:!1,line:!1,align:!1,pbText:null},h=t=>"manuscript"===t||"printed"===t,u=t=>1===t.length&&h(t[0].sourceType),p=t=>t&&["_ED_CRIT_","_MS_"].every((e=>!t.includes(e))),g={type:"object",properties:{type:{type:"string"},tooltip:{type:"string"},data:{type:"array",items:{$ref:"/data"}}},required:["type"]},m={id:"/data",type:"object",properties:{name:{type:"string"},url:{type:"string"},inters:{type:"array",items:{$ref:"/inters"}}}},x={id:"/inters",type:"object",properties:{title:{type:"string"},externalId:{type:"string"},current:{$ref:"/inter"},checked:{type:"boolean"}},required:["externalId","current","checked"]},f={id:"/inter",type:"object",properties:{xmlId:{type:"string"},urlId:{type:"string"},name:{type:"string"}},required:["xmlId","urlId"]};t.addSchema(m,"/data"),t.addSchema(x,"/inters"),t.addSchema(f,"/inter");const v=(t,e)=>window.references?.text?.fragmentInter?.(t,e),b=({data:t,type:e,tooltip:n})=>`\n        <div class="wrapper">\n            ${function(t,e){return`\n        <div class="title-container">\n                <h5 data-key="type">${t}</h5>\n                ${function(t){return t?`\n        <span id="title-info" is="ldod-span-icon" icon="circle-info" size="12pt"></span>\n        <ldod-tooltip\n                data-ref="span#title-info"\n                data-tooltip-key="tooltip"\n                placement="bottom"\n                light\n                width="200px"\n                content="${t}"\n        ></ldod-tooltip>\n`:""}(e)}\n        </div>\n    `}(e,n)} ${t.reduce(((t,e)=>t+`\n            <div class="grid-container">\n                ${e.name?`\n                <div class="caption">\n                    <a is="nav-to" to="${e.url}">${e.name}</a>\n                </div>\n                `:""} ${e.inters.reduce(((t,e)=>t+function(t){return`\n            <div class="grid">\n                <div>${(t=>`<input name="${t.current.urlId}" id="${t.externalId}" ${t.checked?"checked":""} type="checkbox">`)(t)}</div>\n                <div>${I("left",t.previous)}</div>\n                <div class="frag">\n                    <a\n                        is="nav-to"\n                        to="${v(t.current.xmlId,t.current.urlId)}"\n                    >\n                        ${t.current.name}\n                    </a>\n                </div>\n                <div>${I("right",t.next)}</div>\n                <div></div>\n            </div>\n        `}(e)),"")}\n            </div>\n            ${e.add?function(t){return`\n        <div style="text-align: center;">\n            <button\n                id="btn-add"\n                type="button"\n                data-ve-id="${t.veId}"\n                data-inter-id="${t.interId}"\n                class="btn btn-sm btn-primary"\n                title="Add fragment interpretation to ${t.acronym}"\n            >\n                <span is="ldod-span-icon" icon="plus" size="12px" fill="#fff" style="pointer-events: none;"></span>\n            </button>\n        </div>\n    `}(e):""}`),"")}\n        </div>`;function I(t,e){return`\n        <a is="nav-to" ${e?`to=${v(e.xmlId,e.urlId)}`:"hidden"}>\n            <span is="ldod-span-icon" icon="chevron-${t}" size="15px" fill="#0d6efd"></span>\n        </a>\n    `}const y=new CSSStyleSheet;y.replaceSync(s+"div.wrapper{margin:1rem 0}div.title-container{text-align:center}div.title-container>h5{font-size:14px;margin-bottom:10px;margin-top:10px;font-family:inherit;font-weight:500;line-height:1.1;color:inherit;display:inline-block;vertical-align:middle}span[is=ldod-span-icon]{cursor:pointer}a[is=nav-to]{cursor:pointer;color:var(--bs-primary)!important}a[is=nav-to]:hover{text-decoration:underline}div.grid-container{text-align:center}.grid{display:grid;align-items:center;align-self:center;grid-template-columns:10% 15% 50% 15% 10%;gap:2px}div.caption{text-align:center;padding-top:8px;padding-bottom:8px;color:#777}input[type=checkbox]{width:.8rem;height:.8rem;cursor:pointer;vertical-align:middle}div.frag{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}\n");class w extends HTMLElement{constructor(){super(),this.checkboxes=[],this.id||(this.id=crypto.randomUUID()),this.attachShadow({mode:"open"}),this.shadowRoot.adoptedStyleSheets=[y]}static get observedAttributes(){return["data-input"]}hasInput(){return this.hasAttribute("data-input")}connectedCallback(){this.render()}render(){this.hasInput()&&(this.data=JSON.parse(this.dataset.input??"{}"),function(e){const{errors:n,valid:i}=t.validate(e,g);return n.forEach((t=>console.error(t))),i}(this.data)&&(this.removeEventListeners(),this.removeAttribute("data-input"),this.shadowRoot.innerHTML=b(this.data),this.checkboxes=Array.from(this.shadowRoot.querySelectorAll("input[type='checkbox']")),this.addBtns=Array.from(this.shadowRoot.querySelectorAll("button#btn-add")),this.addEventListeners()))}attributeChangedCallback(t,e,n){this.changedAttribute[t]?.(e,n)}addEventListeners=()=>{this.checkboxes.forEach((t=>t.addEventListener("change",this.onCheckbox))),this.addBtns.forEach((t=>t.addEventListener("click",this.onAdd)))};removeEventListeners(){this.checkboxes.forEach((t=>t.removeEventListener("change",this.onCheckbox)))}onCheckbox=t=>{this.dispatchEvent(S(`${this.id}:changed`,{id:t.target.id,name:t.target.name,selected:this.checkboxes.filter((t=>t.checked)).map((({name:t,id:e})=>({id:e,name:t})))}))};onAdd=t=>this.dispatchEvent(S(`${this.id}:clicked`,{target:t.target}));changedAttribute={"data-input":(t,e)=>e&&this.render()}}function S(t,e){return new CustomEvent(t,{detail:e,bubbles:!0,composed:!0})}!customElements.get("frag-nav-panel")&&customElements.define("frag-nav-panel",w);const C={pt:{witnesses:"Testemunhos",experts:"Edições dos Peritos",expertsTooltip:"O mesmo testemunho pode ser interpretado como mais do que um texto pelos editores. Estas variações na divisão de fragmentos baseiam-se quer em marcações autógrafas (traços horizontais ou espaços entre blocos de texto), quer em interpretações sobre a proximidade semântica dos blocos textuais.",diff:"Realçar Diferenças",diffInfo:"Realça variações entre as transcrições em comparação",del:"Mostrar Apagados",delInfo:"Mostra texto apagado por Fernando Pessoa",ins:"Realçar Inseridos",insInfo:"Realça texto inserido por Fernando Pessoa",sub:"Realçar Substituições",subInfo:"Realça texto apagado e substituído por Fernando Pessoa",note:"Mostrar Notas",noteInfo:"Mostra a informação sobre as fontes das transcrições",fac:"Fac-símile",facInfo:"imagem dos documentos originais",line:"Linha-a-linha",align:"Alinhar Espaços",variations:"Tabela de Variações",lineByLineInfo:"O gradiente de cor aumenta consoante o número de diferenças entre as transcrições em comparação"},en:{witnesses:"Witnesses",experts:"Expert Editions",expertsTooltip:"The same witness can be interpreted as more than one text by the editors. Variations in fragment division are based either upon autograph marks (such as horizontal rulers or spaces between text blocks) or upon interpretations about semantic relations between text blocks.",diff:"Highlight Differences",diffInfo:"Highlights variations in compared transcriptions",del:"Show Deleted",delInfo:"Show deletions by Fernando Pessoa",ins:"Highligh Inserted",insInfo:"Highlights additions by Fernando Pessoa",sub:"Highlight Substitutions",subInfo:"Highlights passages deleted for substituiton by Fernando Pessoa",note:"Show Notes",noteInfo:"Show information about transcription sources",fac:"Facsimile",facInfo:"Image of the original documents",line:"Line-by-line",align:"Align Spaces",variations:"Variations Table",lineByLineInfo:"Colour gradient increases according to the number of differences across compared editions"},es:{witnesses:"Testimonios",experts:"Ediciones de los Especialistas ",expertsTooltip:"El mismo testimonio puede ser interpretado como más de un texto según los editores. Estas variaciones en la división de los fragmentos se basan bien en marcaciones autógrafas (trazos horizontales o espacios entre bloques del texto), bien en interpretaciones sobre la proximidad semántica de los bloques textuales.",diff:"Realzar Diferencias",diffInfo:"Realza variaciones entre las transcripciones en comparación",del:"Mostrar Eliminados",delInfo:"Muestra texto eliminado por Fernando Pessoa",ins:"Realzar Acrecentados",insInfo:"Realza texto añadido por Fernando Pessoa",sub:"Realzar Sustituciones",subInfo:"Realza texto eliminado y substituido por Fernando Pessoa",note:"Mostrar Notas",noteInfo:"Muestra la información sobre las fuentes de las transcripciones",fac:"Facsimile",facInfo:"Imagen de los documentos originales",line:"Línea a línea",align:"Alinear Espacios",variations:"Tabla de Variaciones",lineByLineInfo:"El gradiente de color aumenta según el número de diferencias entre las transcripciones en comparación"}},T=(t,e)=>t.map((t=>({inters:t.map((t=>({externalId:t.externalId,current:{xmlId:t.xmlId,urlId:t.urlId,name:t.shortName},checked:e.includes(t.externalId)})))}))),k=(t,e)=>t.filter(Boolean).map((t=>({name:t[0]?.editor,url:o.edition(t[0]?.acronym),inters:t.map((t=>({externalId:t.externalId,previous:{xmlId:t.prevXmlId,urlId:t.prevUrlId},current:{xmlId:t.xmlId,urlId:t.urlId,name:t.number.toString()},next:{xmlId:t.nextXmlId,urlId:t.nextUrlId},checked:e.includes(t.externalId)})))})));function E(t,e,n){return JSON.stringify({type:C[e][t],tooltip:C[e][`${t}Tooltip`],data:n})}class $ extends HTMLElement{constructor(){super(),this.transcriptionCheckboxes=c,$.instance=this}get language(){return this.getAttribute("language")}get hasVirtualInters(){return this.dataset.virtualInters}get hasTextInters(){return this.dataset.textInters}get hasNoInters(){return!this.hasTextInters&&!this.hasVirtualInters}get type(){const{urlId:t,textInters:e,virtualInters:n}=this.dataset;return t?p(t)&&(this.hasNoInters||n)?"virtual":this.hasNoInters||e?"text":"virtual":n?"virtual":"text"}static get observedAttributes(){return["language"]}attributeChangedCallback(t,e,n){this.handeChangedAttribute[t](e,n)}handeChangedAttribute={language:(t,e)=>{t&&t!==e&&this.handleChangedLanguage()}};handleChangedLanguage=()=>{this.querySelectorAll("[language]").forEach((t=>t.setAttribute("language",this.language))),this.querySelectorAll("[data-key]").forEach((t=>t.firstChild.textContent=this.getConstants(t.dataset.key))),this.querySelectorAll("[data-tooltip-key]").forEach((t=>t.setAttribute("content",this.getConstants(t.dataset.tooltipKey))))};getConstants(t,...e){const n=C[this.language][t]??d[this.language][t];return e.length?n(...e):n}async render(){this.innerHTML="<style>a,a[is=nav-to][to]{color:#0c4ef6;cursor:pointer}a:hover,a[is=nav-to][to]:hover{text-decoration:underline}div#text-checkBoxesContainer.interCheckboxes{display:flex;flex-wrap:wrap;gap:10px}@media (max-width: 768px){div#text-checkBoxesContainer.interCheckboxes{flex-direction:column}}td{padding:0}caption{padding-top:8px;padding-bottom:8px;color:#777;text-align:left}.editorialStyle{font-size:medium;font-family:Georgia,Times New Roman,Times,serif}.authorialStyle{font-family:Courier New,Courier,monospace}.well{min-height:20px;padding:19px;margin-bottom:20px;background-color:#f5f5f5;border:1px solid #e3e3e3;border-radius:4px;-webkit-box-shadow:inset 0 1px 1px rgb(0 0 0 / 5%);box-shadow:inset 0 1px 1px #0000000d}hr{box-sizing:content-box;margin-top:20px;margin-bottom:20px;border:0;border-top:1px solid #eee;height:0}small{font-size:85%}div.text-fac-transcription{display:grid;grid-template-columns:50% 50%}div#fac-viewer{margin-right:10px}.sideBySide{display:flex;gap:16px}.font-monospace{font-family:monospace}.font-georgia{font-family:Georgia,Times New Roman,Times,serif}@media (max-width: 992px){div.text-fac-transcription,div#text-transcriptionsSideBySide.sideBySide{flex-direction:column}}table#text-variationsTable{width:100%;max-width:100%;margin-bottom:20px;border-spacing:0;border-collapse:collapse}table#text-variationsTable td,table#text-variationsTable th{text-align:start}.table-condensed>thead>tr>th,.table-condensed>tbody>tr>td{padding:5px}.table>thead:first-child>tr:first-child>th{border-top:0}.table>thead>tr>th{vertical-align:bottom;border-bottom:2px solid #ddd}.table>tbody>tr>td{line-height:1.42857143;vertical-align:top;border-top:1px solid #ddd}@media (min-width: 992px){.text-sideBySideWrapper{width:50%}}p{margin:0 0 10px}@media (min-width: 992px) and (max-width: 1199px){.text-md-justify{text-align:justify}}@media (min-width: 1200px){.text-lg-justify{text-align:justify}}@media (min-width: 768px) and (max-width: 991px){.text-sm-justify{text-align:justify}}@media (max-width: 767px){.text-xs-left{text-align:left}div.text-fac-transcription{grid-template-columns:auto}}.text-warning{color:#8a6d3b}abbr[data-original-title],abbr[title]{cursor:help;border-bottom:1px dotted #777}\n</style>",+this.hasTextInters>=1&&(this.data=await i(this.dataset.xmlId,this.getRequestBody(!0))),this.onRender[this.type]()}onRender={virtual:()=>{this.insertAdjacentHTML("beforeend",(({language:t,xmlId:e,urlId:n})=>`\n        <virtual-transcription\n            xmlid="${e}"\n            urlid="${n||""}"\n            language="${t}"\n        ></virtual-transcription>`)({language:this.language,xmlId:this.dataset.xmlId,urlId:this.dataset.urlId}))},text:async()=>{let t;var e;this.hasNoInters?t=l(`<h4 class="text-center">${this.data.title}</h4>`):u(this.data.inters||[])?t=await async function({root:t,inter:e}){return(await import("./source-inter-faec0ad6.js")).default({root:t,inter:e})}({root:this,inter:this.data.inters[0]}):1!==(e=this.data.inters??[]).length||h(e[0].sourceType)?(t=>t.transcriptions?.length>1)(this.data)?t=await async function({root:t,inters:e}){return(await import("./side-by-side-transcriptions-3e196d12.js")).default({root:t,inters:e})}({root:this,inters:this.data.inters}):(t=>1===t.transcriptions?.length&&t.inters?.length>1)(this.data)&&(t=await async function({root:t,inters:e}){return(await import("./line-by-line-transcriptions-6ed4eb16.js")).default({root:t,inters:e})}({root:this,inters:this.data.inters})):t=await async function({root:t,inter:e}){return(await import("./editorial-inter-512cf763.js")).default({root:t,inter:e})}({root:this,inter:this.data.inters[0]}),t&&this.appendChild(t)}};renderTextFragInterpretation={empty:()=>console.log("empty"),transcription:()=>console.log(this.data)};getRequestBody(t){return this.updateTranscriptCheckboxesValue(t),{inters:this.textIntersSelected.map((t=>t.externalId)),...c}}updateTranscriptCheckboxesValue=t=>{if(t)return this.transcriptionCheckboxes=c;this.querySelectorAll("div#text-checkBoxesContainer input[type='checkbox']").forEach((t=>this.transcriptionCheckboxes[t.name]=t.checked))};handleTranscriptionCheckboxChange=async()=>{this.data=await a(this.dataset.xmlId,this.dataset.urlId,this.getRequestBody()),this.render()};onChangeFac=({page:t})=>{const e=this.data.inters[0].surfaceDetailsList[t];this.transcriptionCheckboxes.pbText=e.pbText,a(this.dataset.xmlId,this.dataset.urlId,this.getRequestBody()).then((t=>{this.data=t,this.querySelector("div#transcriptionContainer").innerHTML=t.transcriptions[0]}))}}customElements.define("frag-inter",$);function L(t){return t.externalId}let A;customElements.define("frag-orchestrator",class extends HTMLElement{constructor(){super(),this.textIntersSelected=[],this.innerHTML='\n    <style>@media (width < 991.8px){div#fragment-nav-container{padding:20px}}@media (width >= 992px){div#fragment-container{margin-left:0;margin-right:0;display:flex;justify-content:space-between}div#fragment-inter-container{width:75%;min-width:300px}div#fragment-nav-container{width:25%;min-width:300px;margin-left:2rem}}\n</style>\n    <div id="fragment-container">\n        <div id="fragment-inter-container"></div>\n        <div id="fragment-nav-container">\n            <div id="text-fragment-nav-container"></div>\n            <div id="virtual-fragment-nav-container"></div>\n        </div>\n    </div>',this.textNavContainer=this.querySelector("#text-fragment-nav-container"),this.virtualNavContainer=this.querySelector("#virtual-fragment-nav-container"),this.interContainer=this.querySelector("#fragment-inter-container"),this.xmlId=history.state.xmlId,this.urlId=history.state.urlId}static get observedAttributes(){return["language"]}get language(){return this.getAttribute("language")}get isVirtualInter(){return p(this.urlId)}attributeChangedCallback(t,e,n){this.handeChangedAttribute[t](e,n)}handeChangedAttribute={language:(t,e)=>{t&&t!==e&&this.handleChangedLanguage()}};handleChangedLanguage=()=>{this.renderFragNavContainer(),this.querySelectorAll("[language]").forEach((t=>t.setAttribute("language",this.language)))};async connectedCallback(){if(this.addEventListeners(),!this.xmlId)return e("/");await this.fetchData(),this.render()}async fetchData(){this.data=this.urlId&&!this.isVirtualInter?await(async(t,e)=>await n(t,e,{inters:[],...c}))(this.xmlId,this.urlId):await r(this.xmlId),this.textIntersSelected=this.data.inters||[]}render(){this.renderFragNavContainer(),this.renderInterContainer()}renderFragNavContainer(){this.renderTextNavContainer(),this.renderVirtualNavContainer()}renderInterContainer(){this.interContainer.innerHTML=`\n\t\t\t<frag-inter\n\t\t\t\tlanguage="${this.language}"\n\t\t\t\tdata-url-id="${this.urlId||""}"\n\t\t\t\tdata-xml-id="${this.xmlId||""}"\n\t\t\t\tdata-virtual-inters="${this.virtualInters||""}"\n\t\t\t\tdata-text-inters='${this.textIntersSelected.length||""}'\n\t\t\t></frag-inter>\n\t\t\t`;const t=customElements.get("frag-inter").instance;t.data=this.data,t.textIntersSelected=this.textIntersSelected,t.render()}renderTextNavContainer(){this.textNavContainer.innerHTML=function(t,e,n){const i=e,a=t.sortedSourceInterList,r=Object.values(t.expertsInterMap);return`\n\t\t<div id="text-frag-nav-container">\n\t\t\t<frag-nav-panel \n\t\t\t\tid="witnesses"\n\t\t\t\tdata-input='${E("witnesses",n,T([a],i))}'\n\t\t\t>\n\t\t\t</frag-nav-panel>\n\t\t\t<frag-nav-panel\n\t\t\t\tid="experts"\n\t\t\t\tdata-input='${E("experts",n,k(r,i))}'\n\t\t\t>\n\t\t\t</frag-nav-panel>\n\t\t</div>\n\t\t`}(this.data,this.textIntersSelected.map(L),this.language)}renderVirtualNavContainer(){this.virtualNavContainer.innerHTML=(({language:t,xmlId:e,urlId:n})=>`\n\t\t<virtual-frag-nav\n\t\t\tlanguage="${t}"\n\t\t\tfragment="${e}"\n\t\t\t${p(n)?`urlid="${n}"`:""}\t\t\t\t\n\t\t></virtual-frag-nav>`)({language:this.language,xmlId:this.xmlId,urlId:this.textIntersSelected.length?"":this.urlId})}renderTextInter(){this.interContainer.insertAdjacentHTML("afterbegin","")}addEventListeners(){this.addEventListener("experts:changed",this.onTextInterSelection),this.addEventListener("witnesses:changed",this.onTextInterSelection),this.addEventListener("virtual:inter-selected",this.onVirtualInterSelection)}onVirtualInterSelection(t){this.virtualInters=t.detail.virtualInters,this.textIntersSelected=[],this.urlId="",this.renderTextNavContainer(),this.renderInterContainer()}async onTextInterSelection({detail:t}){this.updadeTextIntersSelection({externalId:t.id,urlId:t.name}),this.virtualInters="",this.renderVirtualNavContainer(),this.renderInterContainer()}updadeTextIntersSelection(t){this.textIntersSelected.map((t=>t.externalId)).includes(t.externalId)?this.removeFromIntersSelected(t):this.addToIntersSelected(t)}addToIntersSelected(t){this.textIntersSelected.push(t)}removeFromIntersSelected(t){this.textIntersSelected=this.textIntersSelected.filter((e=>e.externalId!==t.externalId))}});const N=Object.freeze(Object.defineProperty({__proto__:null,mount:async(t,e)=>{document.querySelector(e).innerHTML=`<frag-orchestrator language="${t}"></frag-orchestrator>`,async function(){A||!window.mfes?.includes("virtual")||(A=await import("virtual").catch(console.error),A?.loadFragment())}()},path:"/fragment/:xmlId/inter/:urlId",unMount:()=>customElements.get("frag-orchestrator")?.instance?.remove()},Symbol.toStringTag,{value:"Module"}));export{N as f,u as i};
//# sourceMappingURL=fragment-4f2a08df.js.map
