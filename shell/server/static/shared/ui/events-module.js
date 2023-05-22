const e=globalThis.eventBus,o=(e,o)=>new CustomEvent("ldod:file-uploaded",{detail:{ref:e,payload:o},bubbles:!0,composed:!0}),l=o=>e?.publish("ldod:error",o);export{l as e,o as u};
//# sourceMappingURL=events-module.js.map
