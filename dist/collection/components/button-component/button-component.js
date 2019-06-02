export class BtnComponent {
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
    static get style() { return "/**style-placeholder:polocode-button:**/"; }
}
