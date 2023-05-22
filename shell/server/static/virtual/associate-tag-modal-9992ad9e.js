import{createElement as e}from"@core";import"./select-pure-b3086d58.js";import"@ui/modal-bs.js";const o=e=>e.associateTagModal.querySelector("select-pure#virtual-associateTag"),t=({root:t,inter:a})=>e("ldod-bs-modal",{id:"virtual--associate-tag-modal","dialog-class":"modal-xl"},e("style",null,"input#select-pure-autocomplete{border:none;border-radius:0;min-height:var(--select-height, 44px);padding:0 10px;width:auto}select-pure#virtual-associateTag{--border-color: #ced4da;--dropdown-gap: 5px;--dropdown-items: 5}.btn{display:inline-block;font-weight:400;line-height:1.5;color:#212529;text-align:center;text-decoration:none;vertical-align:middle;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;background-color:transparent;border:1px solid transparent;padding:.375rem .75rem;font-size:1rem;border-radius:.25rem;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;max-width:300px}.btn-primary{color:#fff;background-color:#0d6efd;border-color:#0d6efd}.btn-primary:hover{color:#fff;background-color:#0b5ed7;border-color:#0a58ca}\n"),e("span",{slot:"header-slot"},e("span",null,a.title)),e("div",{slot:"body-slot"},e("div",{id:"multipleSelectContainer",style:{padding:"20px"}},e("select-pure",{id:"virtual-associateTag",name:"categories",multiple:!0},e("input",{id:"select-pure-autocomplete",type:"text",placeholder:t.getConstants("newCategory"),onKeyUp:r=>((t,a,r)=>{const l=r.notAssignedCategories.map((e=>e.name)),s=r.categories.map((e=>e.name)),n=t.target,i=l.filter((e=>e.toLowerCase().startsWith(n.value.toLowerCase())));Array.from(o(a).querySelectorAll("option-pure")).forEach((e=>{if(e.hasAttribute("selected")||i.includes(e.getAttribute("value")))return e.hidden=!1;e.hidden=!0})),"Enter"===t.key&&!((e,o)=>e.some((e=>e===o)))(i,n.value)&&a.taxonomy.openVocab&&(o(a).shadowRoot.querySelectorAll("div.multi-selected-wrapper span.multi-selected").forEach((e=>e.remove())),o(a).querySelectorAll("option-pure[selected]").forEach((e=>e.remove())),!s.includes(n.value)&&s.push(t.target.value),!r.categories.map((e=>e.name)).includes(n.value)&&r.categories.push({name:n.value}),o(a).append(...s.map((o=>e("option-pure",{selected:!0,value:o},o)))))})(r,t,a)}),a.notAssignedCategories.map((o=>e("option-pure",{value:o.name},o.name))),a.categories.map((o=>e("option-pure",{selected:!0,value:o.name},o.name)))))),e("div",{slot:"footer-slot"},e("button",{type:"button",class:"btn btn-primary",onClick:t.onAssociateTags},e("span",null,t.getConstants("associate")))));export{t as default};
//# sourceMappingURL=associate-tag-modal-9992ad9e.js.map
