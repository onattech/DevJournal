---
sidebar_position: 3
---

# Sticky media

:::caution

Only works if page is loaded directly going to the address of the page with sticky media. It doesn't work coming from another page on the same site.

#### Example

If you refresh this page, it will work. If you click to this page's link from the landing page, it won't.

:::

You may add a sticky video by giving `sticky-popup` class to an `a` tag.

```html {4}
<!-- md content above -->

<a className="sticky-popup" target="_blank" href="https://www.youtube.com/watch?v=uRgQ_TpTj4g">Sticky video</a>

<!-- md content below -->
```

## Try it!

<a
    className="sticky-popup"
    target="_blank"
    href="https://www.youtube.com/watch?v=uRgQ_TpTj4g"
    data-video-id="uRgQ_TpTj4g"
    >Sticky video</a>
