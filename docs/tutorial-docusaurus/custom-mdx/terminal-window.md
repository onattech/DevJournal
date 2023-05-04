---
sidebar_position: 2
---

# Terminal Window

This is a custom code block designed to look like a terminal window.

<terminalWindow>

```text {1,5}
~/myLambda $ ./gccli lambda public
👷 Validating inputs...
🚨 You must keep the public endpoint safe!
🔗 Any existing endpoint will be revoked
✋ Do you accept conditions? (y/n) → y
🤖 Public endpoint created successfully!
🔗 https://api.greencloud.dev/gc/d322e8a50390418e83f15daa2bea32fb
$ █
```

</terminalWindow>

:::info requirements

`@mdi/js` and `@mdi/react`

#### Installation

`pnpm install @mdi/js @mdi/react`

:::

### Usage

````
<terminalWindow>

```text {1,5}
~/myLambda $ ./gccli lambda public
👷 Validating inputs...
🚨 You must keep the public endpoint safe!
🔗 Any existing endpoint will be revoked
✋ Do you accept conditions? (y/n) → y
🤖 Public endpoint created successfully!
🔗 https://api.greencloud.dev/gc/d322e8a50390418e83f15daa2bea32fb
$ █
```

</terminalWindow>

````