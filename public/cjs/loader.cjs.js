'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./mycomponent-7b1e16d0.js');

const defineCustomElements = (win, options) => {
  return __chunk_1.patchEsm().then(() => {
    __chunk_1.bootstrapLazy([["polocode-button_3.cjs",[[1,"polocode-button",{"type":[1],"disabled":[4],"class":[1],"text":[1]}],[1,"polocode-input",{"type":[1],"disabled":[4],"required":[4],"labelTxt":[1,"label-txt"],"class":[1],"value":[1],"placeholder":[1],"error":[1],"id":[1]}],[1,"polocode-modal",{"id":[1],"isVisible":[516,"is-visible"]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
