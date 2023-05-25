---
sidebar_position: 3
title: Images
---

# Importing images in React components

Files in the `static` directory don't need to be imported in order to be used in a React component.
Assuming there is an image at `/static/img/myImage.png`. It can be consumed as:

### Usage

```jsx
<img src="/img/myImage.png" alt="myImage" />
```

:::info
Also works for .svg images
:::