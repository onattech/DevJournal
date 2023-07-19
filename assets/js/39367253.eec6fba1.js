"use strict";(self.webpackChunkdev_journal=self.webpackChunkdev_journal||[]).push([[7953],{2491:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var o=n(3010),i=n(2803);const a={sidebar_position:1,title:"Github Actions env variables"},s="Github Actions environment variables",r={unversionedId:"tutorial-devops/github-actions-env-variables",id:"tutorial-devops/github-actions-env-variables",title:"Github Actions env variables",description:"Use the actions yml below to see all available environment variables on Github Actions.",source:"@site/docs/tutorial-devops/github-actions-env-variables.md",sourceDirName:"tutorial-devops",slug:"/tutorial-devops/github-actions-env-variables",permalink:"/docs/tutorial-devops/github-actions-env-variables",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Github Actions env variables"},sidebar:"tutorialSidebar",previous:{title:"Add git commit hash to website",permalink:"/docs/tutorial-devops/add-commit-hash-to-website"},next:{title:"Makefile for project commands",permalink:"/docs/tutorial-devops/makefile"}},c={},l=[{value:"YAML",id:"yaml",level:2},{value:"Example output",id:"example-output",level:2}];function u(e){const t=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code"},(0,i.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"github-actions-environment-variables",children:"Github Actions environment variables"}),"\n",(0,o.jsx)(t.p,{children:"Use the actions yml below to see all available environment variables on Github Actions."}),"\n",(0,o.jsx)(t.h2,{id:"yaml",children:"YAML"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-yaml",metastring:'title=".github/workflows/deploy.yml"',children:'name: Github Actions playground\n\non:\n    push:\n        branches:\n            - main\n\njobs:\n    deploy:\n        name: Show GitHub context\n        runs-on: ubuntu-latest\n        steps:\n            - name: Show GitHub context\n              env:\n                  GITHUB_CONTEXT: ${{ toJson(github) }}\n              run: echo "$GITHUB_CONTEXT"\n'})}),"\n",(0,o.jsx)(t.h2,{id:"example-output",children:"Example output"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-json",children:'{\n  "token": "***",\n  "job": "deploy",\n  "ref": "refs/heads/main",\n  "sha": "34067a88f314ff095f622ca1aec4a6f7d002189d",\n  "repository": "onattech/github-actions",\n  "repository_owner": "onattech",\n  "repository_owner_id": "53896679",\n  "repositoryUrl": "git://github.com/onattech/github-actions.git",\n  "run_id": "4982257286",\n  "run_number": "2",\n  "retention_days": "90",\n  "run_attempt": "1",\n  "artifact_cache_size_limit": "10",\n  "repository_visibility": "public",\n  "repository_id": "616223117",\n  "actor_id": "6795969",\n  "actor": "onattech",\n  "triggering_actor": "onattech",\n  "workflow": "Deploy to GitHub Pages",\n  "head_ref": "",\n  "base_ref": "",\n  "event_name": "push",\n  "event": {\n    "after": "08067a88f314ff095f622ca1aec4a6f7d002189d",\n    "base_ref": null,\n    "before": "fbea252f5970020de5424be4ac02fc7b2bced640",\n    "commits": [\n      {\n        "author": {\n          "email": "52495969+onattech@users.noreply.github.com",\n          "name": "Onat",\n          "username": "onattech"\n        },\n      "gravatar_id": "",\n      "html_url": "https://github.com/onattech",\n      "id": 52595969,\n      "login": "onattech",\n      "node_id": "MVQ6VXNlcjUzODk1OTY5",\n      "organizations_url": "https://api.github.com/users/onattech/orgs",\n      "received_events_url": "https://api.github.com/users/onattech/received_events",\n      "repos_url": "https://api.github.com/users/onattech/repos",\n      "site_admin": false,\n      "starred_url": "https://api.github.com/users/onattech/starred{/owner}{/repo}",\n      "subscriptions_url": "https://api.github.com/users/onattech/subscriptions",\n      "type": "User",\n      "url": "https://api.github.com/users/onattech"\n    }\n  },\n  "server_url": "https://github.com",\n  "api_url": "https://api.github.com",\n  "graphql_url": "https://api.github.com/graphql",\n  "ref_name": "main",\n  "ref_protected": false,\n  "ref_type": "branch",\n  "secret_source": "Actions",\n  "workflow_ref": "onattech/github-actions/.github/workflows/deploy.yml@refs/heads/main",\n  "workflow_sha": "08167a88f314ff095f622ca1aec4a6f7d002189d",\n  "workspace": "/home/runner/work/github-actions/github-actions",\n  "action": "__run"\n}\n'})})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,o.jsx)(t,Object.assign({},e,{children:(0,o.jsx)(u,e)})):u(e)}},2803:(e,t,n)=>{n.d(t,{Zo:()=>r,ah:()=>a});var o=n(5170);const i=o.createContext({});function a(e){const t=o.useContext(i);return o.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const s={};function r({components:e,children:t,disableParentContext:n}){let r;return r=n?"function"==typeof e?e({}):e||s:a(e),o.createElement(i.Provider,{value:r},t)}}}]);