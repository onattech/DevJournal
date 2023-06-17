---
sidebar_position: 3
---

# EmailJS

:::info
**EmailJS** is great for reporting a broken link. Follow the step below to be notified via email every time a request is made to a broken or non existing link on your website.
:::

### 1. EmailJS dashboard

1. Register a service at https://www.emailjs.com/.
2. Setup a service.
3. Setup a template.
4. Take note of service_id, template_id, public_key.

### 2. Add credentials to .env file

```txt title=".env"
EMAILJS_SERVICE_ID=service_7pw8741
EMAILJS_TEMPLATE_ID=template_b1rqq5s
EMAILJS_PUBLIC_KEY=GIVRFmTLb16ynkEEy
```

### 3. Install emailjs

```
pnpm install @emailjs/browser
```

### 4. Expose credentials from .env to docusaurus.config.js

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

### 5. Add EmailJS to NotFound.tsx

```tsx title="./src/theme/NotFound.tsx"
import React from "react"
import NotFound from "@theme-original/NotFound"
import emailjs from "@emailjs/browser"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"

export default function NotFoundWrapper(props) {
    const { siteConfig } = useDocusaurusContext()

    const serverId = siteConfig.customFields.EMAILJS_SERVER_ID as string
    const templateId = siteConfig.customFields.EMAILJS_TEMPLATE_ID as string
    const publicKey = siteConfig.customFields.EMAILJS_PUBLIC_KEY as string

    React.useEffect(() => {
        if (!serverId || !templateId || !publicKey) return

        async function emailJS() {
            emailjs
                .send(
                    serverId,
                    templateId,
                    {
                        url: window.location.href,
                    },
                    publicKey
                )
                .then(
                    function (response) {
                        console.log("SUCCESS!", response.status, response.text)
                    },
                    function (error) {
                        console.log("FAILED...", error)
                    }
                )
        }

        emailJS()
    }, [])

    return (
        <>
            <NotFound {...props} />
        </>
    )
}
```
