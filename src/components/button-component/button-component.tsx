import { Component, Element, Prop, h } from '@stencil/core';

@Component({
  tag: 'polocode-button',
  styleUrl: 'button.css',
  shadow: true
})
export class BtnComponent {
    @Element() public el: HTMLElement;

    @Prop() type: string = 'button';
    @Prop() disabled: boolean = false;
    @Prop() class: string = 'primary';
    @Prop() text: string = '';

  render() {
    return <button
        disabled={this.disabled} 
        class={`polocode-btn ${this.class}`}
        type={this.type} >
        {this.text}
        <slot />
        </button>
  }
}
