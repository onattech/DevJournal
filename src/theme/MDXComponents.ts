// Import the original mapper
import MDXComponents from "@theme-original/MDXComponents"
import TerminalWindow from "../components/TerminalWindow"
import Endpoint from "../components/Endpoint"
import Resizer from "../components/Resizer"
import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"

export default {
    // Re-use the default mapping
    ...MDXComponents,
    // Map the "sampleEmail" tag to our <SampleEmail /> component!
    // `SampleEmail` will receive all props that were passed to `sampleEmail` in MDX
    Endpoint,
    TerminalWindow,
    Tabs,
    TabItem,
    Resizer,
}
