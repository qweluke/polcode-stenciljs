import { h } from '../mycomponent.core.js';

class BtnComponent {
    constructor() {
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
        return (h("div", { class: `polocode-input-wrapper` },
            this.labelTxt && h("label", { htmlFor: this.id }, this.labelTxt),
            h("input", { type: "text", placeholder: this.placeholder, id: this.id, class: `polocode-input ${this.labelTxt ? 'with-label' : 'no-label'} `, value: this.value, required: this.required }),
            this.error && h("div", { class: "error" }, this.error)));
    }
    static get is() { return "polocode-input"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "class": {
            "type": String,
            "attr": "class"
        },
        "disabled": {
            "type": Boolean,
            "attr": "disabled"
        },
        "error": {
            "type": String,
            "attr": "error"
        },
        "id": {
            "type": String,
            "attr": "id"
        },
        "labelTxt": {
            "type": String,
            "attr": "label-txt"
        },
        "placeholder": {
            "type": String,
            "attr": "placeholder"
        },
        "required": {
            "type": Boolean,
            "attr": "required"
        },
        "type": {
            "type": String,
            "attr": "type"
        },
        "value": {
            "type": String,
            "attr": "value"
        }
    }; }
    static get style() { return ".polocode-input-wrapper{font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;font-size:13px}.polocode-input-wrapper input{padding:10px;font-size:12px;border-radius:16px;-webkit-box-shadow:none;box-shadow:none;border:1px dashed #639;width:250px}.polocode-input-wrapper input.with-label{border-top-left-radius:0!important;border-top-right-radius:0!important}.polocode-input-wrapper input:focus{outline:none}.polocode-input-wrapper label{padding:10px;display:block;border-radius:16px;border-bottom-left-radius:0;border-bottom-right-radius:0;border:1px dashed #639;border-bottom:none;width:250px}.polocode-input-wrapper .error{display:block;color:red;font-size:80%}"; }
}

export { BtnComponent as PolocodeInput };
