import React, { useContext, useState } from "react"
import { SettingsContext } from "../context/SettingsContext"

const Output = () => {
  const [copied, setCopied] = useState(false)

  const { colorSelection, speed, angle } = useContext(SettingsContext)

  const background =
    "linear-gradient(" + angle + "deg," + colorSelection.toString() + ")"

  const backgroundSize =
    colorSelection.length * 60 + "%" + " " + colorSelection.length * 60 + "%"

  const animation =
    "gradient-animation " +
    colorSelection.length * Math.abs(speed - 11) +
    "s ease infinite"

  const code = `.gradient-background {
  background: ${background}
  animation: ${animation}
}

@keyframes gradient-animation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}`

  return (
    <pre
      style={{
        position: "relative",
        background: "#fff",
        color: "#222",
        padding: "32px",
        maxWidth: "640px",
        margin: "64px auto",
        borderRadius: "4px",
        textAlign: "left",
        whiteSpace: "pre",
      }}
    >
      <code>{code}</code>
      <button
        style={{
          position: "absolute",
          top: "8px",
          right: "8px",
          background: "royalblue",
          color: "white",
          padding: "8px 12px",
          borderRadius: "8px",
          border: "none",
          fontSize: "16px",
          cursor: "pointer",
          lineHeight: 1,
        }}
        onClick={() => {
          setCopied(true)
          navigator.clipboard.writeText(code)
        }}
      >
        {copied ? "copied" : "copy"}
      </button>
    </pre>
  )
}

export default Output
