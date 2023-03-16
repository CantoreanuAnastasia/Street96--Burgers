(()=>{"use strict";var n={26:(n,r,e)=>{e.d(r,{Z:()=>m});var t=e(81),o=e.n(t),i=e(645),a=e.n(i),c=e(667),d=e.n(c),s=new URL(e(674),e.b),l=a()(o());l.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Poppins:wght@200;300;400;500;600;700;800&display=swap);"]);var p=d()(s);l.push([n.id,"/* this 'content' container acts like a body for this project since it was a requirment to append html elements via js to it */\r\n#content {\r\n    background-color: var(--background-color);\r\n    color: var(--main-font-color);\r\n    height: 100vh;\r\n    overflow: hidden;\r\n    font-family: 'Poppins', sans-serif;\r\n\r\n}\r\n\r\n#homepage,\r\n#socialmedia {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n#homepage-body {\r\n    background: url("+p+") bottom 4.5rem left no-repeat;\r\n}\r\n\r\n#navbar {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    border-bottom: 0.2rem solid var(--main-font-color);\r\n    padding-bottom: 2rem;\r\n}\r\n\r\n#nav-leftside {\r\n    display: flex;\r\n    flex-direction: row;\r\n    gap: 2rem;\r\n    padding-top: 2rem;\r\n    padding-left: 3rem;\r\n    align-items: flex-end;\r\n}\r\n\r\n#nav-rightside {\r\n    display: flex;\r\n    gap: 1.5rem;\r\n    padding-top: 2rem;\r\n    padding-right: 3rem;\r\n    align-items: center;\r\n}\r\n\r\n#homepage-body {\r\n    display: flex;\r\n    flex-direction: row;\r\n    height: fit-content;\r\n    padding-left: 3rem;\r\n    gap: 2rem;\r\n}\r\n\r\nh1 {\r\n    font-size: 3.6rem;\r\n    font-weight: 600;\r\n}\r\n\r\nimg {\r\n    width: 20px;\r\n    height: auto;\r\n}\r\n\r\n#socialmedia {\r\n    padding-top: 3rem;\r\n    gap: 1.7rem;\r\n}\r\n\r\n#video-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: fit-content;\r\n    border-left: 0.1rem solid var(--main-font-color);\r\n    height: 100vh;\r\n}\r\n\r\nvideo {\r\n    width: 100%;\r\n    height: auto;\r\n}\r\n\r\n#home:hover,\r\n#menu:hover,\r\n#our-story:hover,\r\n#contact:hover {\r\n    border-bottom: 0.2rem solid var(--second-font-color);\r\n    padding-bottom: 0.2rem;\r\n    transition: 0.1s;\r\n}\r\n\r\n#search,\r\n#user,\r\n#shopping-cart:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n#language-container {\r\n    display: flex;\r\n    flex-direction: row;\r\n    gap: 0.5rem;\r\n}\r\n\r\n#language-container>p {\r\n    font-size: 1.3rem;\r\n}\r\n\r\n#language-container>#language-en:hover,\r\n#language-ro:hover {\r\n    color: var(--second-font-color);\r\n    cursor: pointer;\r\n}\r\n\r\n#nav-leftside>p {\r\n    font-size: 1.5rem;\r\n}\r\n\r\n#home,\r\n#menu,\r\n#our-story,\r\n#contact {\r\n    font-weight: 600;\r\n    cursor: pointer;\r\n}\r\n\r\n#nav-leftside>#logo {\r\n    font-weight: 800;\r\n    font-size: 2rem;\r\n    color: var(--second-font-color);\r\n}\r\n\r\n#shopping-cart {\r\n    width: 1.5rem;\r\n}\r\n\r\n#socialmedia>img {\r\n    width: 2rem;\r\n}\r\n\r\n#logo1 {\r\n    padding-top: 16rem;\r\n    font-size: 13rem;\r\n    transform: rotate(-50deg);\r\n}\r\n\r\n#intro-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding-top: 1rem;\r\n    gap: 1.6rem;\r\n    align-items: center;\r\n}\r\n\r\n#intro {\r\n    font-size: 1.3rem;\r\n    font-weight: 300;\r\n}\r\n\r\n#discount-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 2rem;\r\n    padding-left: 15rem;\r\n    padding-top: 9rem;\r\n}\r\n\r\n#limited {\r\n    padding-top: 6rem;\r\n    font-size: 1.5rem;\r\n    font-weight: 800;\r\n}\r\n\r\n#code {\r\n    color: var(--discount-color);\r\n    font-size: 1.3rem;\r\n    font-weight: 800;\r\n    background-color: rgb(255, 255, 255);\r\n    padding: 2rem;\r\n    border-radius: 1rem;\r\n    cursor: pointer;\r\n}\r\n\r\n#discount-info {\r\n    font-size: 1rem;\r\n    padding-top: 4rem;\r\n    font-family: 'Permanent Marker', cursive;\r\n}\r\n\r\n#location {\r\n    width: fit-content;\r\n    height: fit-content;\r\n}\r\n\r\n#arrow {\r\n    position: absolute;\r\n    top: 40%;\r\n    left: 20%;\r\n    width: 24rem;\r\n    height: auto;\r\n}",""]);const m=l},434:(n,r,e)=>{e.d(r,{Z:()=>c});var t=e(81),o=e.n(t),i=e(645),a=e.n(i)()(o());a.push([n.id,"/* http://meyerweb.com/eric/tools/css/reset/ \r\n   v2.0 | 20110126\r\n   License: none (public domain)\r\n*/\r\n\r\nhtml,\r\nbody,\r\ndiv,\r\nspan,\r\napplet,\r\nobject,\r\niframe,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\np,\r\nblockquote,\r\npre,\r\na,\r\nabbr,\r\nacronym,\r\naddress,\r\nbig,\r\ncite,\r\ncode,\r\ndel,\r\ndfn,\r\nem,\r\nimg,\r\nins,\r\nkbd,\r\nq,\r\ns,\r\nsamp,\r\nsmall,\r\nstrike,\r\nstrong,\r\nsub,\r\nsup,\r\ntt,\r\nvar,\r\nb,\r\nu,\r\ni,\r\ncenter,\r\ndl,\r\ndt,\r\ndd,\r\nol,\r\nul,\r\nli,\r\nfieldset,\r\nform,\r\nlabel,\r\nlegend,\r\ntable,\r\ncaption,\r\ntbody,\r\ntfoot,\r\nthead,\r\ntr,\r\nth,\r\ntd,\r\narticle,\r\naside,\r\ncanvas,\r\ndetails,\r\nembed,\r\nfigure,\r\nfigcaption,\r\nfooter,\r\nheader,\r\nhgroup,\r\nmenu,\r\nnav,\r\noutput,\r\nruby,\r\nsection,\r\nsummary,\r\ntime,\r\nmark,\r\naudio,\r\nvideo {\r\n    margin: 0;\r\n    padding: 0;\r\n    border: 0;\r\n    font-size: 100%;\r\n    font: inherit;\r\n    vertical-align: baseline;\r\n}\r\n\r\n/* HTML5 display-role reset for older browsers */\r\narticle,\r\naside,\r\ndetails,\r\nfigcaption,\r\nfigure,\r\nfooter,\r\nheader,\r\nhgroup,\r\nmenu,\r\nnav,\r\nsection {\r\n    display: block;\r\n}\r\n\r\nbody {\r\n    line-height: 1;\r\n}\r\n\r\nol,\r\nul {\r\n    list-style: none;\r\n}\r\n\r\nblockquote,\r\nq {\r\n    quotes: none;\r\n}\r\n\r\nblockquote:before,\r\nblockquote:after,\r\nq:before,\r\nq:after {\r\n    content: '';\r\n    content: none;\r\n}\r\n\r\ntable {\r\n    border-collapse: collapse;\r\n    border-spacing: 0;\r\n}",""]);const c=a},604:(n,r,e)=>{e.d(r,{Z:()=>c});var t=e(81),o=e.n(t),i=e(645),a=e.n(i)()(o());a.push([n.id,":root {\r\n    --main-font-color: #ffffff;\r\n    --second-font-color: #FCBA01;\r\n    --background-color: #000000;\r\n    --discount-color: #ea5858;\r\n}",""]);const c=a},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",t=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),t&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),t&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,t,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(t)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(a[d]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);t&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),r.push(l))}},r}},667:n=>{n.exports=function(n,r){return r||(r={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),r.hash&&(n+=r.hash),/["'() \t\n]|(%20)/.test(n)||r.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var i={},a=[],c=0;c<n.length;c++){var d=n[c],s=t.base?d[0]+t.base:d[0],l=i[s]||0,p="".concat(s," ").concat(l);i[s]=l+1;var m=e(p),u={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==m)r[m].references++,r[m].updater(u);else{var f=o(u,t);t.byIndex=c,r.splice(c,0,{identifier:p,updater:f,references:1})}a.push(p)}return a}function o(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,o){var i=t(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=e(i[a]);r[c].references--}for(var d=t(n,o),s=0;s<i.length;s++){var l=e(i[s]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}i=d}}},569:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),r.styleTagTransform(t,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}},674:(n,r,e)=>{n.exports=e.p+"home .png"}},r={};function e(t){var o=r[t];if(void 0!==o)return o.exports;var i=r[t]={id:t,exports:{}};return n[t](i,i.exports,e),i.exports}e.m=n,e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var t in r)e.o(r,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var r=e.g.document;if(!n&&r&&(r.currentScript&&(n=r.currentScript.src),!n)){var t=r.getElementsByTagName("script");t.length&&(n=t[t.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),e.b=document.baseURI||self.location.href,e.nc=void 0,(()=>{var n=e(379),r=e.n(n),t=e(795),o=e.n(t),i=e(569),a=e.n(i),c=e(565),d=e.n(c),s=e(216),l=e.n(s),p=e(589),m=e.n(p),u=e(434),f={};f.styleTagTransform=m(),f.setAttributes=d(),f.insert=a().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=l(),r()(u.Z,f),u.Z&&u.Z.locals&&u.Z.locals;var h=e(604),g={};g.styleTagTransform=m(),g.setAttributes=d(),g.insert=a().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=l(),r()(h.Z,g),h.Z&&h.Z.locals&&h.Z.locals;var v=e(26),b={};b.styleTagTransform=m(),b.setAttributes=d(),b.insert=a().bind(null,"head"),b.domAPI=o(),b.insertStyleElement=l(),r()(v.Z,b),v.Z&&v.Z.locals&&v.Z.locals;const y=e.p+"search .svg",x=e.p+"user .svg",w=e.p+"shopping-cart .svg",E=e.p+"twitter .svg",C=e.p+"facebook .svg",T=e.p+"instagram .svg",k=e.p+"tik-tok .svg",S=e.p+"videos/promo-video.mp4",Z=e.p+"location .png",A=e.p+"arrow .svg";!function(){const n=document.querySelector("#content"),r=document.createElement("div");r.id="homepage",n.appendChild(r);const e=document.createElement("div");e.id="navbar",r.appendChild(e);const t=document.createElement("div");t.id="nav-leftside",e.appendChild(t);const o=document.createElement("p");o.id="logo",o.innerText="Street 96' Burgers",t.appendChild(o);const i=document.createElement("p");i.id="home",i.innerText="Home",t.appendChild(i);const a=document.createElement("p");a.id="menu",a.innerText="Menu",t.appendChild(a);const c=document.createElement("p");c.id="our-story",c.innerText="Our story",t.appendChild(c);const d=document.createElement("p");d.id="contact",d.innerText="Contact",t.appendChild(d);const s=document.createElement("div");s.id="nav-rightside",e.appendChild(s);const l=document.createElement("img");l.id="search",l.src=y,s.appendChild(l);const p=document.createElement("img");p.id="user",p.src=x,s.appendChild(p);const m=document.createElement("img");m.id="shopping-cart",m.src=w,s.appendChild(m);const u=document.createElement("div");u.id="homepage-body",r.appendChild(u);const f=document.createElement("div");f.id="socialmedia",u.appendChild(f);const h=document.createElement("img");h.id="twitter-icon",h.src=E,f.appendChild(h);const g=document.createElement("img");g.id="facebook-icon",g.src=C,f.appendChild(g);const v=document.createElement("img");v.id="instagram-icon",v.src=T,f.appendChild(v);const b=document.createElement("img");b.id="tiktok-icon",b.src=k,f.appendChild(b);const j=document.createElement("div");j.id="logo-container",u.appendChild(j);const M=document.createElement("div");M.id="intro-container",u.appendChild(M);const q=document.createElement("h1");q.innerText="Welcome to our brand new burger restaurant!",M.appendChild(q);const P=document.createElement("p");P.id="intro",P.innerText="We are thrilled to have you here and can't wait to serve you some of the best burgers in town. Our menu is packed with delicious options, from classic burgers and loaded fries to vegetarian and gluten-free options. We take pride in using only the freshest ingredients in our dishes, so you can enjoy a truly mouth-watering experience. Come on in and make yourself at home - we're excited to have you join our burger-loving community!",M.appendChild(P);const z=document.createElement("img");z.id="arrow",z.src=A,M.appendChild(z);const I=document.createElement("div");I.id="discount-container",M.appendChild(I);const O=document.createElement("p");O.id="limited",O.innerText="🔥Limited time offer!🔥",I.appendChild(O);const L=document.createElement("p");L.id="code",L.innerText="#JUSTOPENED70",I.appendChild(L);const N=document.createElement("p");N.id="discount-info",N.innerText="Add this code to your shopping-cart before your first purchase for 70% discount on every burger.🤤",I.appendChild(N);const R=document.createElement("div");R.id="video-container",u.appendChild(R);const U=document.createElement("video");U.id="video",U.volume=.1,U.src=S,U.setAttribute("controls","controls"),U.setAttribute("muted","muted"),R.appendChild(U);const F=document.createElement("img");F.id="location",F.src=Z,R.appendChild(F);const H=document.createElement("div");H.id="language-container",s.appendChild(H);const $=document.createElement("p");$.id="language-en",$.innerText="EN",H.appendChild($);const _=document.createElement("p");_.id="language-bar",_.innerText="|",H.appendChild(_);const B=document.createElement("p");B.id="language-ro",B.innerText="RO",H.appendChild(B)}()})()})();