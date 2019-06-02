import{h}from"../mycomponent.core.js";var BtnComponent=function(){function t(){this.type="button",this.disabled=!1,this.class="primary",this.text=""}return t.prototype.render=function(){return h("button",{disabled:this.disabled,class:"polocode-btn "+this.class,type:this.type},this.text,h("slot",null))},Object.defineProperty(t,"is",{get:function(){return"polocode-button"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{class:{type:String,attr:"class"},disabled:{type:Boolean,attr:"disabled"},el:{elementRef:!0},text:{type:String,attr:"text"},type:{type:String,attr:"type"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".polocode-btn{outline:none;cursor:pointer;padding:10px;background:#639;color:var(--txt-color,#fff);font-weight:500;line-height:1rem;border-top-left-radius:1rem;border-bottom-right-radius:1rem}.polocode-btn.success{background:#adff2f}.polocode-btn.info{background:#87cefa}.polocode-btn:disabled,.polocode-btn[disabled]{opacity:.4}"},enumerable:!0,configurable:!0}),t}();export{BtnComponent as PolocodeButton};