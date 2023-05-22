import{createElement as e,createFragment as t}from"@core";import"@ui/modal-bs.js";import{r as a,c as s}from"./virtual-editions-router-09df2ce5.js";import{references as n}from"./virtual.js";import{s as o}from"./style-a25cc231.js";import i from"@ui/bootstrap/forms-css.js";import r from"@ui/bootstrap/buttons-css.js";import"./constants-833df29c.js";import"./event-module-0f223477.js";const l={gamesHeaders:["description","title","date","publicAnnotation","category","players","winner","responsible","remove"],pt:{createCG:"Criar Jogo de Classificação",create:"Criar",description:"Descrição",title:"Título",date:"Data",publicAnnotation:"Anotar fragmentos",category:"Categoria",players:"Jogadores",winner:"Vencedor",responsible:"Responsável",remove:"Apagar",all:"Utilizadores Registados",members:"Editores da Edição",inter:"Interpretação",game:"Jogo de Classificação"},en:{createCG:"Create Classification Game",create:"Create",description:"description",title:"title",date:"date",publicAnnotation:"Annotate fragments",category:"Category",players:"Players",winner:"Winner",responsible:"Responsible",remove:"Delete",all:"Registered Users",members:"Edition Editors",inter:"Interpretation",game:"Classification Game"},es:{create:"create",createCG:"Criar Juego de Classificatión",description:"Descrição",title:"Título",date:"Data",publicAnnotation:"Anotar fragmentos",category:"Categoria",players:"Jogadores",winner:"Vencedor",responsible:"Responsável",remove:"Apagar",all:"Usuarios Registrados",members:"Editores de la Edicíon",inter:"Interpretación",game:"Juego de Classificatión"}},d=s=>s.games.map((o=>({externalId:o.externalId,data:()=>({description:o.description,title:e(t,null,!o.active&&e("span",{is:"ldod-span-icon",icon:"asterisk",class:"success",fill:"#333",size:"12px",style:{marginRight:"8px"}}),e("a",{is:"nav-to",target:"_blank",to:n.game(o.veExternalId,o.externalId)},o.title)),date:o.date,publicAnnotation:o.publicAnnotation?s.getConstants("all"):s.getConstants("members"),category:o.category,players:o.players.map((t=>e("a",{key:crypto.randomUUID(),is:"nav-to",to:n.user(t.username)},t.firstname," $",t.lastname))),winner:o.winner,responsible:o.responsible,remove:o.canBeRemoved&&e("div",{class:"center-container"},e("span",{is:"ldod-span-icon",icon:"trash-can",fill:"#dc3545",size:"1.25rem",onClick:()=>(async(e,t,s)=>{const n=await a(e,t);s.updateTable(n)})(o.veExternalId,o.externalId,s)}))}),search:JSON.stringify(o)}))),c=({node:t})=>e("ldod-table",{language:t.language,id:"virtual-veGames",classes:"table  table-hover",headers:l.gamesHeaders,data:d(t),constants:l,"data-searchkey":"externalId"}),m=e=>String(e).padStart(2,"0"),p=()=>{const e=new Date;return`${e.getFullYear()}-${m(e.getMonth()+1)}-${m(e.getDate())}T${m(e.getHours())}:${m(e.getMinutes())}`},g=({node:a})=>e(t,null,e("h5",{class:"text-center"},a.getConstants("createCG")),e("div",{class:"mb-4"},e("label",{class:"control-label"},e("strong",null,a.getConstants("players"),":")),e("em",null,a.publicAnnotation?a.getConstants("all"):a.getConstants("members"))),e("form",{onSubmit:e=>((e,t)=>{e.preventDefault();const a=e.target,n=Object.fromEntries(new FormData(a));s(t.edition.externalId,n).then((e=>{t.updateTable(e),a.reset()}))})(e,a)},e("div",{style:{display:"flex",justifyContent:"space-between",columnGap:"16px"}},e("div",{style:{width:"90%"}},e("div",{style:{display:"flex",justifyContent:"space-between",columnGap:"16px",marginBottom:"16px"}},e("div",{style:{width:"100%"},class:"form-floating"},e("input",{id:"gameDescription",class:"form-control",type:"text",name:"description",required:!0,placeholder:a.getConstants("description")}),e("label",null,a.getConstants("description"))),e("div",{style:{width:"100%"},class:"form-floating"},e("input",{id:"gameDateTime",class:"form-control",type:"datetime-local",name:"date",value:p(),required:!0,placeholder:a.getConstants("date")}),e("label",null,a.getConstants("date")))),e("div",{class:"form-floating"},e("select",{name:"interExternalId",class:"form-select",id:"gameInter",required:!0,placeholder:a.getConstants("inter")},a.inters.map((t=>e("option",{key:crypto.randomUUID(),value:t.externalId},t.title)))),e("label",{for:"public"},a.getConstants("inter")))),e("button",{style:{width:"10%"},type:"submit",class:"btn btn-primary"},a.getConstants("create"))))),h=new CSSStyleSheet;h.replaceSync(r+i+o+"ldod-table#virtual-veGames .table-container{border:none!important}td:has(span.success){background-color:#dff0d8}table#virtual-veGames{border-collapse:collapse!important}table#virtual-veGames th{border-top:none!important}table#virtual-veGames th:nth-child(1),table#virtual-veGames th:nth-child(2),table#virtual-veGames th:nth-child(3),table#virtual-veGames th:nth-child(4),table#virtual-veGames th:nth-child(5),table#virtual-veGames th:nth-child(6),table#virtual-veGames th:nth-child(7),table#virtual-veGames th:nth-child(8){text-align:start}table#virtual-veGames td:nth-child(9){text-align:center}span.icon-asteris{background:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3Cpath d='M192 32c17.7 0 32 14.3 32 32V199.5l111.5-66.9c15.2-9.1 34.8-4.2 43.9 11s4.2 34.8-11 43.9L254.2 256l114.3 68.6c15.2 9.1 20.1 28.7 11 43.9s-28.7 20.1-43.9 11L224 312.5V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V312.5L48.5 379.4c-15.2 9.1-34.8 4.2-43.9-11s-4.2-34.8 11-43.9L129.8 256 15.5 187.4c-15.2-9.1-20.1-28.7-11-43.9s28.7-20.1 43.9-11L160 199.5V64c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E\") no-repeat center;background-size:15px}\n");class u extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.adoptedStyleSheets=[h]}get language(){return this.getAttribute("language")}get hasShow(){return this.hasAttribute("show")}get modal(){return this.shadowRoot.querySelector("ldod-bs-modal")}static get observedAttributes(){return["data","show"]}getConstants(e){return l[this.language][e]}updateData=({games:e,inters:t,publicAnnotation:a})=>{this.games=e,this.inters=t,this.publicAnnotation=a};connectedCallback(){this.addEventListener("ldod-modal-close",this.onCloseModal)}attributeChangedCallback(e,t,a){this.onChangedAttribute[e](t,a)}onCloseModal=e=>{this.toggleAttribute("show",!1)};render(){this.shadowRoot.innerHTML="",this.shadowRoot.appendChild(e("ldod-bs-modal",{id:"virtual-games-modal","dialog-class":"modal-xl modal-fullscreen-lg-down modal-dialog-scrollable",static:!0},e("h5",{slot:"header-slot"},e("span",null,this.edition?.title," - "),e("span",null,this.getConstants("game"))),e("div",{slot:"body-slot"},e("div",{id:"virtual-createCGContainer",class:"mb-5"},e(g,{node:this})),e("div",{id:"games-table",class:"mb-5"},e(c,{node:this})))))}updateTable(t){t&&this.updateData(t);const a=this.shadowRoot.querySelector("#games-table");a.innerHTML="",a.appendChild(e(c,{node:this}))}onChangedAttribute={show:()=>{this.hasShow&&this.render(),this.modal.toggleAttribute("show",this.hasShow)}};show(){this.hasShow?this.updateTable():this.toggleAttribute("show",!0)}}!customElements.get("ldod-ve-games")&&customElements.define("ldod-ve-games",u);export{u as LdodVeGames};
//# sourceMappingURL=ldod-ve-games-bc4344b0.js.map