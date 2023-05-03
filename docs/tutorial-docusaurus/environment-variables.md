---
sidebar_position: 3
---

# Environment variables

### 1. Install dotenv

```
pnpm install dotenv
```

### 2. Add .env file at the root

```{22,23,25,26} title=.env
EMAILJS_SERVER_ID=service_7pw8741
EMAILJS_TEMPLATE_ID=template_b1rqq5s
EMAILJS_PUBLIC_KEY=GIVRFmTLb16ynkEEy
```

### 3. Add dotenv to docusaurus.config.js

```js {5,14-19}
//...
const lightCodeTheme = require("prism-react-renderer/themes/github")
const darkCodeTheme = require("prism-react-renderer/themes/dracula")

require("dotenv").config()

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "Developer",
@ -24,6 +26,14 @@ const config = {
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",

    // customFields are used to pass env variables to Docusaurus' useDocusaurusContext
    // hook which is used for importing env variables in the components
    customFields: {
        EMAILJS_SERVER_ID: process.env.EMAILJS_SERVER_ID,
        EMAILJS_TEMPLATE_ID: process.env.EMAILJS_TEMPLATE_ID,
        EMAILJS_PUBLIC_KEY: process.env.EMAILJS_PUBLIC_KEY,
    },

    i18n: {
        defaultLocale: "en",
        locales: ["en"],
    },
//...
```

### 4. Consume

```js {3,6,8-10} title=somepage.tsx
//...
import NotFound from "@theme-original/NotFound"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"

export default function NotFoundWrapper(props) {
    const { siteConfig } = useDocusaurusContext()

    const serverId = siteConfig.customFields.EMAILJS_SERVER_ID as string
    const templateId = siteConfig.customFields.EMAILJS_TEMPLATE_ID as string
    const publicKey = siteConfig.customFields.EMAILJS_PUBLIC_KEY as string

    console.log(serverId,templateId,publicKey)
//...
```
