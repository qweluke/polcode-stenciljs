import { h } from '../mycomponent.core.js';

class BtnComponent {
    constructor() {
        this.type = 'button';
        this.disabled = false;
        this.class = 'primary';
        this.text = '';
    }
    render() {
        return h("button", { disabled: this.disabled, class: `polocode-btn ${this.class}`, type: this.type },
            this.text,
            h("slot", null));
    }
    static get is() { return "polocode-button"; }
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
        "el": {
            "elementRef": true
        },
        "text": {
            "type": String,
            "attr": "text"
        },
        "type": {
            "type": String,
            "attr": "type"
        }
    }; }
    static get style() { return ".polocode-btn{outline:none;cursor:pointer;padding:10px;background:#639;color:var(--txt-color,#fff);font-weight:500;line-height:1rem;border-top-left-radius:1rem;border-bottom-right-radius:1rem}.polocode-btn.success{background:#adff2f}.polocode-btn.info{background:#87cefa}.polocode-btn:disabled,.polocode-btn[disabled]{opacity:.4}"; }
}

export { BtnComponent as PolocodeButton };
