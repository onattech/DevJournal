"use strict";(self.webpackChunkdev_journal=self.webpackChunkdev_journal||[]).push([[4889],{7195:(n,e,i)=>{i.r(e),i.d(e,{Tailwinded:()=>r,assets:()=>o,contentTitle:()=>d,default:()=>p,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var s=i(3010),t=i(2803);const l={sidebar_position:2,title:"Tailwind CSS Setup"},d="Setting up Tailwind CSS with Docusaurus",a={unversionedId:"tutorial-docusaurus/tailwindcss",id:"tutorial-docusaurus/tailwindcss",title:"Tailwind CSS Setup",description:"Installing Tailwind CSS adds only 575 bytes to the bundle size!",source:"@site/docs/tutorial-docusaurus/tailwindcss.mdx",sourceDirName:"tutorial-docusaurus",slug:"/tutorial-docusaurus/tailwindcss",permalink:"/docs/tutorial-docusaurus/tailwindcss",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Tailwind CSS Setup"},sidebar:"tutorialSidebar",previous:{title:"Algolia setup",permalink:"/docs/tutorial-docusaurus/algolia-setup"},next:{title:"Custom Fonts",permalink:"/docs/tutorial-docusaurus/custom-fonts"}},o={},c=[{value:"1. Install dependencies",id:"1-install-dependencies",level:2},{value:"2. Add Tailwind CSS config file",id:"2-add-tailwind-css-config-file",level:2},{value:"3. Add Tailwind CSS plugin to docusaurus.config.js",id:"3-add-tailwind-css-plugin-to-docusaurusconfigjs",level:2},{value:"4. Update global css file to load Tailwind CSS",id:"4-update-global-css-file-to-load-tailwind-css",level:2},{value:"5. Testing",id:"5-testing",level:2},{value:"Final",id:"final",level:2},{value:"Custom component",id:"custom-component",level:4},{value:"Plain html",id:"plain-html",level:4}];function r(){const n=Object.assign({div:"div"},(0,t.ah)());return(0,s.jsx)(n.div,{className:"text-red-500 dark:text-yellow-500",children:"In light, I'm red, a vibrant sight,"})}function u(n){const e=Object.assign({h1:"h1",admonition:"admonition",p:"p",h2:"h2",pre:"pre",code:"code",h4:"h4"},(0,t.ah)(),n.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"setting-up-tailwind-css-with-docusaurus",children:"Setting up Tailwind CSS with Docusaurus"}),"\n",(0,s.jsx)(e.admonition,{type:"tip",children:(0,s.jsx)(e.p,{children:"Installing Tailwind CSS adds only 575 bytes to the bundle size!"})}),"\n",(0,s.jsx)(e.h2,{id:"1-install-dependencies",children:"1. Install dependencies"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"pnpm add tailwindcss postcss autoprefixer\n"})}),"\n",(0,s.jsx)(e.h2,{id:"2-add-tailwind-css-config-file",children:"2. Add Tailwind CSS config file"}),"\n",(0,s.jsx)(e.p,{children:"Add the following config file to the root directory:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",metastring:'title="./tailwind.config.js"',children:'/** @type {import(\'tailwindcss\').Config} */\nmodule.exports = {\n    content: ["./src/**/*.{js,jsx,ts,tsx,md,mdx}", "./docs/**/*.{md,mdx}"],\n    theme: { extend: {} },\n    plugins: [],\n    darkMode: ["class", \'[data-theme="dark"]\'], // Support dark mode\n    corePlugins: { preflight: false }, // Prevent Docusaurus defaults to be overwritten\n    blocklist: ["container"], // Disable built-in classes to not interfere with Docusaurus classes\n}\n'})}),"\n",(0,s.jsx)(e.h2,{id:"3-add-tailwind-css-plugin-to-docusaurusconfigjs",children:"3. Add Tailwind CSS plugin to docusaurus.config.js"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",metastring:'title="./docusaurus.config.js"',children:'    //...\n\n    plugins: [\n        async function myPlugin(context, options) {\n            return {\n                name: "docusaurus-tailwindcss",\n                configurePostCss(postcssOptions) {\n                    // Appends TailwindCSS and AutoPrefixer.\n                    postcssOptions.plugins.push(require("tailwindcss"))\n                    postcssOptions.plugins.push(require("autoprefixer"))\n                    return postcssOptions\n                },\n            }\n        },\n    ],\n\n    //...\n'})}),"\n",(0,s.jsx)(e.h2,{id:"4-update-global-css-file-to-load-tailwind-css",children:"4. Update global css file to load Tailwind CSS"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-css",metastring:'{1-3} title="./src/css/custom.css"',children:"@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n/**\n * Any CSS included here will be global. The classic template\n * bundles Infima by default. Infima is a CSS framework designed to\n * work well for content-centric websites.\n */\n\n/* ... */\n"})}),"\n",(0,s.jsx)(e.h2,{id:"5-testing",children:"5. Testing"}),"\n",(0,s.jsx)(e.p,{children:"Make a new mdx file add the contents below"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-md",children:'# Testing Tailwind\n\nTry both light and dark mode.\n\n#### Custom component\n\nexport function Tailwinded() {\nreturn (\n\n<div className="text-red-500 dark:text-yellow-500">In light, I\'m red, a vibrant sight,</div>) }\n\n<Tailwinded />\n\n#### Plain html\n\n<div className="text-red-500 dark:text-yellow-500">In darkness, yellow, Tailwind set right!</div>\n'})}),"\n",(0,s.jsx)(e.h2,{id:"final",children:"Final"}),"\n",(0,s.jsx)(e.p,{children:"Try both light and dark mode."}),"\n",(0,s.jsx)(e.h4,{id:"custom-component",children:"Custom component"}),"\n","\n",(0,s.jsx)(r,{}),"\n",(0,s.jsx)(e.h4,{id:"plain-html",children:"Plain html"}),"\n",(0,s.jsx)("div",{className:"text-red-500 dark:text-yellow-500",children:"In darkness, yellow, Tailwind set right!"})]})}const p=function(n={}){const{wrapper:e}=Object.assign({},(0,t.ah)(),n.components);return e?(0,s.jsx)(e,Object.assign({},n,{children:(0,s.jsx)(u,n)})):u(n)}},2803:(n,e,i)=>{i.d(e,{Zo:()=>a,ah:()=>l});var s=i(5170);const t=s.createContext({});function l(n){const e=s.useContext(t);return s.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const d={};function a({components:n,children:e,disableParentContext:i}){let a;return a=i?"function"==typeof n?n({}):n||d:l(n),s.createElement(t.Provider,{value:a},e)}}}]);