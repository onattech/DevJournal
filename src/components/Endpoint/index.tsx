import React from "react"
import styles from "./styles.module.css"
import CodeBlock from "@theme/CodeBlock"

type Endpoint = {
    href: string
    method: Method
}
type Method = "GET" | "POST" | "PUT" | "PATCH" | "DELETE"

export default function Endpoint({ href, method }: Endpoint) {
    return (
        <div className={styles.main}>
            <div className={styles.method} style={{ color: methodColor(method) }}>
                {method}
            </div>
            <a
                className={styles.url}
                style={{ left: urlPadding(method) }}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
            >
                {href}
            </a>
            <CodeBlock>{href}</CodeBlock>
        </div>
    )
}

function methodColor(method: Method) {
    switch (method) {
        case "GET":
            return "#61AFFE"
        case "POST":
            return "#49CC90"
        case "PUT":
            return "#FCA130"
        case "PATCH":
            return "#50E3C2"
        case "DELETE":
            return "#F93E3E"
    }
}

function urlPadding(method: Method) {
    switch (method) {
        case "GET":
            return "70px"
        case "POST":
            return "80px"
        case "PUT":
            return "70px"
        case "PATCH":
            return "90px"
        case "DELETE":
            return "98px"
    }
}
