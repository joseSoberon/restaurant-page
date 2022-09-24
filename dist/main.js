(()=>{"use strict";var e={150:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(81),i=n.n(r),a=n(645),o=n.n(a)()(i());o.push([e.id,".inicio {\r\n    padding: 2rem;\r\n    color: white;\r\n    background-color: rgba(100, 100, 100, 0.8);\r\n    width: 50%;\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 1fr);\r\n    gap: 4rem;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border-radius: 10px;\r\n}\r\n\r\n.image {\r\n    width: 420px;\r\n    justify-self: center;\r\n    align-self: center;\r\n}\r\n\r\nh2 {\r\n    font-size: 2rem;\r\n    font-weight: 700;\r\n}\r\n\r\nh2 + p {\r\n    margin-top: 1rem;\r\n    text-align: justify;\r\n}\r\n",""]);const c=o},83:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(81),i=n.n(r),a=n(645),o=n.n(a)()(i());o.push([e.id,".menu {\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.menu-item {\r\n    margin: 1rem 1.5rem;\r\n    background-color: #95CD41;\r\n    padding: 1.5rem;\r\n    width: 275px;\r\n    overflow: hidden;\r\n    border-radius: 10px;\r\n}\r\n\r\n.item-description {\r\n    text-align: center;\r\n}\r\n\r\n.item-image {\r\n    margin-top: 1rem;\r\n}\r\n\r\n.item-image > img {\r\n    display: block;\r\n    width: 100%;\r\n}\r\n",""]);const c=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,i,a){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(o[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&o[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},o=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var u=n(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var f=i(m,r);r.byIndex=c,t.splice(c,0,{identifier:p,updater:f,references:1})}o.push(p)}return o}function i(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,i){var a=r(e=e||[],i=i||{});return function(e){e=e||[];for(var o=0;o<a.length;o++){var c=n(a[o]);t[c].references--}for(var s=r(e,i),d=0;d<a.length;d++){var l=n(a[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,i&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),i=n.n(r),a=n(569),o=n.n(a),c=n(565),s=n.n(c),d=n(216),l=n.n(d),p=n(589),u=n.n(p),m=n(150),f={};f.styleTagTransform=u(),f.setAttributes=s(),f.insert=o().bind(null,"head"),f.domAPI=i(),f.insertStyleElement=l(),t()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const h=n.p+"9ab768cd222e3a8a70a4.jpg";function g(){let e=v("inicio"),t=v("description"),n=v("image"),r=function(e){let t=document.createElement("h2");return t.textContent="Los mejores tacos de tu esquina",t}();t.appendChild(r);let i=function(e){let t=document.createElement("p");return t.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati id, laudantium fugit nobis ad explicabo quo sapiente est aut molestiae iusto ipsam placeat odit. Aliquid quaerat deserunt illum officiis sequi!",t}();t.appendChild(i);let a=new Image;return a.src=h,a.classList.add("image"),n.appendChild(a),e.appendChild(t),e.appendChild(n),e}function v(e){let t=document.createElement("div");return t.classList.add(e),t}var b=n(83),C={};C.styleTagTransform=u(),C.setAttributes=s(),C.insert=o().bind(null,"head"),C.domAPI=i(),C.insertStyleElement=l(),t()(b.Z,C),b.Z&&b.Z.locals&&b.Z.locals;const y=n.p+"d699ce873321165d5ca3.jpg",x=n.p+"09719ff84bc7f01215a3.jpg",E=n.p+"f67ceadf9f405fb3bc1d.jpg",w=n.p+"34a11b88a89d8f8a2e72.jpg",j=n.p+"6c06dfb9c8bcecde10a0.jpg",T=n.p+"4228fb98a0444b518052.jpg";function S(e,t){let n=document.createElement("div");return n.classList.add("menu-item"),n.appendChild(e),n.appendChild(t),n}function L(e,t){let n=document.createElement("div");n.classList.add("item-description");let r=document.createElement("h2");r.textContent=e;let i=document.createElement("p");return i.textContent=t,n.appendChild(r),n.appendChild(i),n}function q(e){let t=document.createElement("div");t.classList.add("item-image");let n=new Image;return n.src=e,t.appendChild(n),t}let A=document.querySelector("main");A.appendChild(g()),console.log(A.firstElementChild.className),document.querySelectorAll("li").forEach((e=>{e.addEventListener("click",(()=>{"home"==e.id&&"inicio"!=A.firstElementChild.className?(A.removeChild(A.firstElementChild),A.appendChild(g())):"menu"==e.id&&"menu"!=A.firstElementChild.className?(A.removeChild(A.firstElementChild),A.appendChild(function(){let e=document.createElement("div");e.classList.add("menu");let t="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, placeat, at reprehenderit ex repellendus soluta quae nobis quia facilis laboriosam dignissimos quas sit ratione asperiores, aliquid aut vitae assumenda iste?",n=S(L("Tacos de Pastor",t),q(w)),r=S(L("Tacos de Bistec",t),q(x)),i=S(L("Tacos de Suadero",t),q(j)),a=S(L("Volcanes",t),q(E)),o=S(L("Alambre",t),q(y)),c=S(L("Volcan",t),q(T));return e.appendChild(n),e.appendChild(r),e.appendChild(i),e.appendChild(a),e.appendChild(o),e.appendChild(c),e}())):"contact"==e.id&&"menu"!=A.firstElementChild.className&&(A.removeChild(mainfirstElementChild),A.appendChild(createContact()))}))}))})()})();