export class BtnComponent {
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
    static get style() { return "/**style-placeholder:polocode-modal:**/"; }
}
