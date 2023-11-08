// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes } from "prism-react-renderer"
const theme = themes.github
const darkTheme = themes.dracula

require("dotenv").config()

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "Developer",
    tagline: "Exploring the Dev World through my Insight",
    favicon: "img/favicon.png",

    // Set the production url of your site here
    url: "http://docs.onatim.com/",
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: "/",

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "onattech", // Usually your GitHub org/user name.
    projectName: "DevJournal", // Usually your repo name.

    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",

    // customFields are used to pass env variables to Docusaurus' useDocusaurusContext
    // hook which is used for importing env variables in the components
    customFields: {
        EMAILJS_SERVER_ID: process.env.EMAILJS_SERVER_ID,
        EMAILJS_TEMPLATE_ID: process.env.EMAILJS_TEMPLATE_ID,
        EMAILJS_PUBLIC_KEY: process.env.EMAILJS_PUBLIC_KEY,
    },

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: "en",
        locales: ["en"],
    },

    scripts: [
        {
            src: "//cdn.jsdelivr.net/gh/app-generator/sticky-media@0.0.19/dist/index.min.js",
            id: "stickyVideoScript",
            defer: true,
            class: "sticky-popup",
        },
        // {
        //     src: "https://service.watchthem.live/pixel/b7PJlPZri7r7bAbj",
        //     defer: "true",
        // },
    ],

    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    // editUrl:
                    //     "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    // editUrl:
                    //     "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
            }),
        ],
    ],

    stylesheets: ["https://fonts.googleapis.com/css?family=Montserrat:400,500,700"],

    // plugins: ["@stackql/docusaurus-plugin-smartlook"],

    plugins: [
        async function myPlugin(context, options) {
            return {
                name: "docusaurus-tailwindcss",
                configurePostCss(postcssOptions) {
                    // Appends TailwindCSS and AutoPrefixer.
                    postcssOptions.plugins.push(require("tailwindcss"))
                    postcssOptions.plugins.push(require("autoprefixer"))
                    return postcssOptions
                },
            }
        },
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            image: "img/docusaurus-social-card.jpg",
            navbar: {
                title: "Portfolio",
                // logo: {
                //     alt: "My Site Logo",
                //     src: "img/logo.svg",
                // },
                items: [
                    {
                        type: "docSidebar",
                        sidebarId: "tutorialSidebar",
                        position: "left",
                        label: "Tutorials",
                    },
                    {
                        to: "/blog",
                        label: "Blog",
                        position: "left",
                    },
                    {
                        type: "search",
                        position: "right",
                    },
                    {
                        href: "https://github.com/onattech",
                        label: "GitHub",
                        position: "right",
                    },
                ],
            },
            footer: {
                style: "dark",
                links: [
                    {
                        title: "Docs",
                        items: [
                            {
                                label: "Tutorial",
                                to: "/docs/category/docusaurus",
                            },
                        ],
                    },
                    // {
                    //     title: "Community",
                    //     items: [
                    //         {
                    //             label: "Stack Overflow",
                    //             href: "https://stackoverflow.com/questions/tagged/docusaurus",
                    //         },
                    //         {
                    //             label: "Discord",
                    //             href: "https://discordapp.com/invite/docusaurus",
                    //         },
                    //         {
                    //             label: "Twitter",
                    //             href: "https://twitter.com/docusaurus",
                    //         },
                    //     ],
                    // },
                    {
                        title: "More",
                        items: [
                            {
                                label: "Blog",
                                to: "/blog",
                            },
                            {
                                label: "GitHub",
                                href: "https://github.com/onattech   ",
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} Dev Journal. Built with Docusaurus.`,
            },
            prism: {
                theme,
                darkTheme,
            },
            algolia: {
                appId: process.env.ALGOLIA_APP_ID,
                apiKey: process.env.ALGOLIA_API_KEY,
                indexName: "index",
                contextualSearch: true,
                searchParameters: {},
            },
        }),
}

export default config
