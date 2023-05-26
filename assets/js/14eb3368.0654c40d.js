"use strict";(self.webpackChunkdev_journal=self.webpackChunkdev_journal||[]).push([[817],{5385:(e,t,a)=>{a.d(t,{Z:()=>E});var n=a(1163),r=a(9496),i=a(5924),l=a(9129),c=a(7183),s=a(5272),o=a(5859),m=a(4972),d=a(5371);function u(e){return r.createElement("svg",(0,n.Z)({viewBox:"0 0 24 24"},e),r.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const h={breadcrumbHomeIcon:"breadcrumbHomeIcon_MwBd"};function b(){const e=(0,d.Z)("/");return r.createElement("li",{className:"breadcrumbs__item"},r.createElement(o.Z,{"aria-label":(0,m.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e},r.createElement(u,{className:h.breadcrumbHomeIcon})))}const v={breadcrumbsContainer:"breadcrumbsContainer_CbLh"};function g(e){let{children:t,href:a,isLast:n}=e;const i="breadcrumbs__link";return n?r.createElement("span",{className:i,itemProp:"name"},t):a?r.createElement(o.Z,{className:i,href:a,itemProp:"item"},r.createElement("span",{itemProp:"name"},t)):r.createElement("span",{className:i},t)}function p(e){let{children:t,active:a,index:l,addMicrodata:c}=e;return r.createElement("li",(0,n.Z)({},c&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,i.Z)("breadcrumbs__item",{"breadcrumbs__item--active":a})}),t,r.createElement("meta",{itemProp:"position",content:String(l+1)}))}function E(){const e=(0,c.s1)(),t=(0,s.Ns)();return e?r.createElement("nav",{className:(0,i.Z)(l.k.docs.docBreadcrumbs,v.breadcrumbsContainer),"aria-label":(0,m.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},r.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&r.createElement(b,null),e.map(((t,a)=>{const n=a===e.length-1;return r.createElement(p,{key:a,active:n,index:a,addMicrodata:!!t.href},r.createElement(g,{href:t.href,isLast:n},t.label))})))):null}},8357:(e,t,a)=>{a.r(t),a.d(t,{default:()=>x});var n=a(9496),r=a(143),i=a(7183),l=a(5371),c=a(5924),s=a(5859),o=a(9763),m=a(4972);const d={cardContainer:"cardContainer_euSU",cardTitle:"cardTitle_glPY",cardDescription:"cardDescription_u4VD"};function u(e){let{href:t,children:a}=e;return n.createElement(s.Z,{href:t,className:(0,c.Z)("card padding--lg",d.cardContainer)},a)}function h(e){let{href:t,icon:a,title:r,description:i}=e;return n.createElement(u,{href:t},n.createElement("h2",{className:(0,c.Z)("text--truncate",d.cardTitle),title:r},a," ",r),i&&n.createElement("p",{className:(0,c.Z)("text--truncate",d.cardDescription),title:i},i))}function b(e){let{item:t}=e;const a=(0,i.Wl)(t);return a?n.createElement(h,{href:a,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,m.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function v(e){let{item:t}=e;const a=(0,o.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,i.xz)(t.docId??void 0);return n.createElement(h,{href:t.href,icon:a,title:t.label,description:t.description??r?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(v,{item:t});case"category":return n.createElement(b,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function p(e){let{className:t}=e;const a=(0,i.jA)();return n.createElement(E,{items:a.items,className:t})}function E(e){const{items:t,className:a}=e;if(!t)return n.createElement(p,e);const r=(0,i.MN)(t);return n.createElement("section",{className:(0,c.Z)("row",a)},r.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(g,{item:e})))))}var f=a(8044),N=a(642),Z=a(1655),k=a(5385),_=a(7489);const L={generatedIndexPage:"generatedIndexPage_gEXO",list:"list_o0dl",title:"title_eQFg"};function T(e){let{categoryGeneratedIndex:t}=e;return n.createElement(r.d,{title:t.title,description:t.description,keywords:t.keywords,image:(0,l.Z)(t.image)})}function y(e){let{categoryGeneratedIndex:t}=e;const a=(0,i.jA)();return n.createElement("div",{className:L.generatedIndexPage},n.createElement(N.Z,null),n.createElement(k.Z,null),n.createElement(Z.Z,null),n.createElement("header",null,n.createElement(_.Z,{as:"h1",className:L.title},t.title),t.description&&n.createElement("p",null,t.description)),n.createElement("article",{className:"margin-top--lg"},n.createElement(E,{items:a.items,className:L.list})),n.createElement("footer",{className:"margin-top--lg"},n.createElement(f.Z,{previous:t.navigation.previous,next:t.navigation.next})))}function x(e){return n.createElement(n.Fragment,null,n.createElement(T,e),n.createElement(y,e))}},8044:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(1163),r=a(9496),i=a(4972),l=a(8001);function c(e){const{previous:t,next:a}=e;return r.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"})},t&&r.createElement(l.Z,(0,n.Z)({},t,{subLabel:r.createElement(i.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),a&&r.createElement(l.Z,(0,n.Z)({},a,{subLabel:r.createElement(i.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}},1655:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(9496),r=a(5924),i=a(4972),l=a(9129),c=a(6745);function s(e){let{className:t}=e;const a=(0,c.E)();return a.badge?n.createElement("span",{className:(0,r.Z)(t,l.k.docs.docVersionBadge,"badge badge--secondary")},n.createElement(i.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}},642:(e,t,a)=>{a.d(t,{Z:()=>g});var n=a(9496),r=a(5924),i=a(23),l=a(5859),c=a(4972),s=a(7559),o=a(9129),m=a(4796),d=a(6745);const u={unreleased:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(c.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(c.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function h(e){const t=u[e.versionMetadata.banner];return n.createElement(t,e)}function b(e){let{versionLabel:t,to:a,onClick:r}=e;return n.createElement(c.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(l.Z,{to:a,onClick:r},n.createElement(c.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function v(e){let{className:t,versionMetadata:a}=e;const{siteConfig:{title:l}}=(0,i.Z)(),{pluginId:c}=(0,s.gA)({failfast:!0}),{savePreferredVersionName:d}=(0,m.J)(c),{latestDocSuggestion:u,latestVersionSuggestion:v}=(0,s.Jo)(c),g=u??(p=v).docs.find((e=>e.id===p.mainDocId));var p;return n.createElement("div",{className:(0,r.Z)(t,o.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(h,{siteTitle:l,versionMetadata:a})),n.createElement("div",{className:"margin-top--md"},n.createElement(b,{versionLabel:v.label,to:g.path,onClick:()=>d(v.name)})))}function g(e){let{className:t}=e;const a=(0,d.E)();return a.banner?n.createElement(v,{className:t,versionMetadata:a}):null}},7489:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(1163),r=a(9496),i=a(5924),l=a(4972),c=a(2363),s=a(5859);const o={anchorWithStickyNavbar:"anchorWithStickyNavbar_CuU3",anchorWithHideOnScrollNavbar:"anchorWithHideOnScrollNavbar_tQQR"};function m(e){let{as:t,id:a,...m}=e;const{navbar:{hideOnScroll:d}}=(0,c.L)();if("h1"===t||!a)return r.createElement(t,(0,n.Z)({},m,{id:void 0}));const u=(0,l.I)({id:"theme.common.headingLinkTitle",message:"Direct link to {heading}",description:"Title for link to heading"},{heading:"string"==typeof m.children?m.children:a});return r.createElement(t,(0,n.Z)({},m,{className:(0,i.Z)("anchor",d?o.anchorWithHideOnScrollNavbar:o.anchorWithStickyNavbar,m.className),id:a}),m.children,r.createElement(s.Z,{className:"hash-link",to:`#${a}`,"aria-label":u,title:u},"\u200b"))}},8001:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(9496),r=a(5924),i=a(5859);function l(e){const{permalink:t,title:a,subLabel:l,isNext:c}=e;return n.createElement(i.Z,{className:(0,r.Z)("pagination-nav__link",c?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},l&&n.createElement("div",{className:"pagination-nav__sublabel"},l),n.createElement("div",{className:"pagination-nav__label"},a))}}}]);