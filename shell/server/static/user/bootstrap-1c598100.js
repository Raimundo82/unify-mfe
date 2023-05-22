import{u as e}from"./api-requests-4b63daad.js";import{loginPublisher as s,logoutPublisher as t}from"./events-modules-f7c3e7bf.js";import{storageState as r,getState as o,setState as a}from"./store-495a4209.js";import"@core";import"./user-references-3af1d170.js";r?.token&&e(o().token).then((e=>{a({user:e}),s(e)})).catch((e=>{console.error(e),t()}));
//# sourceMappingURL=bootstrap-1c598100.js.map
