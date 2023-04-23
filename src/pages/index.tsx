import React from "react"
import Layout from "@theme/Layout"
import profile from "/img/profile.jpg"
import dataplane from "/img/dataplane.png"

import styles from "./index.module.css"

export default function Home(): JSX.Element {
    React.useLayoutEffect(() => {
        let themeToggle: HTMLElement = document.querySelector(
            "div.navbar__items:nth-child(2) > div"
        )
        themeToggle.style.display = "none"
    }, [])

    // Github stars for Datapane
    const [stars, setStars] = React.useState(null)
    React.useEffect(() => {
        let isMounted = true

        const fetchData = async () => {
            const data = await fetch(
                `https://api.github.com/repos/dataplane-app/dataplane`
            )
            await new Promise((r) => setTimeout(r, 1000))
            const json = await data.json()

            if (isMounted) {
                setStars(json.watchers_count)
            }
        }

        fetchData().catch(console.error)

        return () => {
            isMounted = false
        }
    }, [])

    return (
        <Layout title="Onat" description="My portfoio and dev insights">
            <main>
                {/**** Hero Section ****/}
                <div className={styles.hero} style={{ marginTop: "-60px" }}>
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

                {/**** About Section ****/}
                <section className={styles.aboutSection} id="about">
                    <div className={styles.container}>
                        <h2
                            className={styles.sectionTitle}
                            style={{ marginTop: "60px" }}
                        >
                            About me
                        </h2>
                        <div className={styles.row}>
                            <div className={styles.col}>
                                <div className={styles.imageWrapper}>
                                    <img
                                        alt="Profile Image"
                                        className={styles.image}
                                        height="auto"
                                        width="300px"
                                        src={profile}
                                    />
                                </div>
                            </div>
                            <div className={styles.col}>
                                <div className="about-wrapper__info load-hidden">
                                    <p className="about-wrapper__info-text">
                                        I am Onat, a US citizen. I speak English
                                        and Turkish fluently and Arabic at an
                                        acceptable level. I am a full stack Web
                                        Developer with network engineering
                                        background. The stack that I am most
                                        comfortable with is React in the
                                        frontend and Go in the backend.
                                    </p>
                                    <p className="about-wrapper__info-text">
                                        Currently focusing on improving my
                                        skills on Go and learning docker and
                                        kubernetes.
                                    </p>
                                    <span className="d-flex mt-3">
                                        <a
                                            rel="noreferrer"
                                            target="_blank"
                                            className={styles.buttonAbout}
                                            href="/resume.pdf"
                                        >
                                            {" "}
                                            View Resume{" "}
                                        </a>
                                        <a
                                            rel="noreferrer"
                                            target="_blank"
                                            className={styles.buttonAbout}
                                            style={{ marginLeft: "20px" }}
                                            href="https://github.com/onattech"
                                        >
                                            Github Profile
                                        </a>
                                    </span>
                                    <span className="d-flex mt-3"> </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/**** Projects Section ****/}
                <section className={styles.projectsSection}>
                    <div className={styles.container}>
                        <div style={{ marginBottom: "9.375rem" }}>
                            <h2
                                className={styles.sectionTitle}
                                style={{
                                    color: "#272341",
                                }}
                            >
                                Projects
                            </h2>

                            {/* <!-- Notice: each .row is a project --> */}
                            <div className={styles.row}>
                                <div
                                    className={styles.col}
                                    style={{ width: "33%" }}
                                >
                                    <div className="project-wrapper__text load-hidden">
                                        <h3 className={styles.projectTitle}>
                                            Dataplane ({stars} Github 🌟️s)
                                        </h3>
                                        <div>
                                            <p style={{ textAlign: "left" }}>
                                                I have helped build and
                                                currently maintaining Dataplane
                                                as a full-stack engineer.
                                                Dataplane is an open source
                                                Airflow inspired data platform
                                                to automate, schedule and design
                                                data pipelines and workflows
                                                written in Go. I am responsible
                                                with all things frontend and
                                                setting up GraphQL endpoints,
                                                writing tests and more in the
                                                backend with Go. Check out my{" "}
                                                <a
                                                    rel="noreferrer"
                                                    href="https://github.com/dataplane-app/dataplane/graphs/contributors"
                                                    target="_blank"
                                                >
                                                    contributions.
                                                </a>
                                            </p>
                                        </div>
                                        <a
                                            rel="noreferrer"
                                            target="_blank"
                                            className={styles.buttonProject}
                                            href="https://dataplane.app/"
                                        >
                                            {" "}
                                            See Live{" "}
                                        </a>
                                        <a
                                            rel="noreferrer"
                                            target="_blank"
                                            className={styles.buttonProject}
                                            style={{ marginLeft: "20px" }}
                                            href="https://github.com/dataplane-app/dataplane"
                                        >
                                            {" "}
                                            Source Code{" "}
                                        </a>
                                    </div>
                                </div>
                                <div
                                    className={styles.col}
                                    style={{ width: "66%" }}
                                >
                                    <div
                                        style={{
                                            margin: "0 auto",
                                            width: "90%",
                                        }}
                                    >
                                        <div
                                            data-tilt
                                            data-tilt-max="4"
                                            data-tilt-glare="true"
                                            data-tilt-max-glare="0.5"
                                            className="thumbnail rounded js-tilt"
                                        >
                                            <img
                                                alt="Project Image"
                                                className="img-fluid"
                                                src={dataplane}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/**** Contact Section ****/}
                <section
                    className={styles.contactSection}
                    style={{ paddingTop: "5rem" }}
                >
                    <div className="container" style={{ maxWidth: "480px" }}>
                        <div className="row">
                            <h2 className={styles.sectionTitle}>Contact</h2>
                            <form
                                action="https://formspree.io/xqkyrbrr"
                                method="POST"
                                style={{
                                    textAlign: "left",
                                    fontSize: "1.3rem",
                                }}
                            >
                                <label
                                    htmlFor="name"
                                    className="input-className"
                                    style={{
                                        display: "inline-block",
                                        width: "60px",
                                    }}
                                >
                                    Name
                                </label>
                                <input type="text" name="name" id="name" />
                                <br />
                                <label
                                    htmlFor="_replyto"
                                    className="input-className"
                                    style={{
                                        marginTop: "10px",
                                        display: "inline-block",
                                        width: "60px",
                                    }}
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="_replyto"
                                    id="email"
                                    style={{ marginBottom: "20px" }}
                                />
                                <br />
                                <label htmlFor="textarea" id="textarealabel">
                                    How may I help you?
                                </label>
                                <textarea
                                    name="body"
                                    style={{ width: "100%" }}
                                    rows={8}
                                    cols={50}
                                ></textarea>
                                <br />
                                <button
                                    value="Submit"
                                    className="form-submit"
                                    style={{
                                        border: "none",
                                        borderRadius: "3px",
                                        fontSize: "1rem",
                                        marginTop: "10px",
                                        padding: "10px",
                                        fontFamily: "Montserrat,sans-serif",
                                    }}
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    )
}
