"use strict";(self.webpackChunkdev_journal=self.webpackChunkdev_journal||[]).push([[7953],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=o,m=p["".concat(l,".").concat(h)]||p[h]||b[h]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1862:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>b,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(1163),o=(n(9496),n(9613));const a={sidebar_position:1,title:"Github Actions env variables"},i="Github Actions environment variables",s={unversionedId:"tutorial-devops/github-actions-env-variables",id:"tutorial-devops/github-actions-env-variables",title:"Github Actions env variables",description:"Use the actions yml below to see all available environment variables on Github Actions.",source:"@site/docs/tutorial-devops/github-actions-env-variables.md",sourceDirName:"tutorial-devops",slug:"/tutorial-devops/github-actions-env-variables",permalink:"/docs/tutorial-devops/github-actions-env-variables",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Github Actions env variables"},sidebar:"tutorialSidebar",previous:{title:"Add git commit hash to website111",permalink:"/docs/tutorial-devops/add-commit-hash-to-website"},next:{title:"Tutorial - Golang",permalink:"/docs/category/tutorial---golang"}},l={},c=[{value:"YAML",id:"yaml",level:2},{value:"Example output",id:"example-output",level:2}],u={toc:c},p="wrapper";function b(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"github-actions-environment-variables"},"Github Actions environment variables"),(0,o.kt)("p",null,"Use the actions yml below to see all available environment variables on Github Actions."),(0,o.kt)("h2",{id:"yaml"},"YAML"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".github/workflows/deploy.yml"',title:'".github/workflows/deploy.yml"'},'name: Github Actions playground\n\non:\n    push:\n        branches:\n            - main\n\njobs:\n    deploy:\n        name: Show GitHub context\n        runs-on: ubuntu-latest\n        steps:\n            - name: Show GitHub context\n              env:\n                  GITHUB_CONTEXT: ${{ toJson(github) }}\n              run: echo "$GITHUB_CONTEXT"\n')),(0,o.kt)("h2",{id:"example-output"},"Example output"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "token": "***",\n  "job": "deploy",\n  "ref": "refs/heads/main",\n  "sha": "34067a88f314ff095f622ca1aec4a6f7d002189d",\n  "repository": "onattech/github-actions",\n  "repository_owner": "onattech",\n  "repository_owner_id": "53896679",\n  "repositoryUrl": "git://github.com/onattech/github-actions.git",\n  "run_id": "4982257286",\n  "run_number": "2",\n  "retention_days": "90",\n  "run_attempt": "1",\n  "artifact_cache_size_limit": "10",\n  "repository_visibility": "public",\n  "repository_id": "616223117",\n  "actor_id": "6795969",\n  "actor": "onattech",\n  "triggering_actor": "onattech",\n  "workflow": "Deploy to GitHub Pages",\n  "head_ref": "",\n  "base_ref": "",\n  "event_name": "push",\n  "event": {\n    "after": "08067a88f314ff095f622ca1aec4a6f7d002189d",\n    "base_ref": null,\n    "before": "fbea252f5970020de5424be4ac02fc7b2bced640",\n    "commits": [\n      {\n        "author": {\n          "email": "52495969+onattech@users.noreply.github.com",\n          "name": "Onat",\n          "username": "onattech"\n        },\n      "gravatar_id": "",\n      "html_url": "https://github.com/onattech",\n      "id": 52595969,\n      "login": "onattech",\n      "node_id": "MVQ6VXNlcjUzODk1OTY5",\n      "organizations_url": "https://api.github.com/users/onattech/orgs",\n      "received_events_url": "https://api.github.com/users/onattech/received_events",\n      "repos_url": "https://api.github.com/users/onattech/repos",\n      "site_admin": false,\n      "starred_url": "https://api.github.com/users/onattech/starred{/owner}{/repo}",\n      "subscriptions_url": "https://api.github.com/users/onattech/subscriptions",\n      "type": "User",\n      "url": "https://api.github.com/users/onattech"\n    }\n  },\n  "server_url": "https://github.com",\n  "api_url": "https://api.github.com",\n  "graphql_url": "https://api.github.com/graphql",\n  "ref_name": "main",\n  "ref_protected": false,\n  "ref_type": "branch",\n  "secret_source": "Actions",\n  "workflow_ref": "onattech/github-actions/.github/workflows/deploy.yml@refs/heads/main",\n  "workflow_sha": "08167a88f314ff095f622ca1aec4a6f7d002189d",\n  "workspace": "/home/runner/work/github-actions/github-actions",\n  "action": "__run"\n}\n')))}b.isMDXComponent=!0}}]);