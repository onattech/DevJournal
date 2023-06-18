import React from "react"
import NotFound from "@theme-original/NotFound"
import type { WrapperProps } from "@docusaurus/types"
import type NotFoundType from "@theme/NotFound"
import emailjs from "@emailjs/browser"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"

type Props = WrapperProps<typeof NotFoundType>

export default function NotFoundWrapper(props: Props): JSX.Element {
    const { siteConfig } = useDocusaurusContext()

    const serverId = siteConfig.customFields!.EMAILJS_SERVER_ID as string
    const templateId = siteConfig.customFields!.EMAILJS_TEMPLATE_ID as string
    const publicKey = siteConfig.customFields!.EMAILJS_PUBLIC_KEY as string

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
