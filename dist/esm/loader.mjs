import { c as patchEsm, b as bootstrapLazy } from './mycomponent-6a942625.js';

const defineCustomElements = (win, options) => {
  return patchEsm().then(() => {
    bootstrapLazy([["polocode-button_3",[[1,"polocode-button",{"type":[1],"disabled":[4],"class":[1],"text":[1]}],[1,"polocode-input",{"type":[1],"disabled":[4],"required":[4],"labelTxt":[1,"label-txt"],"class":[1],"value":[1],"placeholder":[1],"error":[1],"id":[1]}],[1,"polocode-modal",{"id":[1],"isVisible":[516,"is-visible"]}]]]], options);
  });
};

export { defineCustomElements };
