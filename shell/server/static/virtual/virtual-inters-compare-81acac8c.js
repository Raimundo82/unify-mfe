import{createElement as a,createFragment as t}from"@core";import{references as e}from"./virtual.js";const n=(t,n,r)=>a("div",null,a("a",{is:"nav-to",to:e.category(t,n)},r)),r=({root:r})=>a("div",null,a("h4",{class:"text-center","data-virtual-key":"veCompare"},r.getConstants("veCompare")),a("div",null,r.inters.map(((o,s)=>{const l=o.tags.concat(o.annotations);return a("div",{style:{padding:"20px"}},a("h5",null,a("strong",{"data-virtual-key":"edition"},r.getConstants("edition")),": ",o.acronym),a("ldod-table",{id:"virtual-intersTaxonomyComparison",classes:"table table-bordered table-hover table-striped",headers:r.constants.taxonomyCompareHeaders,language:r.language,constants:r.constants,data:l.map((r=>({quote:r.quote||"---",comment:r.human?r.text:!1===r.human?a(t,null,a("div",null,a("a",{href:r.sourceLink,target:"_blank"},"tweet")),a("div",null,a("a",{href:r.profileURL,target:"_blank"},"profile")),a("div",null,r.date),"unknown"!==r.country&&a("div",null,r.country)):"---",user:a("a",{is:"nav-to",to:e.user(r.username)},r.username),tags:r.tags?r.tags.map((a=>n(a.acronym,a.urlId,a.name))):r.acronym?n(r.acronym,r.urlId,r.name):r.tagList?.length?r.tagList.map((a=>n(o.acronym,a,a))):"---"})))}))}))));export{r as default};
//# sourceMappingURL=virtual-inters-compare-81acac8c.js.map