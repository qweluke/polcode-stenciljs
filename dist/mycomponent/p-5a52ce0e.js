const t=window,e=document,n={t:0,o:"",raf:t=>requestAnimationFrame(t),ael:(t,e,n,o)=>t.addEventListener(e,n,o),rel:(t,e,n,o)=>t.removeEventListener(e,n,o)},o=!!e.documentElement.attachShadow,l=(()=>{try{return new CSSStyleSheet,!0}catch(t){}return!1})(),s=new WeakMap,i=t=>s.get(t),r=(t,e)=>s.set(e.l=t,e),c=(t,e)=>e in t,f=t=>console.error(t),a=new Map,u=t.__stencil_cssshim;let $=0,m=!1;const p=[],y=[],d=[],h=t=>e=>{t.push(e),m||(m=!0,n.raf(b))},w=(t,e)=>{let n=0,o=0;for(;n<t.length&&(o=performance.now())<e;)try{t[n++](o)}catch(t){f(t)}n===t.length?t.length=0:0!==n&&t.splice(0,n)},b=()=>{$++,(t=>{for(let e=0;e<t.length;e++)try{t[e](performance.now())}catch(t){f(t)}t.length=0})(p);const t=2==(6&n.t)?performance.now()+7*Math.ceil($*(1/22)):1/0;w(y,t),w(d,t),y.length>0&&(d.push(...y),y.length=0),(m=p.length+y.length+d.length>0)?n.raf(b):$=0},_=h(y),g={},v=t=>null!=t,j=t=>t.toLowerCase(),k=()=>t.CSS&&t.CSS.supports&&t.CSS.supports("color","var(--c)")?Promise.resolve():__sc_import_mycomponent("./p-229ebf7a.js"),S=async()=>{{const t=Array.from(e.querySelectorAll("script")),n=t.find(t=>t.hasAttribute(M))||t.find(t=>t.src.includes("/mycomponent.esm.js")),o=new URL(".",new URL(n.getAttribute(M)||n.src,e.baseURI));return R(o.href),window.customElements||await __sc_import_mycomponent("./p-7eb7509a.js"),o.pathname}},R=n=>{const o=`__sc_import_${"mycomponent".replace(/\s|-/g,"_")}`;try{t[o]=new Function("w","return import(w);")}catch(l){const s=new Map;t[o]=(l=>{const i=new URL(l,n).href;let r=s.get(i);if(!r){const n=e.createElement("script");n.type="module",n.src=URL.createObjectURL(new Blob([`import * as m from '${i}'; window.${o}.m = m;`],{type:"application/javascript"})),r=new Promise(e=>{n.onload=(()=>{e(t[o].m),n.remove()})}),s.set(i,r),e.head.appendChild(n)}return r})}},M="data-resources-url",U=new WeakMap,x=t=>"sc-"+t,L=[];function O(t,e){let n,o,l=null,s=!1,i=!1,r=arguments.length;for(;r-- >2;)L.push(arguments[r]);for(;L.length>0;){let e=L.pop();if(e&&void 0!==e.pop)for(r=e.length;r--;)L.push(e[r]);else"boolean"==typeof e&&(e=null),(i="function"!=typeof t)&&(null==e?e="":"number"==typeof e?e=String(e):"string"!=typeof e&&(i=!1)),i&&s?l[l.length-1].s+=e:null===l?l=[i?{t:0,s:e}:e]:l.push(i?{t:0,s:e}:e),s=i}if(null!=e){if(e.className&&(e.class=e.className),"object"==typeof e.class){for(r in e.class)e.class[r]&&L.push(r);e.class=L.join(" "),L.length=0}null!=e.key&&(n=e.key),null!=e.name&&(o=e.name)}if("function"==typeof t)return t(e,l||[],T);const c={i:t,u:l,$:void 0,t:0};return c.p=e,c.s=void 0,c.h=n,c._=o,c}const C={},T={forEach:(t,e)=>t.map(E).forEach(e),map:(t,e)=>t.map(E).map(e).map(F)},E=t=>({vattrs:t.p,vchildren:t.u,vkey:t.h,vname:t._,vtag:t.i,vtext:t.s}),F=t=>({t:0,p:t.vattrs,u:t.vchildren,h:t.vkey,_:t.vname,i:t.vtag,s:t.vtext}),P=(t,e,o,l,s,i)=>{if(o!==l)if("class"!==e||s)if("style"===e){for(const e in o)l&&null!=l[e]||(e.includes("-")?t.style.removeProperty(e):t.style[e]="");for(const e in l)o&&l[e]===o[e]||(e.includes("-")?t.style.setProperty(e,l[e]):t.style[e]=l[e])}else if("key"===e);else if("ref"===e)l&&l(t);else if(e.startsWith("on")&&!c(t,e))e=c(t,j(e))?j(e.substring(2)):j(e[2])+e.substring(3),o&&n.rel(t,e,o,!1),l&&n.ael(t,e,l,!1);else{const n=c(t,e),o=["object","function"].includes(typeof l);if((n||o&&null!==l)&&!s)try{t[e]=null==l&&-1===t.tagName.indexOf("-")?"":l}catch(t){}null==l||!1===l?t.removeAttribute(e):(!n||4&i||s)&&!o&&(l=!0===l?"":l.toString(),t.setAttribute(e,l))}else{const e=A(o),n=A(t.className).filter(t=>!e.includes(t));t.className=n.concat(A(l).filter(t=>!n.includes(t))).join(" ")}},A=t=>t?t.split(" "):[],N=(t,e,n,o)=>{const l=11===e.$.nodeType&&e.$.host?e.$.host:e.$,s=t&&t.p||g,i=e.p||g;for(o in s)null==i[o]&&null!=s[o]&&P(l,o,s[o],void 0,n,e.t);for(o in i)P(l,o,s[o],i[o],n,e.t)};let W,q,B,H=!1,z=!1,D=!1;const G=(t,n,o,l)=>{const s=n.u[o];let i,r,c,f=0;if(H||(D=!0,"slot"===s.i&&(W&&l.classList.add(W+"-s"),s.t|=s.u?2:1)),v(s.s))s.$=e.createTextNode(s.s);else if(1&s.t)s.$=e.createTextNode("");else if(i=s.$=e.createElement(2&s.t?"slot-fb":s.i),N(null,s,!1),v(W)&&i["s-si"]!==W&&i.classList.add(i["s-si"]=W),s.u)for(f=0;f<s.u.length;++f)(r=G(t,s,f,i))&&i.appendChild(r);return s.$["s-hn"]=B,3&s.t&&(s.$["s-sr"]=!0,s.$["s-cr"]=q,s.$["s-sn"]=s._||"",(c=t&&t.u&&t.u[o])&&c.i===s.i&&t.$&&I(t.$,!1)),s.$},I=(t,e)=>{n.t|=1;const o=t.childNodes;for(let t=o.length-1;t>=0;t--){const n=o[t];n["s-hn"]!==B&&n["s-ol"]&&(X(n).insertBefore(n,V(n)),n["s-ol"].remove(),n["s-ol"]=void 0,D=!0),e&&I(n,e)}n.t&=-2},J=(t,e,n,o,l,s)=>{let i,r=t["s-cr"]&&t["s-cr"].parentNode||t;for(r.shadowRoot&&j(r.tagName)===B&&(r=r.shadowRoot);l<=s;++l)o[l]&&(i=G(null,n,l,t))&&(o[l].$=i,r.insertBefore(i,V(e)))},K=(t,e,n,o)=>{for(;e<=n;++e)v(t[e])&&(o=t[e].$,nt(t[e],!0),z=!0,o["s-ol"]?o["s-ol"].remove():I(o,!0),o.remove())},Q=(t,e)=>t.i===e.i&&("slot"===t.i?t._===e._:t.h===e.h),V=t=>t&&t["s-ol"]?t["s-ol"]:t,X=t=>(t["s-ol"]?t["s-ol"]:t).parentNode,Y=(t,e)=>{const n=e.$=t.$,o=t.u,l=e.u;let s;v(e.s)?(s=n["s-cr"])?s.parentNode.textContent=e.s:t.s!==e.s&&(n.textContent=e.s):("slot"===e.i||N(t,e,!1),v(o)&&v(l)?((t,e,n,o)=>{let l,s,i=0,r=0,c=0,f=0,a=e.length-1,u=e[0],$=e[a],m=o.length-1,p=o[0],y=o[m];for(;i<=a&&r<=m;)if(null==u)u=e[++i];else if(null==$)$=e[--a];else if(null==p)p=o[++r];else if(null==y)y=o[--m];else if(Q(u,p))Y(u,p),u=e[++i],p=o[++r];else if(Q($,y))Y($,y),$=e[--a],y=o[--m];else if(Q(u,y))"slot"!==u.i&&"slot"!==y.i||I(u.$.parentNode,!1),Y(u,y),t.insertBefore(u.$,$.$.nextSibling),u=e[++i],y=o[--m];else if(Q($,p))"slot"!==u.i&&"slot"!==y.i||I($.$.parentNode,!1),Y($,p),t.insertBefore($.$,u.$),$=e[--a],p=o[++r];else{for(c=-1,f=i;f<=a;++f)if(e[f]&&v(e[f].h)&&e[f].h===p.h){c=f;break}c>=0?((s=e[c]).i!==p.i?l=G(e&&e[r],n,c,t):(Y(s,p),e[c]=void 0,l=s.$),p=o[++r]):(l=G(e&&e[r],n,r,t),p=o[++r]),l&&X(u.$).insertBefore(l,V(u.$))}i>a?J(t,null==o[m+1]?null:o[m+1].$,n,o,r,m):r>m&&K(e,i,a)})(n,o,e,l):v(l)?(v(t.s)&&(n.textContent=""),J(n,null,e,l,0,l.length-1)):v(o)&&K(o,0,o.length-1))},Z=(t,e,n,o,l,s,i,r)=>{for(o=0,l=(n=t.childNodes).length;o<l;o++)if(1===(e=n[o]).nodeType){if(e["s-sr"])for(i=e["s-sn"],e.hidden=!1,s=0;s<l;s++)if(n[s]["s-hn"]!==e["s-hn"])if(r=n[s].nodeType,""!==i){if(1===r&&i===n[s].getAttribute("slot")){e.hidden=!0;break}}else if(1===r||3===r&&""!==n[s].textContent.trim()){e.hidden=!0;break}Z(e)}},tt=[],et=t=>{let e,n,o,l,s=t.childNodes,i=s.length,r=0,c=0,f=0;for(i=s.length;r<i;r++){if((e=s[r])["s-sr"]&&(n=e["s-cr"]))for(l=e["s-sn"],c=(o=n.parentNode.childNodes).length-1;c>=0;c--)(n=o[c])["s-cn"]||n["s-nr"]||n["s-hn"]===e["s-hn"]||((3===(f=n.nodeType)||8===f)&&""===l||1===f&&null===n.getAttribute("slot")&&""===l||1===f&&n.getAttribute("slot")===l)&&(tt.some(t=>t.nodeToRelocate===n)||(z=!0,n["s-sn"]=l,tt.push({slotRefNode:e,nodeToRelocate:n})));1===e.nodeType&&et(e)}},nt=(t,e)=>{t&&(t.p&&t.p.ref&&t.p.ref(e?null:t.$),t.u&&t.u.forEach(t=>{nt(t,e)}))},ot=async(t,e,n,o)=>{e.t|=16;const l=e.l;_(()=>lt(t,e,n,o,l))},lt=(t,l,s,i,r)=>{l.t&=-17,i&&((t,n)=>{const l=((t,o,l,s)=>{let i=x(n.g),r=a.get(i);if(t=11===t.nodeType?t:e,r)if("string"==typeof r){let n,o=U.get(t=t.head||t);if(o||U.set(t,o=new Set),!o.has(i)){if(u){const t=(n=u.createHostStyle(s,i,r))["s-sc"];t&&(i=t,o=null)}else(n=e.createElement("style")).innerHTML=r;t.appendChild(n),o&&o.add(i)}}else t.adoptedStyleSheets.includes(r)||(t.adoptedStyleSheets=[...t.adoptedStyleSheets,r]);return i})(o&&t.shadowRoot?t.shadowRoot:t.getRootNode(),0,0,t);10&n.t&&(t["s-sc"]=l,t.classList.add(l+"-h"))})(t,s),l.t|=4;try{((t,l,s,i)=>{const r=l.v||{t:0};if(B=j(t.tagName),(t=>t&&t.i===C)(i)?i.i=null:i=O(null,null,i),s.j&&(i.p=i.p||{},s.j.forEach(([e,n])=>i.p[n]=t[e])),i.t|=4,l.v=i,i.$=r.$=t.shadowRoot||t,W=t["s-sc"],q=t["s-cr"],H=o&&0!=(1&s.t),D=z=!1,Y(r,i),D){et(i.$);for(let t=0;t<tt.length;t++){const n=tt[t];if(!n.nodeToRelocate["s-ol"]){const t=e.createTextNode("");t["s-nr"]=n.nodeToRelocate,n.nodeToRelocate.parentNode.insertBefore(n.nodeToRelocate["s-ol"]=t,n.nodeToRelocate)}}n.t|=1;for(let t=0;t<tt.length;t++){const e=tt[t],n=e.slotRefNode.parentNode;let o=e.slotRefNode.nextSibling,l=e.nodeToRelocate["s-ol"];for(;l=l.previousSibling;){let t=l["s-nr"];if(t&&t&&t["s-sn"]===e.nodeToRelocate["s-sn"]&&n===t.parentNode&&(t=t.nextSibling)&&t&&!t["s-nr"]){o=t;break}}(!o&&n!==e.nodeToRelocate.parentNode||e.nodeToRelocate.nextSibling!==o)&&e.nodeToRelocate!==o&&n.insertBefore(e.nodeToRelocate,o)}n.t&=-2}z&&Z(i.$),tt.length=0})(t,l,s,r.render())}catch(t){f(t)}l.t&=-5,u&&u.updateHost(t),l.t|=2,st(t,l)},st=(t,o)=>{if(!t["s-al"]){const l=o.k;512&o.t||(o.t|=512,t.classList.add("hydrated"),o.S(t),l||(e.documentElement.classList.add("hydrated"),setTimeout(()=>n.t|=2,999)))}},it=(t,e,n)=>{if(e.R){const o=Object.entries(e.R);if(o.forEach(([n,[o]])=>{31&o&&Object.defineProperty(t.prototype,n,{get(){return((t,e)=>i(t).M.get(e))(this,n)},set(t){((t,e,n,o)=>{const l=i(this),s=l.U,r=l.M.get(e),c=l.t;(n=((t,e)=>null!=t&&"object"!=typeof t&&"function"!=typeof t?4&e?"false"!==t&&(""===t||!!t):2&e?parseFloat(t):1&e?String(t):t:t)(n,o.R[e][0]))===r||8&c&&void 0!==r||(l.M.set(e,n),l.l&&2==(22&c)&&ot(s,l,o,!1))})(0,n,t,e)},configurable:!0,enumerable:!0})}),n){const n=new Map;t.prototype.attributeChangedCallback=function(t,e,o){const l=n.get(t);this[l]=(null!==o||"boolean"!=typeof this[l])&&o},t.observedAttributes=o.filter(([t,e])=>15&e[0]).map(([t,o])=>{const l=o[1]||t;return n.set(l,t),512&o[0]&&e.j.push([t,l]),l})}}return t},rt=(r,c={})=>{const $=[],m=c.exclude||[],p=e.head,y=t.customElements,d=p.querySelector("meta[charset]"),h=e.createElement("style");Object.assign(n,c),n.o=new URL(c.resourcesUrl||"/",e.baseURI).href,c.syncQueue&&(n.t|=4),r.forEach(t=>t[1].forEach(r=>{const c={t:r[0],g:r[1],R:r[2],L:r[3],j:[]};!o&&1&c.t&&(c.t|=8);const p=c.g;c.O=t[0],m.includes(p)||y.get(p)||($.push(p),y.define(p,it(class extends HTMLElement{constructor(t){super(t),(t=>{{const e={t:0,U:t};e.C=new Promise(t=>e.S=t),e.M=new Map,s.set(t,e)}})(t=this),1&c.t&&(o?t.attachShadow({mode:"open"}):"shadowRoot"in t||(t.shadowRoot=t))}connectedCallback(){((t,o)=>{if(0==(1&n.t)){const n=i(t);if(!(1&n.t)){let s;n.t|=1,s||(4&o.t||8&o.t)&&((t,n)=>{let o;o="",(n=t["s-cr"]=e.createComment(""))["s-cn"]=!0,t.insertBefore(n,t.firstChild)})(t),o.R&&Object.entries(o.R).forEach(([e,[n]])=>{if(31&n&&t.hasOwnProperty(e)){const n=t[e];delete t[e],t[e]=n}}),(async(t,e,n,o,s)=>{if(0==(256&e.t)){e.t|=256,(s=await(t=>__sc_import_mycomponent(`./${t.O}.entry.js`).then(e=>e[t.g.replace(/-/g,"_")],f))(n)).isProxied||(it(s,n,0),s.isProxied=!0),e.t|=8;try{new s(e)}catch(t){f(t)}if(e.t&=-9,!s.isStyleRegistered&&s.style){let t=s.style,e=x(n.g);8&n.t&&(t=await __sc_import_mycomponent("./p-549b16dd.js").then(n=>n.scopeCss(t,e,!1))),((t,e)=>{let n=a.get(t);l?(n=n||new CSSStyleSheet).replace(e):n=e,a.set(t,n)})(e,t),s.isStyleRegistered=!0}}ot(t,e,n,!0)})(t,n,o)}}})(this,c)}disconnectedCallback(){0==(1&n.t)&&u&&u.removeHost(this)}"s-init"(){const t=i(this);t.l&&st(this,t)}"s-hmr"(t){}forceUpdate(){ot(this,i(this),c,!1)}componentOnReady(){return i(this).C}},c,1)))})),h.innerHTML=$+"{visibility:hidden}.hydrated{visibility:inherit}",h.setAttribute("data-styles",""),p.insertBefore(h,d?d.nextSibling:p.firstChild)},ct=t=>i(t).U;export{S as a,rt as b,k as c,r as d,O as e,ct as f};