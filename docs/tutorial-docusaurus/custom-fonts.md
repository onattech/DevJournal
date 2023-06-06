---
sidebar_position: 3
---

# Custom Fonts

:::info

To add custom fonts to your Docusaurus site, you can choose between using **Google Fonts** or serving the fonts locally.

:::

### 1. Get font links from Google Fonts

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@400;600;700&display=swap" rel="stylesheet" />
```

### 2. Add the links as HeadTags in docusaurus.config.js file

```js title="docusaurus.config.js"
const config = {
    //...

    headTags: [
        {
            tagName: "link",
            attributes: {
                rel: "preconnect",
                href: "https://fonts.googleapis.com",
            },
        },
        {
            tagName: "link",
            attributes: {
                rel: "preconnect",
                href: "https://fonts.gstatic.com",
                crossorigin: "anonymous",
            },
        },
        {
            tagName: "link",
            attributes: {
                rel: "stylesheet",
                href: "https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@400;600;700&display=swap",
            },
        },
    ],

    //...
}
```

### 3. Add to custom.css file

```css {11,12} title="src/css/custom.css"
:root {
    --ifm-color-primary: #4361ee;
    --ifm-color-primary-dark: #2749eb;
    --ifm-color-primary-darker: #193eea;
    --ifm-color-primary-darkest: #1231c4;
    --ifm-color-primary-light: #5f79f1;
    --ifm-color-primary-lighter: #6d84f2;
    --ifm-color-primary-lightest: #97a8f6;
    --ifm-code-font-size: 95%;
    --docusaurus-highlighted-code-line-bg: rgba(0, 0, 0, 0.1);
    --ifm-heading-font-family: "Noto Sans Arabic", sans-serif;
    --ifm-font-family-base: "Noto Sans Arabic", sans-serif;
}
```
