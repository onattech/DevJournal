"use strict";(self.webpackChunkdev_journal=self.webpackChunkdev_journal||[]).push([[9205],{6553:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var s=t(1527),a=t(3883);const r={sidebar_position:1},i="Makefile for project commands",o={id:"tutorial-devops/makefile",title:"Makefile for project commands",description:"Makefile is very useful to keep all of your project related commands in one place. Here's a sample Makefile for a NextJS project.",source:"@site/docs/tutorial-devops/makefile.mdx",sourceDirName:"tutorial-devops",slug:"/tutorial-devops/makefile",permalink:"/docs/tutorial-devops/makefile",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Github Actions env variables",permalink:"/docs/tutorial-devops/github-actions-env-variables"},next:{title:"Golang",permalink:"/docs/category/golang"}},l={},c=[{value:"Features",id:"features",level:2},{value:"Makefile",id:"makefile",level:2},{value:"List example",id:"list-example",level:3},{value:"Confirmation example",id:"confirmation-example",level:3}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components},{TerminalWindow:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("TerminalWindow",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"makefile-for-project-commands",children:"Makefile for project commands"}),"\n",(0,s.jsxs)(n.p,{children:["Makefile is very useful to keep all of your project related commands in one place. Here's a sample ",(0,s.jsx)(n.code,{children:"Makefile"})," for a NextJS project."]}),"\n",(0,s.jsx)(n.h2,{id:"features",children:"Features"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"make"})," command scans and lists all commands in the ",(0,s.jsx)(n.code,{children:"Makefile"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"Includes examples with confirmation for sensitive operations."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"makefile",children:"Makefile"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-makefile",metastring:'title="Makefile"',children:'# Constant Variables\nNPX := pnpm dlx\n\n# Commands\n.PHONY: list\nlist:\n\t@echo "\ud83d\udccb Available commands:"\n\t@awk -F\':.*?## \' \'/^[a-zA-Z0-9_-]+:/ && !/^[[:blank:]]*list:/ { if ($$2 == "") { printf "   \u2022 %s\\n", $$1 } else { printf "   \u2022 %-20s %s\\n", $$1, $$2 } }\' $(MAKEFILE_LIST)\n\n.PHONY: dev\ndev: ## \ud83d\udca0 Starts NextJS dev environment\n\tpnpm dev\n\n.PHONY: generate\ngenerate: ## \ud83e\udde9 Generates prisma files\n\t@echo "\ud83e\udde9 Generating prisma files"\n\t$(NPX) prisma generate\n\n.PHONY: db-push\ndb-push: ## \ud83d\udce4 Pushes generated prisma files to database\n\t@echo "\ud83d\udce4 Pushing to database"\n\t$(NPX) prisma db push\n\n.PHONY: reset\nreset:  ## \ud83e\udde8 Resets the database\n\t@echo "\ud83e\udde8 WARNING: This action will reset the database. Are you sure you want to proceed? [y/N]"\n\t@read -p "" confirm; \\\n\tif [ "$$confirm" = "y" ] || [ "$$confirm" = "Y" ]; then \\\n\t\techo "Resetting database..."; \\\n\t\t$(NPX) prisma migrate reset; \\\n\telse \\\n\t\techo "Database reset aborted."; \\\n\tfi\n\n.PHONY: encrypt-env\nencrypt-env: ## \ud83d\udd12 Encrypts the .env file\n\t@stty -echo; \\\n\tread -p "Enter passphrase: " passphrase && echo; \\\n\tstty echo; \\\n\topenssl enc -aes-256-cbc -salt -in .env -out .env.enc -pass pass:$$passphrase -pbkdf2\n\t@echo "\ud83d\udd12 .env encrypted and saved to .env.enc"\n\n.PHONY: decrypt-env\ndecrypt-env: ## \ud83d\udd10 Decrypts the .env.enc file\n\t@echo "This will overwrite the .env file. Are you sure?[y/N]"\n\t@read -p "" confirm; \\\n\tif [ "$$confirm" = "y" ] || [ "$$confirm" = "Y" ]; then \\\n\t\tstty -echo; \\\n\t\tread -p "Enter passphrase: " passphrase && echo; \\\n\t\tstty echo; \\\n\t\tif openssl enc -aes-256-cbc -d -in .env.enc -out .env -pass pass:$$passphrase -pbkdf2; then \\\n\t\t\techo "\ud83d\udd10 .env.enc successfully decrypted and saved to .env"; \\\n\t\telse \\\n\t\t\techo "\u26d4\ufe0f Decryption failed. Please check the passphrase and try again."; \\\n\t\t\trm -f .env; \\\n\t\tfi; \\\n\telse \\\n\t\techo "Database reset aborted."; \\\n\tfi\n'})}),"\n",(0,s.jsx)(n.h3,{id:"list-example",children:"List example"}),"\n",(0,s.jsx)(t,{children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"$ make\n\ud83d\udccb Available commands:\n   \u2022 dev                  \ud83d\udca0 Starts NextJS dev environment\n   \u2022 generate             \ud83e\udde9 Generates prisma files\n   \u2022 db-push              \ud83d\udce4 Pushes generated prisma files to database\n   \u2022 reset                \ud83e\udde8 Resets the database\n   \u2022 encrypt-env          \ud83d\udd12 Encrypts the .env file\n   \u2022 decrypt-env          \ud83d\udd10 Decrypts the .env.enc file\n$ \u2588\n"})})}),"\n",(0,s.jsx)(n.h3,{id:"confirmation-example",children:"Confirmation example"}),"\n",(0,s.jsx)(t,{children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"$ make reset\n\ud83e\udde8 WARNING: This action will reset the database. Are you sure you want to proceed? [y/N]\nn\nDatabase reset aborted.\n$ \u2588\n"})})})]})}function p(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},3883:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>i});var s=t(959);const a={},r=s.createContext(a);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);