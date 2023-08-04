import React from "react"

export default function Resizer({ percent, children }: { percent: number; children: React.ReactNode }) {
    return <div style={{ width: `${percent}%` }}>{children}</div>
}
