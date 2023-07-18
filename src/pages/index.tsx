import React from "react"
import Layout from "@theme/Layout"
import profile from "/img/profile.jpg"
import dataplane from "/img/dataplane.png"
import styled from "styled-components"
import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  :root {
    scroll-behavior: smooth;
  }

  h1,h2,p {
    font-family: Montserrat, sans-serif;
  }

  body {
    text-align: center;
  }

  a,
  a:active,
  a:hover,
  a:link,
  a:visited {
    text-decoration: none;
  }
`

export default function Home(): JSX.Element {
    React.useLayoutEffect(() => {
        // Hide dark mode toggle
        document.querySelector<HTMLElement>('[class*="toggle_"]')!.style.display = "none"

        // Make main page visible after css-in-js is loaded to avoid FOUC
        document.querySelector<HTMLElement>("#__docusaurus > div > main")!.style.opacity = "1"
    }, [])

    // Github stars for Datapane project
    const [stars, setStars] = React.useState<number | null>(null)
    React.useEffect(() => {
        let isMounted = true

        const fetchStars = async () => {
            const data = await fetch(`https://api.github.com/repos/dataplane-app/dataplane`)
            await new Promise((r) => setTimeout(r, 1000))
            const json: { watchers_count: number } = await data.json()

            if (isMounted) {
                setStars(json.watchers_count)
            }
        }

        fetchStars().catch(console.error)

        return () => {
            isMounted = false
        }
    }, [])

    return (
        <Layout title="Onat" description="My portfoio and dev insights">
            <GlobalStyle />
            <main>
                {/**** Hero Section ****/}
                <Hero>
                    <Container>
                        <H1>
                            Hi, my name is <Name>Onat</Name>
                            <br />
                            I'm a full-stack Developer.
                        </H1>

                        <FlexWrapper>
                            <ButtonKnowMore rel="noreferrer" href="#about">
                                Know more
                            </ButtonKnowMore>
                        </FlexWrapper>
                    </Container>
                </Hero>

                {/* Anchor for About section */}
                <div
                    id="about"
                    style={{
                        marginTop: "-60px",
                        position: "absolute",
                    }}
                />

                {/**** About Section ****/}
                <About>
                    <Container>
                        <SectionTitle>About me</SectionTitle>
                        <Row>
                            <Column>
                                <ImageWrapper>
                                    <IMG alt="Profile Image" height="auto" width="300px" src={profile} />
                                </ImageWrapper>
                            </Column>

                            <Column>
                                <AboutWrapper>
                                    <InfoText>
                                        I am Onat, a US citizen. I speak English and Turkish fluently and Arabic at an
                                        acceptable level. I am a full stack Web Developer with network engineering
                                        background. The stack that I am most comfortable with is React in the frontend
                                        and Go in the backend.
                                    </InfoText>
                                    <InfoText>
                                        Currently focusing on improving my skills on Go and learning docker and
                                        kubernetes.
                                    </InfoText>
                                    <AboutButtonContainer>
                                        <ButtonAbout rel="noreferrer" target="_blank" href="/resume.pdf">
                                            View Resume{" "}
                                        </ButtonAbout>
                                        <ButtonAbout
                                            rel="noreferrer"
                                            target="_blank"
                                            style={{ marginLeft: "20px" }}
                                            href="https://github.com/onattech"
                                        >
                                            Github Profile
                                        </ButtonAbout>
                                    </AboutButtonContainer>
                                </AboutWrapper>
                            </Column>
                        </Row>
                    </Container>
                </About>

                {/**** Projects Section ****/}
                <Projects>
                    <Container>
                        <div
                            style={{
                                marginBottom: "9.375rem",
                            }}
                        >
                            <SectionTitle
                                style={{
                                    color: "#272341",
                                }}
                            >
                                Projects
                            </SectionTitle>

                            {/* <!-- Notice: each .row is a project --> */}
                            <Row>
                                <Column33>
                                    <ProjectWrapper>
                                        <ProjectTitle>Dataplane ({stars} Github 🌟️s)</ProjectTitle>
                                        <div>
                                            <p
                                                style={{
                                                    textAlign: "left",
                                                    marginBottom: "0.9375rem",
                                                    lineHeight: "1.5",
                                                }}
                                            >
                                                I have helped build and currently maintaining Dataplane as a full-stack
                                                engineer. Dataplane is an open source Airflow inspired data platform to
                                                automate, schedule and design data pipelines and workflows written in
                                                Go. I am responsible with all things frontend and setting up GraphQL
                                                endpoints, writing tests and more in the backend with Go. Check out my{" "}
                                                <a
                                                    rel="noreferrer"
                                                    href="https://github.com/dataplane-app/dataplane/graphs/contributors"
                                                    target="_blank"
                                                >
                                                    contributions.
                                                </a>
                                            </p>
                                        </div>
                                        <ButtonProject rel="noreferrer" target="_blank" href="https://dataplane.app/">
                                            See Live
                                        </ButtonProject>
                                        <ButtonSourceCode
                                            rel="noreferrer"
                                            target="_blank"
                                            href="https://github.com/dataplane-app/dataplane"
                                        >
                                            Source Code
                                        </ButtonSourceCode>
                                    </ProjectWrapper>
                                </Column33>

                                <Column66>
                                    <div style={{ margin: "0 auto" }}>
                                        <div>
                                            <img alt="Project Image" src={dataplane} />
                                        </div>
                                    </div>
                                </Column66>
                            </Row>

                            {/* Ecommerce store */}
                            <Row style={{ marginTop: "50px" }}>
                                <Column33>
                                    <ProjectWrapper>
                                        <ProjectTitle>Ecommerce Store</ProjectTitle>
                                        <div>
                                            <p
                                                style={{
                                                    textAlign: "left",
                                                    marginBottom: "0.9375rem",
                                                    lineHeight: "1.5",
                                                }}
                                            >
                                                This is an Ecommerce store project built with Next.js 13.4, leveraging
                                                the features of the app router. The project is developed using
                                                TypeScript. Prisma is utilized as the database toolkit. Tailwind CSS is
                                                used for styling. Finally it utilizes Stripe integration for the
                                                checkout process.
                                            </p>
                                        </div>
                                        <ButtonProject
                                            rel="noreferrer"
                                            target="_blank"
                                            href="https://store.onatim.com/"
                                        >
                                            See Live
                                        </ButtonProject>
                                        <ButtonSourceCode
                                            rel="noreferrer"
                                            target="_blank"
                                            href="https://github.com/onattech/ecommerce-store"
                                        >
                                            Source Code
                                        </ButtonSourceCode>
                                    </ProjectWrapper>
                                </Column33>

                                <Column66>
                                    <div style={{ margin: "0 auto" }}>
                                        <div>
                                            <img alt="Project Image" src="/img/store.png" />
                                        </div>
                                    </div>
                                </Column66>
                            </Row>

                            {/* Ecommerce store - Admin */}
                            <Row style={{ marginTop: "50px" }}>
                                <Column33>
                                    <ProjectWrapper>
                                        <ProjectTitle>Ecommerce Store - Admin</ProjectTitle>
                                        <div>
                                            <p
                                                style={{
                                                    textAlign: "left",
                                                    marginBottom: "0.9375rem",
                                                    lineHeight: "1.5",
                                                }}
                                            >
                                                This is the admin dashboard for the Ecommerce store project built with
                                                Next.js 13.4. It utilizes similar technologies the Store does. It also
                                                leverages shancn/ui for ui components. It is secured via clerk
                                                authentication. You may add products, their color, size, cost etc. and
                                                check order statuses via the comprehensive dashboard.
                                                <br />
                                                <br />
                                                <strong>login email:</strong> admin@example.com
                                                <br />
                                                <strong>login password:</strong> admin
                                            </p>
                                        </div>
                                        <ButtonProject
                                            rel="noreferrer"
                                            target="_blank"
                                            href="https://store-admin.onatim.com/"
                                        >
                                            See Live
                                        </ButtonProject>
                                        <ButtonSourceCode
                                            rel="noreferrer"
                                            target="_blank"
                                            href="https://github.com/onattech/ecommerce-admin"
                                        >
                                            Source Code
                                        </ButtonSourceCode>
                                    </ProjectWrapper>
                                </Column33>

                                <Column66>
                                    <div style={{ margin: "0 auto" }}>
                                        <div>
                                            <img alt="Project Image" src="/img/store-admin.png" />
                                        </div>
                                    </div>
                                </Column66>
                            </Row>
                        </div>
                    </Container>
                </Projects>

                {/**** Contact Section ****/}
                <Contact>
                    <Container
                        style={{
                            maxWidth: "480px",
                        }}
                    >
                        <Row>
                            <SectionTitle>Contact</SectionTitle>
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
                                    style={{
                                        display: "inline-block",
                                        width: "80px",
                                    }}
                                >
                                    Name
                                </label>
                                <input type="text" name="name" id="name" />
                                <br />
                                <label
                                    htmlFor="_replyto"
                                    style={{
                                        marginTop: "10px",
                                        display: "inline-block",
                                        width: "80px",
                                    }}
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="_replyto"
                                    id="email"
                                    style={{
                                        marginBottom: "20px",
                                    }}
                                />
                                <br />
                                <label htmlFor="textarea" id="textarealabel">
                                    How may I help you?
                                </label>
                                <textarea
                                    name="body"
                                    style={{
                                        width: "100%",
                                    }}
                                    rows={8}
                                    cols={50}
                                ></textarea>
                                <br />
                                <button
                                    value="Submit"
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
                        </Row>
                    </Container>
                </Contact>
            </main>
        </Layout>
    )
}

/*********************
 * Styled components *
 *********************/

const Name = styled.span`
    background-image: linear-gradient(135deg, #00a6f9 0%, #69cdff 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: #0000;
`

const Hero = styled.section`
    align-items: center;
    background: radial-gradient(50% 50% at 50% 50%, rgba(26, 21, 21, 0) 0%, rgba(1, 1, 1, 0.16) 100%), #ffffff;
    border-bottom: 0;
    color: #272341;
    display: flex;
    font-weight: 400;
    height: 100vh;
    margin-bottom: 0;
    min-height: 100vh;
    padding: 0 3.5rem;
    margin-top: -60px;

    @media (max-width: 576px) {
        padding: 0 1rem;
    }
`

const Container = styled.div`
    width: 100%;
    padding-right: 0.46875rem;
    padding-left: 0.46875rem;
    margin-left: auto;
    margin-right: auto;

    @media (min-width: 576px) {
        max-width: 540px;
    }

    @media (min-width: 768px) {
        max-width: 720px;
    }

    @media (min-width: 992px) {
        max-width: 960px;
    }

    @media (min-width: 1200px) {
        max-width: 1140px;
    }

    @media (min-width: 1400px) {
        max-width: 1320px;
    }
`
const H1 = styled.h1`
    visibility: visible;

    font-size: 2.1875rem;
    font-weight: 700;
    margin-bottom: 2rem;
    text-align: left;
    line-height: 1.2;
    margin-top: 0;

    @media (min-width: 576px) {
        font-size: 2.1875rem;
    }

    @media (min-width: 768px) {
        font-size: 2.25rem;
    }

    @media (min-width: 992px) {
        font-size: 2.25rem;
    }

    @media (max-width: 992px) {
        text-align: center;
    }

    @media (min-width: 1200px) {
        font-size: 3.5rem;
    }

    @media (min-width: 1400px) {
        font-size: 3.5rem;
    }
`

const FlexWrapper = styled.p`
    display: flex;

    @media (max-width: 992px) {
        justify-content: center;
    }
`

const Button = styled.a`
    font-family: Montserrat, sans-serif;

    display: inline-block;
    font-weight: 700;
    line-height: 1;
    padding: 0.5rem 1rem;
    position: relative;
    transition: all 0.6s cubic-bezier(0.19, 1, 0.22, 1);
    z-index: 1;
    &: after {
        bottom: 0;
        content: "";
        display: block;
        height: 100%;
        left: 0;
        position: absolute;
        transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
        width: 0;
        z-index: -1;
    }
`
const ButtonKnowMore = styled(Button)`
    font-size: 1.5rem;
    @media (max-width: 600px) {
        font-size: 1.25rem;
    }

    border: 2px solid transparent;
    border-image: linear-gradient(135deg, #00a6f9, #69cdff);
    border-image-slice: 1;

    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-image: linear-gradient(135deg, #00a6f9, #69cdff);
    color: transparent;

    &:after {
        background-image: linear-gradient(135deg, #00a6f9, #69cdff);
    }

    &:hover {
        -webkit-text-fill-color: #fff;
        transition: all 0.3s ease-in-out;

        &:after {
            width: 100%;
        }
    }
`
const About = styled.section`
    padding: 3.125rem 0;

    background: radial-gradient(50% 50% at 50% 50%, rgba(26, 21, 21, 0) 0%, rgba(1, 1, 1, 0.16) 100%), #ffffff;
    border-top: 0;
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
    clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
    color: #21243d;
    height: 100%;
    padding-bottom: 10%;

    @media (max-width: 1200px) {
        clip-path: none;
        height: 100%;
    }
`

const SectionTitle = styled.h2`
    font-size: 2.5rem;
    font-weight: 700;
    margin: 0 0 2.8125rem;
    text-transform: uppercase;

    @media (max-width: 600px) {
        font-size: 1.75rem;
    }
`

const Row = styled.div`
    --bs-gutter-x: 0.9375rem;
    --bs-gutter-y: 0;
    display: flex;
    flex-wrap: wrap;
    margin-left: calc(var(--bs-gutter-x) * -0.5);
    margin-right: calc(var(--bs-gutter-x) * -0.5);
    margin-top: calc(var(--bs-gutter-y) * -1);

    & > * {
        flex-shrink: 0;
        margin-top: var(--bs-gutter-y);
        max-width: 100%;
        padding-left: calc(var(--bs-gutter-x) * 0.5);
        padding-right: calc(var(--bs-gutter-x) * 0.5);
        width: 100%;
    }
`

const Column = styled.div`
    @media (min-width: 576px) {
        flex: 0 0 auto;
        width: 100%;
    }

    @media (min-width: 768px) {
        flex: 0 0 auto;
        width: 50%;
    }
`
const ImageWrapper = styled.div`
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;

    @media (max-width: 768px) {
        padding-bottom: 4rem;
    }
`

const IMG = styled.img`
    border-radius: 0.5rem !important;
    box-shadow: 0 0.625rem 1.875rem rgba(0, 0, 0, 0.375) !important;
    height: auto;
    max-width: 100%;
`

const AboutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
`

const InfoText = styled.p`
    text-align: left;
    margin-bottom: 0.625rem;
    margin-top: 0;

    @media (max-width: 768px) {
        text-align: center;
    }
`

const AboutButtonContainer = styled.span`
    margin-top: 1rem !important;

    display: flex !important;
`

const ButtonAbout = styled(Button)`
    // border: 2px solid #21243d;
    color: #21243d;

    &:after {
        background: #fff;
    }

    &:hover::after {
        width: 100%;
    }
`
const Projects = styled.section`
    padding: 3.125rem 0;

    background-color: #fff;
    color: #272341;
    margin-top: -6.25rem;
    padding-top: 9.375rem;

    @media (max-width: 576px) {
        border: none;
        padding-left: 0.625rem;
        padding-right: 0.625rem;
    }

    @media (max-width: 1200px) {
        margin-top: 0;
        padding-top: 3.125rem;
    }
`

const Column33 = styled.div`
    @media (min-width: 576px) {
        flex: 0 0 auto;
        width: 100%;
    }

    @media (min-width: 992px) {
        flex: 0 0 auto;
        width: 33.3%;
    }
`

const Column66 = styled.div`
    @media (min-width: 576px) {
        flex: 0 0 auto;
        width: 100%;
    }

    @media (min-width: 992px) {
        flex: 0 0 auto;
        width: 66.6%;
    }
`

const ProjectWrapper = styled.div`
    text-align: left;

    @media (max-width: 1200px) {
        margin-bottom: 3rem;
    }
`

const ProjectTitle = styled.h3`
    font-size: 1.5625rem;
    font-weight: 700;
    margin-bottom: 1.125rem;
    font-family: Montserrat, sans-serif;
`

const ButtonProject = styled(ButtonAbout)`
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-image: linear-gradient(135deg, #00a6f9, #69cdff);
    color: transparent;

    border: 2px solid transparent;
    border-image: linear-gradient(135deg, #00a6f9, #69cdff);
    border-image-slice: 1;

    &:after {
        background-image: linear-gradient(135deg, #00a6f9, #69cdff);
    }

    &:hover {
        -webkit-text-fill-color: #fff;
    }
`

const ButtonSourceCode = styled(Button)`
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-image: linear-gradient(135deg, #00a6f9, #69cdff);
    color: transparent;
`

const Contact = styled.section`
    background: radial-gradient(50% 50% at 50% 50%, rgba(26, 21, 21, 0) 0%, rgba(1, 1, 1, 0.16) 100%), #ffffff;
    -webkit-clip-path: polygon(0 15vh, 100% 0, 100% 100%, 0 100%);
    clip-path: polygon(0 15vh, 100% 0, 100% 100%, 0 100%);
    color: #272341;
    margin-bottom: -1px;
    margin-top: -6.25rem;
    padding: 9.375rem 0 6.25rem;

    font-family: Montserrat, sans-serif;

    @media (max-width: 1200px) {
        -webkit-clip-path: none;
        margin-top: 0;
        padding: 6.25rem 0;
    }
`
