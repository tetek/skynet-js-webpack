if(!self.define){let e,t={};const s=(s,i)=>(s=new URL(s+".js",i).href,t[s]||new Promise((t=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=t,document.head.appendChild(e)}else e=s,importScripts(s),t()})).then((()=>{let e=t[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(t[r])return;let o={};const d=e=>s(e,r),c={module:{uri:r},exports:o,require:d};t[r]=Promise.all(i.map((e=>c[e]||d(e)))).then((e=>(n(...e),o)))}}define(["./workbox-7d6a3f4d"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"index.html",revision:"38a22d5e7c3d5d386bb5a894c872fbbb"},{url:"skynet.js",revision:"dbe96ebc8758915a282d5dce3c184b35"},{url:"skynet.js.LICENSE.txt",revision:"7da11dff125bd1573054b04e8cd319b5"}],{})}));