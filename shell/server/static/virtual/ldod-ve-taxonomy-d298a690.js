import{createElement as e,createFragment as t,fetcher as o}from"@core";import{c as a}from"./constants-833df29c.js";import{references as r}from"./virtual.js";import{t as n}from"./external-deps-beceb3c1.js";import{s as i}from"./style-a25cc231.js";import s from"@ui/bootstrap/forms-css.js";import d from"@ui/bootstrap/buttons-css.js";import{c as l}from"./utils-a4875c44.js";import{errorPublisher as c,loadingPublisher as g}from"./event-module-0f223477.js";const m={taxonomyHeaders:["category","fragments","actions"],topicsHeaders:["topics","fragments"],pt:{addCategory:"Adicionar Categoria",categoryName:"Nome da categoria",generateTopics:"Gerar Tópicos",fragments:"Fragmentos",merge:"Juntar Categorias",delete:"Apagar Categorias",addCategoryInfo:"Adicionar categoria à Taxonomia",mergeCategoryInfo:"Juntar duas ou mais categorias da Taxonomia (selecionadas na tabela em baixo)",deleteCategoryInfo:"Remover uma ou mais categoria da Taxonomia (selecionadas na tabela em baixo)",generateTopicsInfo:"A Taxonomia gerada agrupa os fragmentos de acordo com os parâmetros",edition:"Edição",topics:"Tópicos",words:"Palavras",cut:"Corte",iterations:"Iterações",generate:"Gerar",extract:"Extrair",addCats:"Adicionar Categorias",topicsInfo:"Número de grupos de fragmentos a gerar (tem impacto no algoritmo de geração e deve ser inferior ao número total de fragmentos na edição virtual)",wordsInfo:"Número de palavras a usar no nome da categoria (não tem impacto no algoritmo de geração, serve apenas para definir o número de palavras a usar)",cutInfo:"Percentagem mínima necessária para um fragmento ser incluído num agrupamento (tem impacto no algoritmo de geração)",iterationsInfo:"Número de vezes que o algoritmo de geração executa para produzir resultados (tem impacto no algoritmo de geração, devendo ser superior a 1500)",extractInfo:"Nova categoria resultante da seleção de um subconjunto fragmentos da categoria atual",generateTopicsTitle:"Adição de categorias aplicando um algoritmo de geração de tópicos",actions:"Acções",submit:"Actualizar",name:"Nome",updateCategoryName:"Actualizar nome da categoria",extractFrags:"Criar nova Categoria a partir de um conjunto de Fragmentos",multipleFrags:"Fragmentos (seleção múltipla)",usedIn:"Usado em",publicContent:"Conteúdo Público"},en:{addCategory:"Add Category",categoryName:"Category name",generateTopics:"Generate Topics",fragments:"Fragments",merge:"Merge selected",delete:"Delete selected",addCategoryInfo:"Add category to the Taxonomy",mergeCategoryInfo:"Merge two or more selected categories from the Taxonomy (selected from the table below)",deleteCategoryInfo:"Delete one or more selected categories from the Taxonomy (selected from the table below)",generateTopicsInfo:"The generated Taxonomy aggregates fragments according the parameters",edition:"Edition",topics:"Topics",words:"Words",cut:"Threshold",iterations:"Iterations",generate:"Generate",addCats:"Add Categories",extract:"Extract",topicsInfo:"Number of fragment groups to be generated (relevant for the generation algorithm; it must be lower than total number of fragments in the virtual edition)",wordsInfo:"Number of words to be used in the category name (does not have impact on the generation algorithm and it only defines the number of words that will be used)",cutInfo:"Minimum required percentage for a fragment to be included in a group (relevant for the generation algorithm)",iterationsInfo:"Number of times that the generation algorithm has to execute in order to produce results (relevant for the generation algorithm; it must be above 1500)",extractInfo:"New category resulting from the selection of a subset of fragments belonging to the current category",generateTopicsTitle:"Add categories using a topic modeling algorithm",actions:"Actions",submit:"Update",name:"Name",updateCategoryName:"Update category name",extractFrags:"Create new Category by extracting a set of Fragments",multipleFrags:"Fragments (multiple selection)",usedIn:"Used in",publicContent:"Public Content"},es:{addCategory:"Añadir Categoría",categoryName:"Nombre de la categoría",generateTopics:"Generar Tópicos",fragments:"Fragmentos",merge:"Fundir selecionadas",delete:"Eliminar selecionadas",addCategoryInfo:"Añadir categoría a la Taxonomía",mergeCategoryInfo:"Fundir dos o más categorías seleccionadas de la Taxonomía (seleccionadas en la tabla siguiente)",deleteCategoryInfo:"Eliminar una o más categorías seleccionadas de la Taxonomía (seleccionadas en la tabla siguiente)",generateTopicsInfo:"La Taxonomia generada agrupa los fragmentos de acuerdo con los parámetros",edition:"Edición",topics:"Temas",words:"Palabras",cut:"Limite",iterations:"Iteraciones",generate:"Generar",addCats:"Añadir Categorías",extract:"Extraer",topicsInfo:"Número de grupos de fragmentos a generar (tiene impacto en el algoritmo de generacíon e debe ser menor que el número total de fragmentos en la edición virtual)",wordsInfo:"Número de palabras utilizadas en el nombre de la categoría (no tiene impacto en el algoritmo de generacíon, sólo sirve para definir el número de palabras a utilizar)",cutInfo:"Porcentaje mínimo necesario para que un fragmento sea incluido en un grupo (tiene impacto en el algoritmo de generacíon)",iterationsInfo:"Número de veces que el algoritmo de generación ejecuta para producir resultados (tiene impacto en el algoritmo de generacíon, debe ser superior a 1500)",generateTopicsTitle:"Añadir categorías aplicando un algoritmo de generación de tópicos",extractInfo:"Nueva categoría resultante de la selección de un subconjunto de fragmentos de la categoría actual",actions:"Acciónes",submit:"Actualizar",name:"Nombre",updateCategoryName:"Actualizar el nombre de la categoría",extractFrags:"Crear una nueva Categoría extrayendo un conjunto de Fragmentos",multipleFrags:"Fragmentos (selección múltiple)",usedIn:"Utilizado en",publicContent:"Contenido público"}},p=({node:t})=>e("div",{id:"mergeCategory"},e("button",{style:{height:"100%",width:"200px"},onClick:t.onMergeCategories,type:"button",inactive:t.selectedRows<2,class:"btn btn-sm btn-primary"},e("span",{is:"ldod-span-icon",icon:"object-group",size:"16px",fill:"#fff"}),e("span",{"data-virtual-key":"mergeCategory"},t.getConstants("merge"))),e("ldod-tooltip",{"data-ref":"div#mergeCategory>button","data-virtual-tooltip-key":"mergeCategoryInfo",placement:"top",width:"300px",content:t.getConstants("mergeCategoryInfo")})),u=({node:t})=>e("div",{id:"deleteCategory"},e("button",{style:{height:"100%",width:"200px"},onClick:()=>t.onDeleteCategories(),type:"button",class:"btn btn-sm btn-danger",inactive:!t.selectedRows},e("span",{is:"ldod-span-icon",icon:"trash",size:"16px",fill:"#fff"}),e("span",{"data-virtual-key":"deleteCategory"},t.getConstants("delete"))),e("ldod-tooltip",{"data-ref":"div#deleteCategory>button","data-virtual-tooltip-key":"deleteCategoryInfo",placement:"top",width:"300px",content:t.getConstants("deleteCategoryInfo")})),h=({node:o})=>e("ldod-table",{id:"virtual-taxonomyTable",classes:"table  table-hover",headers:o.constants.taxonomyHeaders,"data-rows":o.taxonomy.categories.length,data:o.taxonomy.categories.sort(((e,t)=>e.name.localeCompare(t.name))).map((a=>({externalId:a.externalId,data:()=>({category:e("a",{is:"nav-to",target:"_blank",to:r.category(a.veAcronym,a.name)},a.name),fragments:a.veInters.map((t=>e("div",{key:crypto.randomUUID()},e("a",{is:"nav-to",target:"_blank",to:n(t.xmlId,t.urlId)},t.title)))),actions:e("div",{class:"flex-center"},a.veInters.length>1&&e(t,null,e("span",{is:"ldod-span-icon",id:"extract-icon",icon:"object-ungroup",fill:"#0c4ef6",size:"15px",onClick:()=>o.onExtractFrags(a)}),e("ldod-tooltip",{"data-ref":`tr[id='${a.externalId}'] span#extract-icon`,"data-virtual-tooltip-key":"extractIcon",width:"300px",placement:"left",content:o.getConstants("extractInfo")})),e("span",{title:"Edit category name",is:"ldod-span-icon",id:"edit-icon",icon:"pen-to-square",fill:"#0c4ef6",size:"15px",onClick:()=>o.onOpenEditModal(a)}),e("span",{title:"Delete category from the Taxonomy",is:"ldod-span-icon",id:"trash-icon",icon:"trash-can",fill:"#dc3545",size:"15px",onClick:()=>o.onDeleteCategories(a.externalId)}))}),search:JSON.stringify(a)}))),constants:o.constants[o.language],"data-searchkey":"externalId"}),y=({node:o})=>e("div",{style:{padding:"20px"},id:"taxonomyComponent"},e("div",null,e("div",{class:"flex-center",style:{marginBottom:"10px"}},e("button",{style:{width:"200px"},id:"publicContent",class:"btn btn-sm btn-secondary",type:"button","open-popover":!0,onClick:({target:a})=>((o,a)=>{const n=a.shadowRoot.querySelector("ldod-popover");n.element=()=>e(t,null,e("ul",{class:"drop-menu",style:{minWidth:`${o.clientWidth}px`}},e("li",null,e("a",{target:"_blank",class:"drop-item",is:"nav-to",to:`/ldod-mfes${r.virtualEdition(a.taxonomy.veAcronym)}`},a.taxonomy.veAcronym)))),n.target=o,n.toggleAttribute("show")})(a,o)},o.getConstants("publicContent"),e("ldod-popover",{"data-distance":"0"})),o.taxonomy.usedIn.length&&e("button",{style:{width:"200px"},id:"usedIn",class:"btn btn-sm btn-secondary",type:"button","open-popover":!0,onClick:({target:a})=>((o,a)=>{const n=a.shadowRoot.querySelector("ldod-popover");n.element=()=>e(t,null,e("ul",{class:"drop-menu",style:{minWidth:`${o.clientWidth}px`}},a.taxonomy.usedIn.map((t=>e("li",{key:crypto.randomUUID()},e("a",{target:"_blank",class:"drop-item",is:"nav-to",to:`/ldod-mfes${r.virtualEdition(t)}`},t)))))),n.target=o,n.toggleAttribute("show")})(a,o)},o.getConstants("usedIn"))),e("div",{id:"virtual-categoryActionsContainer",class:"flex-center"},e("form",{onSubmit:o.onAddCategory},e("div",{id:"catInputName",class:"input-group"},e("input",{style:{width:"200px"},required:!0,id:"addCategoryInput",name:"name",type:"text",class:"form-control",placeholder:o.getConstants("categoryName"),"aria-label":"New category's name","aria-describedby":"category-add-button"}),e("button",{style:{width:"200px"},id:"addCategory",type:"submit",class:"btn btn-sm btn-primary"},e("span",{is:"ldod-span-icon",icon:"plus",fill:"#fff",size:"16px"}),e("span",{"data-virtual-key":"addCategory"},o.getConstants("addCategory"))))),e(p,{node:o}),e("button",{style:{width:"200px"},id:"generateTopics",type:"button",class:"btn btn-sm btn-primary",onClick:o.onGenerateTopics},e("span",{is:"ldod-span-icon",icon:"gear",size:"16px",fill:"#fff"}),e("span",{"data-virtual-key":"generateTopics"},o.getConstants("generateTopics"))),e(u,{node:o})),["addCategory","generateTopics"].map((t=>e("ldod-tooltip",{key:crypto.randomUUID(),"data-ref":`button#${t}`,"data-virtual-tooltip-key":`${t}Info`,placement:"top",width:"300px",content:o.getConstants(`${t}Info`)})))),e(h,{node:o})),b="/virtual/taxonomy",f=async(e,t)=>await o.post(`${b}/restricted/${e}/generate`,t,window.token),x=async(e,t)=>await o.post(`${b}/restricted/category/${e}/update/`,t,window.token),C=async(e,t)=>await o.post(`${b}/restricted/category/${e}/extract`,t,window.token),w=new CSSStyleSheet;w.replaceSync(i+"#virtual-categoryActionsContainer{margin-bottom:20px}.flex-center{display:flex;flex-wrap:wrap;gap:10px;justify-content:center}.virtual-categoryActionsContainer button{width:175px}table#virtual-topicsTable,table#virtual-taxonomyTable{border-collapse:collapse!important}table#virtual-topicsTable th,table#virtual-taxonomyTable th{border-top:none!important}ldod-table#virtual-topicsTable .table-container,ldod-table#virtual-taxonomyTable .table-container{border:none!important}table#virtual-topicsTable th:nth-child(1),table#virtual-topicsTable th:nth-child(2){text-align:start}table#virtual-taxonomyTable th:nth-child(3){text-align:center}table#virtual-taxonomyTable tbody>tr[selected]{background-color:#b4dcf0}table#virtual-taxonomyTable>tbody>tr{cursor:cell}table#virtual-topicsTable>tbody>tr>td:nth-child(2){text-align:justify}button[inactive]{opacity:.65;cursor:not-allowed}.icon-merge{background:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3Cpath fill='%23fff' d='M128 160C128 142.3 142.3 128 160 128H288C305.7 128 320 142.3 320 160V256C320 273.7 305.7 288 288 288H160C142.3 288 128 273.7 128 256V160zM288 320C323.3 320 352 291.3 352 256V224H416C433.7 224 448 238.3 448 256V352C448 369.7 433.7 384 416 384H288C270.3 384 256 369.7 256 352V320H288zM48 115.8C38.18 106.1 32 94.22 32 80C32 53.49 53.49 32 80 32C94.22 32 106.1 38.18 115.8 48H460.2C469 38.18 481.8 32 496 32C522.5 32 544 53.49 544 80C544 94.22 537.8 106.1 528 115.8V396.2C537.8 405 544 417.8 544 432C544 458.5 522.5 480 496 480C481.8 480 469 473.8 460.2 464H115.8C106.1 473.8 94.22 480 80 480C53.49 480 32 458.5 32 432C32 417.8 38.18 405 48 396.2V115.8zM96 125.3V386.7C109.6 391.6 120.4 402.4 125.3 416H450.7C455.6 402.4 466.4 391.6 480 386.7V125.3C466.4 120.4 455.6 109.6 450.7 96H125.3C120.4 109.6 109.6 120.4 96 125.3z'/%3E%3C/svg%3E\") no-repeat center;background-size:15px}.icon-unmerge{background:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 512'%3E%3Cpath fill='%230b5ed7' d='M32 119.4C12.9 108.4 0 87.7 0 64C0 28.7 28.7 0 64 0c23.7 0 44.4 12.9 55.4 32H328.6C339.6 12.9 360.3 0 384 0c35.3 0 64 28.7 64 64c0 23.7-12.9 44.4-32 55.4V232.6c19.1 11.1 32 31.7 32 55.4c0 35.3-28.7 64-64 64c-23.7 0-44.4-12.9-55.4-32H119.4c-11.1 19.1-31.7 32-55.4 32c-35.3 0-64-28.7-64-64c0-23.7 12.9-44.4 32-55.4V119.4zM119.4 96c-5.6 9.7-13.7 17.8-23.4 23.4V232.6c9.7 5.6 17.8 13.7 23.4 23.4H328.6c5.6-9.7 13.7-17.8 23.4-23.4V119.4c-9.7-5.6-17.8-13.7-23.4-23.4H119.4zm192 384c-11.1 19.1-31.7 32-55.4 32c-35.3 0-64-28.7-64-64c0-23.7 12.9-44.4 32-55.4V352h64v40.6c9.7 5.6 17.8 13.7 23.4 23.4H520.6c5.6-9.7 13.7-17.8 23.4-23.4V279.4c-9.7-5.6-17.8-13.7-23.4-23.4h-46c-5.4-15.4-14.6-28.9-26.5-39.6V192h72.6c11.1-19.1 31.7-32 55.4-32c35.3 0 64 28.7 64 64c0 23.7-12.9 44.4-32 55.4V392.6c19.1 11.1 32 31.7 32 55.4c0 35.3-28.7 64-64 64c-23.7 0-44.4-12.9-55.4-32H311.4z'/%3E%3C/svg%3E\");background-size:15px}.icon-trash-light{background:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3Cpath fill='%23fff' d='M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z'/%3E%3C/svg%3E\") no-repeat center;background-size:15px}.icon-gear-light{background:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23fff' d='M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336c44.2 0 80-35.8 80-80s-35.8-80-80-80s-80 35.8-80 80s35.8 80 80 80z'/%3E%3C/svg%3E\") no-repeat center;background-size:15px}span[data-virtual-key]{margin-left:10px}#addCategoryInput{max-width:200px}.drop-menu{position:absolute;z-index:1000;padding:.5rem 0;margin:0;font-size:1rem;color:#212529;text-align:left;list-style:none;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.15);border-radius:.25rem}.drop-item{cursor:pointer;display:block;padding:.25rem 1rem;clear:both;font-weight:400;color:#212529;text-align:start;text-decoration:none;white-space:nowrap;background-color:transparent;border:0}.drop-item:focus,.drop-item:hover{color:#1e2125;background-color:#e9ecef}#generateTopicsInputs input{width:150px}#generatedTopicsContainer{margin-top:20px}select-pure{--border-color: #ced4da;--dropdown-gap: 5px;--dropdown-items: 5}\n"+d+s);class v extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.adoptedStyleSheets=[w],this.constants=Object.entries(m).reduce(((e,[t,o])=>(e[t]=o instanceof Array?o:{...a[t],...o},e)),{})}get language(){return this.getAttribute("language")}get selectedCategories(){const e=Array.from(this.shadowRoot.querySelectorAll("table#virtual-taxonomyTable>tbody>tr[selected]")).map((e=>e.id));return this.taxonomy.categories.map((e=>e.externalId)).filter((t=>-1!==e.indexOf(t)))}get show(){return this.hasAttribute("show")}get taxonomyModal(){return this.shadowRoot.querySelector("ldod-bs-modal#virtual-taxonomy-modal")}get generateTopicsModal(){return this.shadowRoot.querySelector("ldod-bs-modal#virtual-generate-topics-modal")}get editCategoryModal(){return this.shadowRoot.querySelector("ldod-bs-modal#virtual-edit-category-modal")}get extractCategoryFragsModal(){return this.shadowRoot.querySelector("ldod-bs-modal#virtual-extract-category-frags-modal")}static get observedAttributes(){return["data","show"]}getConstants(e){return this.constants[this.language][e]}connectedCallback(){this.addEventListener("ldod-modal-close",this.handleCloseModal)}attributeChangedCallback(e,t,o){this.onChangedAttribute[e](t,o)}render(){this.shadowRoot.innerHTML="",this.shadowRoot.appendChild(e("ldod-bs-modal",{id:"virtual-taxonomy-modal","dialog-class":"modal-xl modal-dialog-scrollable"},e("h5",{slot:"header-slot"},e("span",null,this.taxonomy.veTitle," - "),e("span",null,this.getConstants("taxonomy"))),e("div",{slot:"body-slot"},e(y,{node:this})))),this.renderMergeAndDeleteButtons(),this.addEventListeners()}onChangedAttribute={show:()=>{this.show&&(async e=>await o.get(`${b}/restricted/${e}`,null,window.token))(this.parent.edition.externalId).then((async e=>{this.emitLoading(!0),this.taxonomy=e,this.render(),this.taxonomyModal?.toggleAttribute("show",this.show),this.emitLoading(!1)})).catch((e=>{console.error(e),c(e.msg)}))}};addEventListeners=()=>{this.handleRowsSelection(),this.addEventListener("pointerenter",this.generateTopicsModalLazyLoad,{once:!0})};generateTopicsModalLazyLoad=async()=>{this.shadowRoot.appendChild(await async function(e,t){return(await import("./generate-topics-modal-d6a1ef5e.js")).default({node:e,veId:t})}(this,this.taxonomy.veExternalId))};handleRowsSelection=()=>{this.shadowRoot.querySelectorAll("table>tbody>tr").forEach((e=>{e.addEventListener("click",this.onRowSelection)}))};onRowSelection=({target:e})=>{if(!["A","SPAN"].some((t=>t===e.nodeName))){for(;"TR"!==e.nodeName;)e=e.parentElement;e.toggleAttribute("selected")}};renderMergeAndDeleteButtons=()=>{this.shadowRoot.querySelector("div#mergeCategory").replaceWith(e(p,{node:this})),this.shadowRoot.querySelector("div#deleteCategory").replaceWith(e(u,{node:this}))};updateData=(t=this.taxonomy)=>{this.taxonomy=t;const o=this.shadowRoot.querySelector("#taxonomyComponent");o&&(o.replaceWith(e(y,{node:this})),this.addEventListeners())};handleCloseModal=({detail:{id:e}})=>{this.onCloseModal[e.replace("virtual-","")]()};onCloseModal={"taxonomy-modal":async()=>{this.emitLoading(!0),this.toggleAttribute("show",!1),this.resetState(),this.emitLoading(!1)},"generate-topics-modal":()=>{this.toggleAttribute("show",!0)},"edit-category-modal":()=>{this.editCategoryModal.remove(),this.toggleAttribute("show",!0)},"extract-category-frags-modal":()=>{document.body.removeEventListener("click",this.computeSelectHeight),this.extractCategoryFragsModal.remove(),this.toggleAttribute("show",!0)}};resetState=()=>{this.taxonomy=null,this.shadowRoot.removeChild(this.taxonomyModal)};onAddCategory=e=>{e.preventDefault();const t=Object.fromEntries(new FormData(e.target));(async(e,t)=>await o.post(`${b}/restricted/${e}/category/create`,t,window.token))(this.taxonomy.veExternalId,t).then((e=>this.updateData(e))).catch((e=>console.error(e)))};onDeleteCategories=e=>{!e&&this.selectedCategories<1||!confirm("Proceed with deletion ?")||(async(e,t)=>await o.post(`${b}/restricted/${e}/categories/delete`,t,window.token))(this.taxonomy.externalId,e?[e]:this.selectedCategories).then((e=>this.updateData(e))).catch((e=>console.error(e)))};onMergeCategories=()=>{this.selectedCategories<2||(async(e,t)=>await o.post(`${b}/restricted/${e}/categories/merge`,t,window.token))(this.taxonomy.externalId,this.selectedCategories).then((e=>this.updateData(e))).catch((e=>console.error(e)))};onGenerateTopics=()=>{this.taxonomyModal.toggleAttribute("show",!1),this.generateTopicsModal.toggleAttribute("show",!0)};onAddTopics=e=>{this.topics?.topics?.length&&(async(e,t)=>await o.post(`${b}/restricted/${e}/createTopics`,t,window.token))(e,this.topics.topics).then((()=>this.generateTopicsModal.toggleAttribute("show",!1))).catch((e=>console.error(e)))};onOpenEditModal=async e=>{this.taxonomyModal.toggleAttribute("show",!1),this.shadowRoot.appendChild(await async function(e,t){return(await import("./edit-category-modal-8756b2bf.js")).default({node:e,category:t})}(this,e)),this.editCategoryModal.toggleAttribute("show")};onExtractFrags=async e=>{this.taxonomyModal.toggleAttribute("show",!1),this.shadowRoot.appendChild(await async function(e,t){return(await import("./extract-category-frags-modal-7364fe56.js")).default({node:e,category:t})}(this,e)),document.body.addEventListener("click",this.computeSelectHeight),this.extractCategoryFragsModal.toggleAttribute("show")};computeSelectHeight=()=>{l(this.querySelector("select-pure#virtual-extractCatModal"))};emitLoading=e=>g(e)}!customElements.get("ldod-ve-taxonomy")&&customElements.define("ldod-ve-taxonomy",v);const I=Object.freeze(Object.defineProperty({__proto__:null,LdodVeTaxonomy:v},Symbol.toStringTag,{value:"Module"}));export{C as a,x as e,f as g,I as l};
//# sourceMappingURL=ldod-ve-taxonomy-d298a690.js.map