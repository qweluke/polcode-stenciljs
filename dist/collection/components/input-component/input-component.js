export class BtnComponent {
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
    static get style() { return "/**style-placeholder:polocode-input:**/"; }
}
