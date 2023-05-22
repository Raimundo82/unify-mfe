const e={pt:{about:"O Arquivo LdoD é um arquivo digital colaborativo do Livro do Desassossego de Fernando Pessoa. Contém imagens dos documentos autógrafos, novas transcriçõesdesses documentos e ainda transcrições de quatro edições da obra. Além da leitura e comparação das transcrições, o Arquivo LdoD permite que os utilizadores colaborem na criação de edições virtuais do Livro do Desassossego.",info:" <p>\n\t\t\tO <em>Arquivo LdoD</em> foi desenvolvido no &acirc;mbito do projeto de\n\t\t\tinvestiga&ccedil;&atilde;o &ldquo; Nenhum Problema Tem Solu&ccedil;&atilde;o: Um Arquivo\n\t\t\tDigital do\n\t\t\t<em>Livro do Desassossego</em>\n\t\t\t&rdquo; (PTDC/CLE-LLI/118713/2010) do Centro de Literatura Portuguesa da Universidade de\n\t\t\tCoimbra (CLP). Projeto financiado pela Funda&ccedil;&atilde;o para a Ci&ecirc;ncia e a\n\t\t\tTecnologia (FCT) e cofinanciado pelo Fundo Europeu de Desenvolvimento Regional (FEDER),\n\t\t\tatrav&eacute;s do Eixo I do Programa Operacional Fatores de Competitividade (POFC) do\n\t\t\tQuadro de Refer&ecirc;ncia Estrat&eacute;gica Nacional (QREN)&mdash;Uni&atilde;o\n\t\t\tEuropeia (COMPETE: FCOMP-01-0124-FEDER-019715). Financiado ainda por Fundos Nacionais\n\t\t\tatrav&eacute;s da Funda&ccedil;&atilde;o para a Ci&ecirc;ncia e a Tecnologia no\n\t\t\t&acirc;mbito dos projetos de &ldquo;Financiamento Plurianual &mdash;Unidade 759&rdquo;:\n\t\t\t&ldquo;PEst-OE/ELT/UI00759/2013&rdquo; e &ldquo;PEst-OE/ELT/UI0759/2014&rdquo;.\n\t\t</p>"},en:{about:"The LdoD Archive is a collaborative digital archive of the Book of Disquiet by Fernando Pessoa. It contains images of the autograph documents, new transcriptions of those documents and also transcriptions of four editions of the work. In addition to reading and comparing transcriptions, the LdoD Archive enables users to collaborate in creating virtual editions of the Book of Disquiet.",info:" <p>\n\t\t\tThe <em>LdoD Archive</em> was developed under the research project &ldquo;No Problem Has\n\t\t\ta Solution: A Digital Archive of the <em>Book of Disquiet</em>,\n\t\t\t&rdquo;(PTDC/CLE-LLI/118713/2010) of the Centre for Portuguese Literature at the\n\t\t\tUniversity of Coimbra (CLP). Project funded by the Foundation for Science and Technology\n\t\t\t(FCT) and co-funded by the European Regional Development Fund (FEDER), through Axis I of\n\t\t\tthe Competitiveness Factors Operational Program (POFC) of the National Strategic\n\t\t\tFramework (QREN)&mdash;European Union (COMPETE: FCOMP-01-0124-FEDER-019715). Additional\n\t\t\tnational funds by the Foundation for Science and Technology under the\n\t\t\t&ldquo;Multi-annual Financing&mdash;Unit 759&rdquo; projects:\n\t\t\t&ldquo;PEst-OE/ELT/UI00759/2013&rdquo; and &ldquo;PEst-OE/ELT/UI0759/2014&rdquo;.\n\t\t</p>"},es:{about:"El Archivo LdoD es un archivo digital colaborativo del Libro del desasosiego de Fernando Pessoa. Contiene imágenes de los documentos originales, nuevas transcripciones de estos documentos y transcripciones de cuatro ediciones de la obra. Además de la lectura y la comparación de las transcripciones, el Archivo LdoD permite a los usuarios colaborar en la creación de ediciones virtuales del Libro del desasosiego.",info:" <p>\n\t\t\tEl <em>Archivo LdoD</em> resulta del proyecto de investigaci&oacute;n\n\t\t\t&ldquo;Ning&uacute;n problema tiene soluci&oacute;n: Un archivo digital del\n\t\t\t<em>Libro del desasosiego</em>&rdquo;, (PTDC/CLE-LLI/118713/2010) del Centro de\n\t\t\tLiteratura Portuguesa de la Universidad de Coimbra. Proyecto financiado por la\n\t\t\tFundaci&oacute;n para la Ciencia y la Tecnolog&iacute;a (FCT) y cofinanciado por el\n\t\t\tFondo Europeo de Desarrollo Regional (FEDER), a trav&eacute;s de la Prioridad I del\n\t\t\tPrograma Operativo de los Factores de Competitividad (POFC) del Marco de Referencia\n\t\t\tEstrat&eacute;gica Nacional (QREN)&mdash;Uni&oacute;n Europea (COMPETE: FCOMP-01-\n\t\t\t0124-FEDER-019715). Financiado tambi&eacute;n por Fondos Nacionales a trav&eacute;s de\n\t\t\tla Fundaci&oacute;n para la Ciencia y la Tecnolog&iacute;a en el marco de los proyectos\n\t\t\tde &ldquo;Financiaci&oacute;n Plurianual&mdash;Unidad 759&rdquo;:\n\t\t\t&ldquo;PEst-OE/ELT/UI00759/2013&rdquo; y &ldquo;PEst-OE/ELT/UI0759/2014&rdquo;.\n\t\t</p>"}},o=e=>{e.querySelectorAll("img").forEach((e=>{e.onload=()=>{e.style.opacity="1";const o=e.previousElementSibling;o instanceof HTMLImageElement||o.remove()},e.src=function(e){const o=`/ldod-mfes/home/resources/${e}`;return new URL(o,import.meta.url).href}(e.id)}))};class t extends HTMLElement{constructor(){super(),this.shadowRoot||(this.attachShadow({mode:"open"}),this.render())}static get observedAttributes(){return["language"]}get language(){return this.getAttribute("language")}set language(e){this.setAttribute("language",e)}connectedCallback(){this.addEventListeners()}attributeChangedCallback(o,t,a){t&&t!==a&&this.shadowRoot.querySelectorAll("[data-info-key]").forEach((o=>o.innerHTML=e[this.language][o.dataset.infoKey]))}addEventListeners(){window.addEventListener("pointermove",(()=>o(this.shadowRoot)),{once:!0})}async render(){this.shadowRoot.innerHTML=(await import("./home-info-html-efc48d77.js")).default(this.language),this.addEventListeners()}}customElements.define("home-info",t);const a=Object.freeze(Object.defineProperty({__proto__:null,HomeInfo:t},Symbol.toStringTag,{value:"Module"}));export{e as c,a as h,o as l};
//# sourceMappingURL=home-info-e9be12e8.js.map
