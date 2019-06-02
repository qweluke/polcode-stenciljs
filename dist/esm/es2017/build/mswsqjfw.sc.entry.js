import { h } from '../mycomponent.core.js';

class BtnComponent {
    constructor() {
        this.id = '';
        this.isVisible = false;
    }
    render() {
        return (h("div", { id: this.id, class: "modal", style: { 'display': this.isVisible ? 'block' : 'none' } },
            h("div", { class: "modal-content" },
                h("span", { class: "close", onClick: () => { this.isVisible = false; } }, "\u00D7"),
                h("slot", null))));
    }
    static get is() { return "polocode-modal"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "id": {
            "type": String,
            "attr": "id"
        },
        "isVisible": {
            "type": Boolean,
            "attr": "is-visible",
            "reflectToAttr": true
        }
    }; }
    static get style() { return "body.sc-polocode-modal{font-family:Arial,Helvetica,sans-serif}.modal.sc-polocode-modal{display:none;position:fixed;z-index:1;padding-top:100px;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:var(--modal-bg-color,rgba(0,0,0,.4))}.modal-content.sc-polocode-modal{background-color:#fefefe;margin:auto;padding:20px;border:1px solid #888;width:80%}.close.sc-polocode-modal{color:#aaa;float:right;font-size:28px;font-weight:700}.close.sc-polocode-modal:focus, .close.sc-polocode-modal:hover{color:#000;text-decoration:none;cursor:pointer}"; }
}

export { BtnComponent as PolocodeModal };
