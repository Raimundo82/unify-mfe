import{ldodEventPublisher as o,ldodEventSubscriber as s}from"@core";import{ldodEventBus as r}from"@core";const e=s=>o("error",s),l=s=>o("message",s),i=s=>o("token",s),u=()=>o("logout"),t=s=>o("login",s),a=o=>s("login",o),b=o=>s("logout",o);export{e as errorPublisher,r as ldodEventBus,t as loginPublisher,a as loginSubscriber,u as logoutPublisher,b as logoutSubscriber,l as messagePublisher,i as tokenPublisher};
//# sourceMappingURL=events-modules-f7c3e7bf.js.map