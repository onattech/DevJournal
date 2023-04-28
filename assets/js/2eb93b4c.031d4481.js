"use strict";(self.webpackChunkdev_journal=self.webpackChunkdev_journal||[]).push([[661],{9613:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>m});var o=n(9496);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,o,i=function(t,e){if(null==t)return{};var n,o,i={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var u=o.createContext({}),l=function(t){var e=o.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},c=function(t){var e=l(t.components);return o.createElement(u.Provider,{value:e},t.children)},p="mdxType",h={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},d=o.forwardRef((function(t,e){var n=t.components,i=t.mdxType,r=t.originalType,u=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),p=l(n),d=i,m=p["".concat(u,".").concat(d)]||p[d]||h[d]||r;return n?o.createElement(m,a(a({ref:e},c),{},{components:n})):o.createElement(m,a({ref:e},c))}));function m(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=n.length,a=new Array(r);a[0]=d;var s={};for(var u in e)hasOwnProperty.call(e,u)&&(s[u]=e[u]);s.originalType=t,s[p]="string"==typeof t?t:i,a[1]=s;for(var l=2;l<r;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9535:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var o=n(1163),i=(n(9496),n(9613));const r={sidebar_position:2,title:"CI with Github Actions"},a="Continuous integration with Github Actions",s={unversionedId:"tutorial-docusaurus/ci-with-github-actions",id:"tutorial-docusaurus/ci-with-github-actions",title:"CI with Github Actions",description:"Below is a workflow YAML to deploy a Docusaurus site with pnpm to GitHub Pages via GitHub Actions. An action to deploy will be triggered on each push to the main branch.",source:"@site/docs/tutorial-docusaurus/ci-with-github-actions.md",sourceDirName:"tutorial-docusaurus",slug:"/tutorial-docusaurus/ci-with-github-actions",permalink:"/docs/tutorial-docusaurus/ci-with-github-actions",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"CI with Github Actions"},sidebar:"tutorialSidebar",previous:{title:"Algolia setup",permalink:"/docs/tutorial-docusaurus/algolia-setup"},next:{title:"Sticky media",permalink:"/docs/tutorial-docusaurus/sticky-media"}},u={},l=[{value:"Steps to follow",id:"steps-to-follow",level:3}],c={toc:l},p="wrapper";function h(t){let{components:e,...n}=t;return(0,i.kt)(p,(0,o.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"continuous-integration-with-github-actions"},"Continuous integration with Github Actions"),(0,i.kt)("p",null,"Below is a workflow YAML to deploy a Docusaurus site with pnpm to GitHub Pages via GitHub Actions. An action to deploy will be triggered on each push to the main branch."),(0,i.kt)("h3",{id:"steps-to-follow"},"Steps to follow"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Add the YAML file to the project directory."),(0,i.kt)("li",{parentName:"ol"},"Update ",(0,i.kt)("inlineCode",{parentName:"li"},"user_name")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"user_email")," with your Github username and email."),(0,i.kt)("li",{parentName:"ol"},"Setup a token on Github."),(0,i.kt)("li",{parentName:"ol"},"Make a push to the main branch.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'{30,38,39} title="./.github/workflows/deploy.yml"',"{30,38,39}":!0,title:'"./.github/workflows/deploy.yml"'},"name: Deploy to GitHub Pages\n\non:\n    push:\n        branches:\n            - main\n        # Review gh actions docs if you want to further define triggers, paths, etc\n        # https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#on\n#\njobs:\n    deploy:\n        name: Deploy to GitHub Pages\n        runs-on: ubuntu-latest\n        steps:\n            - uses: actions/checkout@v3\n            - uses: pnpm/action-setup@v2.2.4\n              with:\n                  version: 7\n\n            - name: Install dependencies\n              run: pnpm install\n            - name: Build website\n              run: pnpm run build\n\n            # Popular action to deploy to GitHub Pages:\n            # Docs: https://github.com/peaceiris/actions-gh-pages#%EF%B8%8F-docusaurus\n            - name: Deploy to GitHub Pages\n              uses: peaceiris/actions-gh-pages@v3\n              with:\n                  github_token: ${{ secrets.GITHUB_TOKEN }}\n                  # Build output to publish to the `gh-pages` branch:\n                  publish_dir: ./build\n                  # The following lines assign commit authorship to the official\n                  # GH-Actions bot for deploys to `gh-pages` branch:\n                  # https://github.com/actions/checkout/issues/13#issuecomment-724415212\n                  # The GH actions bot is used by default if you didn't specify the two fields.\n                  # You can swap them out with your own user credentials.\n                  user_name: github_username\n                  user_email: github_email\n# Give permission to workflow => https://stackoverflow.com/a/75308228\n")))}h.isMDXComponent=!0}}]);