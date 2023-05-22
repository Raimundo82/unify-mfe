import{logoutPublisher as s}from"./events-modules-f7c3e7bf.js";import{getState as t,setState as e}from"./store-495a4209.js";import{navigateTo as o}from"@core";import{u as r}from"./user-references-3af1d170.js";const a=()=>{(t().user||t().token)&&(e({token:"",user:""}),s(),o(r.signin()))},n=()=>{},u="/signout";export{a as mount,u as path,n as unMount};
//# sourceMappingURL=signout-67e60c8f.js.map
