import { h } from '@stencil/core';
export class BtnComponent {
    constructor() {
        this.id = '';
        /**
         * https://stenciljs.com/docs/properties#reflect-properties-to-attributes
         * In some cases it may be useful to keep a Prop in sync with an attribute.
         * In this case you can use the reflectToAttr option in the @Prop() decorator:
         */
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
    static get originalStyleUrls() { return {
        "$": ["modal.css"]
    }; }
    static get styleUrls() { return {
        "$": ["modal.css"]
    }; }
    static get properties() { return {
        "id": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "id",
            "reflect": false,
            "defaultValue": "''"
        },
        "isVisible": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "https://stenciljs.com/docs/properties#reflect-properties-to-attributes\nIn some cases it may be useful to keep a Prop in sync with an attribute.\nIn this case you can use the reflectToAttr option in the @Prop() decorator:"
            },
            "attribute": "is-visible",
            "reflect": true,
            "defaultValue": "false"
        }
    }; }
}
