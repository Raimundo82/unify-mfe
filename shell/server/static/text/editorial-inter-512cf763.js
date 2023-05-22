import{c as t,t as e}from"./title-41901dba.js";import{g as o}from"./expert-edition-56d6ee5a.js";import{r as i}from"./external-deps-3bddd128.js";import{e as r}from"./editorial-inter-transcription-fe35f66b.js";import"@core";import"./constants-5d8195b3.js";import"./text-7122b869.js";const n=async({root:n,inter:s})=>{const a=document.createElement("template");return a.innerHTML=String.raw`
			${t({root:n,checkboxes:["diff"]})}
			<div style="display: flex;justify-content: center;">
				${e({title:n.data.title})}
				<a is="nav-to" to="${i(s.xmlId,s.urlId)}" style="margin: 20px 10px;">
					<span is="ldod-span-icon" icon="eye" size="20px" hover-fill="#0d6efd"></span>
				</a>
			</div>
			${r({root:n,key:0})}
			<div id="interMetaInfo" class="well"></div>	`,a.content.querySelector("#interMetaInfo").appendChild(o([s],n)),a.content};export{n as default};
//# sourceMappingURL=editorial-inter-512cf763.js.map
