'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./mycomponent-7b1e16d0.js');

class BtnComponent {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
        this.type = 'button';
        this.disabled = false;
        this.class = 'primary';
        this.text = '';
    }
    render() {
        return __chunk_1.h("button", { disabled: this.disabled, class: `polocode-btn ${this.class}`, type: this.type }, this.text, __chunk_1.h("slot", null));
    }
    get el() { return __chunk_1.getElement(this); }
    static get style() { return ".polocode-btn{outline:none;cursor:pointer;padding:10px;background:#639;color:var(--txt-color,#fff);font-weight:500;line-height:1rem;border-top-left-radius:1rem;border-bottom-right-radius:1rem}.polocode-btn.success{background:#adff2f}.polocode-btn.info{background:#87cefa}.polocode-btn:disabled,.polocode-btn[disabled]{opacity:.4}"; }
}

class BtnComponent$1 {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
        this.type = 'text';
        this.disabled = false;
        this.required = false;
        this.labelTxt = '';
        this.class = '';
        this.value = '';
        this.placeholder = '';
        this.error = '';
    }
    render() {
        return (__chunk_1.h("div", { class: `polocode-input-wrapper` }, this.labelTxt && __chunk_1.h("label", { htmlFor: this.id }, this.labelTxt), __chunk_1.h("input", { type: "text", placeholder: this.placeholder, class: `polocode-input ${this.labelTxt ? 'with-label' : 'no-label'} `, id: this.id, value: this.value, required: this.required }), this.error && __chunk_1.h("div", { class: "error" }, this.error)));
    }
    static get style() { return ".polocode-input-wrapper{font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;font-size:13px}.polocode-input-wrapper input{padding:10px;font-size:12px;border-radius:16px;-webkit-box-shadow:none;box-shadow:none;border:1px dashed #639;width:250px}.polocode-input-wrapper input.with-label{border-top-left-radius:0!important;border-top-right-radius:0!important}.polocode-input-wrapper input:focus{outline:none}.polocode-input-wrapper label{padding:10px;display:block;border:1px dashed #639;border-radius:16px;border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom:none;width:250px}.polocode-input-wrapper .error{display:block;color:red;font-size:80%}"; }
}

class BtnComponent$2 {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
        this.id = '';
        /**
         * https://stenciljs.com/docs/properties#reflect-properties-to-attributes
         * In some cases it may be useful to keep a Prop in sync with an attribute.
         * In this case you can use the reflectToAttr option in the @Prop() decorator:
         */
        this.isVisible = false;
    }
    render() {
        return (__chunk_1.h("div", { id: this.id, class: "modal", style: { 'display': this.isVisible ? 'block' : 'none' } }, __chunk_1.h("div", { class: "modal-content" }, __chunk_1.h("span", { class: "close", onClick: () => { this.isVisible = false; } }, "\u00D7"), __chunk_1.h("slot", null))));
    }
    static get style() { return "body{font-family:Arial,Helvetica,sans-serif}.modal{display:none;position:fixed;z-index:1;padding-top:100px;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:var(--modal-bg-color,rgba(0,0,0,.4))}.modal-content{background-color:#fefefe;margin:auto;padding:20px;border:1px solid #888;width:80%}.close{color:#aaa;float:right;font-size:28px;font-weight:700}.close:focus,.close:hover{color:#000;text-decoration:none;cursor:pointer}"; }
}

exports.polocode_button = BtnComponent;
exports.polocode_input = BtnComponent$1;
exports.polocode_modal = BtnComponent$2;
