import{t as e}from"./text-7122b869.js";function a(e){return document.createRange().createContextualFragment(e)}function t(a){return a.querySelectorAll("a[href]").forEach((a=>{if(a.href.includes("/fragments/fragment/Fr")){const t=a.href.slice(a.href.indexOf("Fr")),o=document.createElement("a",{is:"nav-to"});o.setAttribute("to",e.fragment(t)),o.innerHTML=a.innerHTML,a.replaceWith(o)}})),a}const o=async e=>new Promise((a=>setTimeout(a,e))),i={headers:["title","jpc","tsc","rz","jp","wit1","wit2","wit3"],pt:{encodedFragments:e=>`Fragmentos Codificados (${e})`,title:"Título",colTitle:"Título: ",heteronym:"Heterónimo: ",notAssigned:"Não atribuído",volume:"Volume: ",number:"Número: ",page:"Página: ",date:"Data: ",notes:"Notas: ",nota:"Nota: ",jpc:"Jacinto do Prado Coelho",tsc:"Teresa Sobral Cunha",rz:"Richard Zenith",jp:"Jerónimo Pizarro",wit1:"Testemunho",wit2:"Testemunho",wit3:"Testemunho",identification:"Identificação: ",form:"Formato: ",leaf:"Folha",material:"Material: ",paper:"Papel",columns:"Colunas: ",ldodLabel:"Marca LdoD: ",hadLdoDLabel:e=>(e?"Com":"Sem")+" marca LdoD",handNote:"Manuscript",typeNote:"Datiloscrito",journal:"Revista: ",pubPlace:"Lugar de Publicação: ",facs:"Facsimiles: "},en:{encodedFragments:e=>`Encoded Fragments (${e})`,title:"Title",colTitle:"Title: ",heteronym:"Heteronym: ",notAssigned:"Not assigned",volume:"Volume: ",number:"Number: ",page:"Page: ",date:"Date: ",notes:"Notes: ",nota:"Note: ",jpc:"Jacinto do Prado Coelho",tsc:"Teresa Sobral Cunha",rz:"Richard Zenith",jp:"Jerónimo Pizarro",wit1:"Witness",wit2:"Witness",wit3:"Witness",identification:"Identification: ",form:"Form: ",leaf:"Leaf",material:"Material: ",paper:"Paper",columns:"Columns: ",ldodLabel:"LdoD Mark: ",hadLdoDLabel:e=>(e?"With":"Without")+" LdoD Mark",handNote:"Manuscript",typeNote:"Datiloscrito",journal:"Journal: ",pubPlace:"Publication Place: ",facs:"Facsimiles: "},es:{encodedFragments:e=>`Fragmentos Codificados (${e})`,title:"Título",colTitle:"Título: ",heteronym:"Heterónimo: ",notAssigned:"No assignado",volume:"Volumen: ",number:"Número: ",page:"Página: ",date:"Data: ",notes:"Notas: ",nota:"Nota: ",jpc:"Jacinto do Prado Coelho",tsc:"Teresa Sobral Cunha",rz:"Richard Zenith",jp:"Jerónimo Pizarro",wit1:"Testimonio",wit2:"Testimonio",wit3:"Testimonio",identification:"Identificación: ",form:"Form: ",leaf:"Hoja",material:"Material: ",paper:"Papel",columns:"Columnas: ",ldodLabel:"Marca LdoD: ",hadLdoDLabel:e=>(e?"Com":"Sin")+" marca LdoD",handNote:"Manuscrito",typeNote:"Mecanografiado",journal:"Revista: ",pubPlace:"Lugar de la Publicacion: ",facs:"Facsimiles: "}};export{t as a,i as f,a as p,o as s};
//# sourceMappingURL=constants-5d8195b3.js.map
