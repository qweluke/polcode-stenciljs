import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'polocode-modal',
  styleUrl: 'modal.css',
  shadow: true
})
export class BtnComponent {
    
    @Prop() id: string = '';
    
    /**
     * https://stenciljs.com/docs/properties#reflect-properties-to-attributes
     * In some cases it may be useful to keep a Prop in sync with an attribute.
     * In this case you can use the reflectToAttr option in the @Prop() decorator:
     */
    @Prop({ reflectToAttr: true }) isVisible: boolean = false;

    render() {
        return  (
            <div id={this.id} class="modal" style={{ 'display': this.isVisible ? 'block' : 'none' }}>
                <div class="modal-content">
                    <span class="close" onClick={() => {this.isVisible = false}}>&times;</span>
                    <slot />
                </div>

            </div>
        )

    }
}
