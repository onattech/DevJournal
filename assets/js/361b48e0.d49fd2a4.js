"use strict";(self.webpackChunkdev_journal=self.webpackChunkdev_journal||[]).push([[9681],{9613:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>g});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),d=o,g=p["".concat(c,".").concat(d)]||p[d]||m[d]||a;return r?n.createElement(g,i(i({ref:t},l),{},{components:r})):n.createElement(g,i({ref:t},l))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6819:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var n=r(1163),o=(r(9496),r(9613));const a={sidebar_position:3,title:"Images"},i="Importing images in React components",s={unversionedId:"tutorial-docusaurus/images",id:"tutorial-docusaurus/images",title:"Images",description:"Files in the static directory don't need to be imported in order to be used in a React component.",source:"@site/docs/tutorial-docusaurus/images.md",sourceDirName:"tutorial-docusaurus",slug:"/tutorial-docusaurus/images",permalink:"/docs/tutorial-docusaurus/images",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Images"},sidebar:"tutorialSidebar",previous:{title:"Environment variables",permalink:"/docs/tutorial-docusaurus/environment-variables"},next:{title:"Sticky media",permalink:"/docs/tutorial-docusaurus/sticky-media"}},c={},u=[{value:"Usage",id:"usage",level:3}],l={toc:u},p="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"importing-images-in-react-components"},"Importing images in React components"),(0,o.kt)("p",null,"Files in the ",(0,o.kt)("inlineCode",{parentName:"p"},"static")," directory don't need to be imported in order to be used in a React component.\nAssuming there is an image at ",(0,o.kt)("inlineCode",{parentName:"p"},"/static/img/myImage.png"),". It can be consumed as:"),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'<img src="/img/myImage.png" alt="myImage" />\n')),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Also works for .svg images")))}m.isMDXComponent=!0}}]);