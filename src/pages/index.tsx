import React from "react"
import clsx from "clsx"
import Link from "@docusaurus/Link"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import Layout from "@theme/Layout"
import HomepageFeatures from "@site/src/components/HomepageFeatures"

import styles from "./index.module.css"

// function HomepageHeader() {
//     const { siteConfig } = useDocusaurusContext()
//     return (
//         <header className={clsx("hero hero--primary", styles.heroBanner)}>
//             <div className="container">
//                 <h1 className="hero__title">{siteConfig.title}</h1>
//                 <p className="hero__subtitle">{siteConfig.tagline}</p>
//                 <div className={styles.buttons}>
//                     <Link
//                         className="button button--secondary button--lg"
//                         to="/docs/intro"
//                     >
//                         Docusaurus Tutorial - 5min ⏱️
//                     </Link>
//                 </div>
//             </div>
//         </header>
//     )
// }

export default function Home(): JSX.Element {
    return (
        <Layout title={"Onat"} description="My portfoio and dev insights">
            <main>
                {/**** Hero Section ****/}
                <div className={styles.hero}>
                    <div className={styles.container}>
                        <h1 className={styles.h1}>
                            Hi, my name is{" "}
                            <span className={styles.name}>Onat</span>
                            <br />
                            I'm a full-stack Developer.
                        </h1>

                        <div>
                            {/* <button className="button button--secondary button--outline button--lg"> */}
                            <a className={styles.button} href="#about">
                                Know more
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    )
}
