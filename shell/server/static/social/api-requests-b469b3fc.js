import{fetcher as e}from"@core";const t=window?.references?.text||{},a=e=>t.fragment?.(e),s="/admin/social",n=async()=>(r.reset=!0,await e.post(`${s}/tweets/generateCitations`,{})),o=async()=>(r.reset=!0,await e.post(`${s}/remove-tweets`,{})),i={citations:async()=>await e.get("/social/twitter-citations",null),manageCitations:async()=>await e.get(`${s}/tweets`,null)},r=new Proxy({},{set:(e,t,a)=>("reset"===t&&a?Reflect.ownKeys(e).forEach((t=>delete e[t])):e[t]=a,!0),get:async(e,t)=>"reset"===t?Reflect.ownKeys(e).forEach((t=>delete e[t])):(e[t]||(e[t]=await i[t]()),e[t])});export{r as d,n as g,o as r,a as t};
//# sourceMappingURL=api-requests-b469b3fc.js.map
