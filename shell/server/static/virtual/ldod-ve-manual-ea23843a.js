import{createElement as t,createFragment as e}from"@core";import{c as a}from"./constants-833df29c.js";import{s as n}from"./virtual-editions-router-09df2ce5.js";import{errorPublisher as s}from"./event-module-0f223477.js";import{t as r}from"./constants-3a8e8d70.js";import{t as i}from"./external-deps-beceb3c1.js";import{s as o}from"./style-a25cc231.js";import l from"@ui/bootstrap/forms-css.js";import d from"@ui/bootstrap/buttons-css.js";import"./virtual.js";const h=t=>t.shadowRoot.querySelector("ldod-bs-modal#virtual-add-fragments-modal"),u=t=>h(t)?.querySelector("ldod-search-simple"),g=t=>{const e=(t=>u(t)?.getSelectedInters?.())(t);e?.length&&(t.onAddFragments(e),h(t).toggleAttribute("show"),u(t).replaceWith(b(t)))},b=e=>t("ldod-search-simple",{language:e.language,fragment:!0}),c=({node:e})=>t("ldod-bs-modal",{id:"virtual-add-fragments-modal","dialog-class":"modal-xl"},t("h5",{slot:"header-slot",style:{margin:"0"}},e.getConstants("addFrags")),t("div",{slot:"body-slot",style:{margin:"auto 30px"}},b(e)),t("div",{slot:"footer-slot"},t("button",{type:"button",class:"btn btn-primary",onClick:()=>g(e)},e.getConstants("add")))),m={manualHeaders:["newNumber","number","title","actions","useEdition"],pt:{addFrags:"Adicionar Fragmentos",add:"Adicionar",undo:"Anular",manualSort:"Ordenação Manual",newNumber:t("span",null,"Novo #",t("br",null),t("small",null,"(editável)"))},en:{add:"Add",addFrags:"Add Fragments",undo:"Undo",manualSort:"Manual Sort",newNumber:t("span",null,"New #",t("br",null),t("small",null,"(editable)"))},es:{add:"Añadir",addFrags:"Añadir Fragmentos",undo:"Anular",manualSort:"Ordenación Manual",newNumber:t("span",null,"Nuevo #",t("br",null),t("small",null,"(editável)"))}},p=(t,e)=>t.inters.map((({externalId:t})=>t)).indexOf(e),v=(t,e,a)=>{const n=p(t,e);return a?n>t.getFirstVisibleRowIndex()?t.getPrevVisibleRowIndex(e):n:n<t.getLastVisibleRowIndex()?t.getNextVisibleRowIndex(e):n},w=(t,e,a=!1)=>{const n=p(t,e),s=a?t.getLastVisibleRowIndex():t.getFirstVisibleRowIndex();n!==s&&t.rowUpdate({externalId:e,newIndex:s,oldIndex:n,changed:!0})},x=(e,a,n)=>{const s=a.usedList[0],r=a.externalId;return{externalId:r,newNumber:++n,number:a.number,title:a.title,actions:t("div",{style:{display:"flex",justifyContent:"center",gap:"8px"}},t("span",{is:"ldod-span-icon",icon:"angles-up",size:"14px",fill:"#333",title:"Move to top",onClick:()=>w(e,r)}),t("span",{is:"ldod-span-icon",icon:"angles-down",size:"14px",fill:"#333",title:"Move to bottom",onClick:()=>w(e,r,!0)}),t("span",{is:"ldod-span-icon",icon:"arrow-up",size:"14px",fill:"#333",title:"Move up",onClick:()=>e.changePosition(r,p(e,r),v(e,r,!0))}),t("span",{is:"ldod-span-icon",icon:"arrow-down",size:"14px",fill:"#333",title:"Move down",onClick:()=>e.changePosition(r,p(e,r),v(e,r,!1))}),t("span",{is:"ldod-span-icon",icon:"trash",size:"14px",fill:"#dc3545",title:"Remove fragment",onClick:()=>((t,e)=>{t.rowHide({externalId:e,hidden:!0})})(e,r)})),useEdition:t("a",{is:"nav-to",content:!0,target:"_blank",to:`${i(s.xmlId,s.urlId)}`},`-> ${s.shortName}`),search:JSON.stringify(a)}},I=t=>t.inters.map(((e,a)=>x(t,e,a))),y=({node:e})=>t("div",{id:"virtual-manual-table-wrapper"},t("div",{class:"button-container"},t("button",{class:"btn btn-primary",onClick:e.onOpenAddFragsModal},e.getConstants("addFrags"))),t("ldod-table",{id:"virtual-manualTable",classes:"table  table-hover",headers:e.constants.manualHeaders,data:I(e),"data-rows":e.inters.length,constants:e.constants[e.language],"data-searchkey":"externalId"}));typeof window<"u"&&import("http://localhost:9000/ldod-mfes/search/search.js").then((({loadSearchSimple:t})=>t())).catch(console.error);const f=new CSSStyleSheet;f.replaceSync(o+"ldod-table#virtual-manualTable .table-container{border:none!important}table#virtual-manualTable{border-collapse:collapse!important}table#virtual-manualTable th{border-top:none!important}table#virtual-manualTable>tbody>tr{cursor:grab}table#virtual-manualTable th:nth-child(1),table#virtual-manualTable th:nth-child(2),table#virtual-manualTable th:nth-child(4),table#virtual-manualTable th:nth-child(5),table#virtual-manualTable td:nth-child(1),table#virtual-manualTable td:nth-child(2),table#virtual-manualTable td:nth-child(4),table#virtual-manualTable td:nth-child(5){text-align:center}table#virtual-manualTable tbody>tr[changed]{background-color:#b4dcf0}table#virtual-manualTable tbody>tr[dragging]{background-color:#faebd7}table#virtual-manualTable tbody>tr[hidden]{display:none}span[is=ldod-span-icon]{height:18px}button[disabled],button:disabled{cursor:not-allowed;pointer-events:none;opacity:.65}.button-container{display:flex;justify-content:center;margin-bottom:20px}\n"+l+d);class R extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.adoptedStyleSheets=[f],this.history=[],this.constants=Object.entries(m).reduce(((t,[e,n])=>(t[e]=n instanceof Array?n:{...a[e],...r[e],...n},t)),{})}get language(){return this.getAttribute("language")}get show(){return this.hasAttribute("show")}get modal(){return this.shadowRoot.querySelector("#virtual-ve-manual")}get addFragsModal(){return this.shadowRoot.querySelector("#virtual-add-fragments-modal")}get table(){return this.shadowRoot.querySelector("ldod-table#virtual-manualTable")}get intersId(){return this.inters.map((({externalId:t})=>t))}get tableBody(){return this.shadowRoot.querySelector("tbody")}get rows(){return Array.from(this.tableBody.querySelectorAll("tr"))}get visibleRows(){return this.tableBody.querySelectorAll("tr:not([hidden])")}get visibleFragments(){return Array.from(this.visibleRows).map((t=>this.inters.find((e=>e.externalId===t.id))?.xmlId||[]))}getRowById=t=>this.tableBody.querySelector(`tr[id="${t}"]`);getVisibleRowIndex=t=>Array.from(this.visibleRows).map((t=>t.id)).indexOf(t);getFirstVisibleRowIndex=()=>this.intersId.indexOf(this.visibleRows.item(0).id);getLastVisibleRowIndex=()=>this.intersId.indexOf(Array.from(this.visibleRows).at(-1).id);getNextVisibleRowIndex=t=>this.intersId.indexOf(this.visibleRows.item(this.getVisibleRowIndex(t)+1).id);getPrevVisibleRowIndex=t=>this.getVisibleRowIndex(t)?this.intersId.indexOf(this.visibleRows.item(this.getVisibleRowIndex(t)-1).id):0;getConstants(t){return this.constants[this.language][t]}addModalCloseEventListener(){this.addEventListener("ldod-modal-close",this.onCloseModal)}removeModalCloseEventListener(){this.removeEventListener("ldod-modal-close",this.onCloseModal)}connectedCallback(){this.wrapper=this.shadowRoot.appendChild(t("div",{id:"'virtual-manual-ve-wrapper"})),this.addModalCloseEventListener()}onCloseModal=({detail:t})=>{this.closeModal[t.id.replace("virtual-","")]()};closeModal={"ve-manual":()=>{this.toggleAttribute("show",!1)},"add-fragments-modal":()=>{this.addFragsModal.toggleAttribute("show",!1),this.modal.toggleAttribute("show",!0)}};static get observedAttributes(){return["show"]}attributeChangedCallback(t,e,a){this.onChangedAttribute[t](e,a)}onChangedAttribute={show:()=>{this.hasAttribute("show")?(this.render(),this.modal.toggleAttribute("show",!0)):this.resetComponentState()}};resetComponentState=()=>{this.history=[],this.inters=null};render(){this.wrapper.innerHTML="",this.wrapper.appendChild(t(e,null,t("ldod-bs-modal",{id:"virtual-ve-manual","dialog-class":"modal-xl modal-dialog-scrollable"},t("h5",{slot:"header-slot"},t("span",null,this.edition?.title," - "),t("span",null,this.getConstants("manualSort"))),t("div",{slot:"body-slot"},t("div",{id:"virtual-manual-table-wrapper"})),t("div",{slot:"footer-slot"},t("div",{style:{display:"flex",gap:"10px"}},t("div",{id:"virtual-undoManualSort"}),t("button",{type:"button",class:"btn btn-primary",onClick:this.onSave},this.getConstants("save"),t("span",{class:"icon save-icon"}))))),t(c,{node:this}))),this.renderParcial()}renderParcial=()=>{this.renderTable(),this.renderUndoButton()};renderTable=()=>{this.shadowRoot.querySelector("#virtual-manual-table-wrapper").replaceWith(t(y,{node:this})),this.hydrateRows()};hydrateRows(){const t=this.table.allRows;t.forEach((t=>this.setFirstCellEditable(t))),t.forEach((t=>this.setTableRowsDraggable(t)))}renderUndoButton(){this.shadowRoot.querySelector("#virtual-undoManualSort").replaceWith(this.undoButton())}undoButton=()=>t("button",{id:"virtual-undoManualSort",type:"button",class:"btn btn-primary",onClick:this.onUndo,disabled:!this.history.length},this.getConstants("undo"),t("span",{class:"icon undo-icon"}));onUndo=()=>{this.stepBack(this.history.pop())};onSave=async()=>{const t=await n(this.edition.externalId,Array.from(this.visibleRows).map((({id:t})=>t)));this.resetComponentState(),this.inters=t,this.renderParcial()};rowHide=({externalId:t})=>{let e=this.getRowById(t);e.toggleAttribute("hidden",!0),this.updateHistory(t,null,null,e.hasAttribute("changed"),!0),this.updateInters(),this.updateIndexCell(),this.renderUndoButton()};rowAdd=t=>{const e=E(t);this.inters=[e,...this.inters];const a=x(this,e,0),n=this.table.getRow(a,this.table),s=this.tableBody.insertRow(0);n.toggleAttribute("changed"),n.id=t.externalId,s.replaceWith(n),this.updateHistory(t.externalId,0,null,n.hasAttribute("changed"),!1,!0),this.setFirstCellEditable(n),this.setTableRowsDraggable(n),this.addRowDragEventListeners(n),this.updateInters(),this.updateIndexCell(),this.renderUndoButton()};rowUpdate=({externalId:t,newIndex:e,oldIndex:a,changed:n})=>{let s=this.getRowById(t);this.updateHistory(t,a,e,s.hasAttribute("changed")),s.toggleAttribute("changed",n),this.tableBody.insertBefore(this.tableBody.removeChild(s),this.tableBody.querySelectorAll("tr")[e]),this.removeRowDragEventListeners(s),this.addRowDragEventListeners(s),this.updateInters(),this.updateIndexCell(),this.renderUndoButton()};rollbackNewRow=t=>{this.inters=this.inters.filter((e=>e.externalId!==t.id)),t.remove(),this.updateInters(),this.updateIndexCell(),this.renderUndoButton()};stepBack=t=>{if(!t)return;const{externalId:e,oldIndex:a,changed:n,hidden:s,newRow:r}=t;let i=this.getRowById(e);if(r)return this.rollbackNewRow(i);i.toggleAttribute("changed",n),i.hasAttribute("hidden")||(this.tableBody.insertBefore(this.tableBody.removeChild(i),this.tableBody.querySelectorAll("tr")[a]),this.removeRowDragEventListeners(i),this.addRowDragEventListeners(i)),s&&i.toggleAttribute("hidden"),this.updateInters(),this.updateIndexCell(),this.renderUndoButton()};updateHistory=(t,e,a,n,s,r)=>{this.history.push({externalId:t,oldIndex:e,newIndex:a,changed:n,hidden:s,newRow:r})};updateIndexCell=()=>{this.visibleRows.forEach(((t,e)=>t.querySelectorAll("td")[0].textContent=e+1))};updateInters=()=>this.inters=this.rows.map((t=>this.inters.find((({externalId:e})=>e===t.id))));handleNewIndex=({target:t})=>{let e=Array.from(this.visibleRows).indexOf(t.parentNode);const a=t.textContent;if(this.isInvalidInput(a))return t.textContent=e+1;this.changePosition(t.parentNode.id,e,+a-1)};isInvalidInput=t=>isNaN(+t)||+t<1||+t>this.inters.length;changePosition=(t,e,a)=>{e!==a&&this.rowUpdate({externalId:t,newIndex:a,oldIndex:e,changed:!0})};setFirstCellEditable=t=>{const e=t.querySelector("td:nth-child(1)");e.setAttribute("contenteditable","true"),e.onblur=this.handleNewIndex};setTableRowsDraggable=t=>{t.setAttribute("draggable","true"),this.addRowDragEventListeners(t)};onDragOver=t=>{t.preventDefault(),t.target.parentNode.toggleAttribute("dragging",!0)};onDragLeave=t=>{t.preventDefault(),t.target.parentNode.toggleAttribute("dragging",!1)};onDragStart=t=>{t.dataTransfer.setData("target",JSON.stringify({index:this.intersId.indexOf(t.target.id),externalId:t.target.id}))};onDrop=t=>{t.target.parentNode.toggleAttribute("dragging",!1);const{index:e,externalId:a}=JSON.parse(t.dataTransfer.getData("target")),n=this.intersId.indexOf(t.target.parentNode.id);this.changePosition(a,e,n)};addRowDragEventListeners=t=>{t.addEventListener("dragover",this.onDragOver),t.addEventListener("dragenter",this.onDragOver),t.addEventListener("dragleave",this.onDragLeave),t.addEventListener("dragstart",this.onDragStart),t.addEventListener("drop",this.onDrop)};removeRowDragEventListeners=t=>{t.removeEventListener("dragover",this.onDragOver),t.removeEventListener("dragenter",this.onDragOver),t.removeEventListener("dragleave",this.onDragLeave),t.removeEventListener("dragstart",this.onDragStart),t.removeEventListener("drop",this.onDrop)};onAddFragments=t=>{console.log(t);const e=C(this,t),a=S(this,t);e.length&&A(e),a.forEach((t=>this.rowAdd(t)))};onOpenAddFragsModal=()=>{this.removeModalCloseEventListener(),this.modal.toggleAttribute("show",!1),this.addModalCloseEventListener(),this.addFragsModal.toggleAttribute("show",!0)}}!customElements.get("ldod-ve-manual")&&customElements.define("ldod-ve-manual",R);const A=t=>{const e=`The following Fragments are duplicated: ${t.join(", ")}`;s(e)},C=(t,e)=>[...new Set(e.filter((a=>t.visibleFragments.includes(a.xmlId)||e.filter((({xmlId:t})=>t===a.xmlId)).length>1)).map((t=>`\n${t.xmlId} - ${t.title}`)))],S=(t,e)=>[...new Set(e.filter((a=>!t.visibleFragments.includes(a.xmlId)&&1===e.filter((({xmlId:t})=>t===a.xmlId)).length)))],E=t=>({...t,number:"",usedList:[{externalId:t.externalId,xmlId:t.xmlId,urlId:t.urlId,shortName:t.shortName,title:t.interTitle,number:""}]});export{R as LdodVeManual};
//# sourceMappingURL=ldod-ve-manual-ea23843a.js.map
