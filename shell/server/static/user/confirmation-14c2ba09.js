import{navigateTo as s}from"@core";import{b as e}from"./api-requests-4b63daad.js";import{u as o}from"./user-references-3af1d170.js";import{messagePublisher as r,errorPublisher as n}from"./events-modules-f7c3e7bf.js";import"./store-495a4209.js";const t=async()=>{let t=`/sign-up-confirmation?token=${new URL(document.location).searchParams.get("token")}`;await e(t).then((s=>s&&r(s.message))).catch((s=>{console.error(s),s&&n(s.message)})),s(o.signin())},a=()=>console.info("unmount"),i="/sign-up-confirmation";export{t as mount,i as path,a as unMount};
//# sourceMappingURL=confirmation-14c2ba09.js.map