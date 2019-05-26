import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'polocode-input',
  styleUrl: 'input.css',
  shadow: true
})
export class BtnComponent {
    
    @Prop() type: string = 'text';
    @Prop() disabled: boolean = false;
    @Prop() required: boolean = false;
    @Prop() labelTxt: string = '';
    @Prop() class: string = '';
    @Prop() value: string = '';
    @Prop() placeholder: string = '';
    @Prop() error: string = '';
    @Prop() id: string;

  render() {
    return  (
        <div class={`polocode-input-wrapper`}>
            {this.labelTxt && <label htmlFor={this.id}>{this.labelTxt}</label>}
            <input type="text"
                placeholder={this.placeholder}
                class={`polocode-input ${this.labelTxt ? 'with-label' : 'no-label'} `} id={this.id}
                value={this.value} required={this.required} />
            {this.error && <div class="error">
                {this.error}
            </div>}
        </div>
    )

  }
}
