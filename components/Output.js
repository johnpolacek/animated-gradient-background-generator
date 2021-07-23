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
  background: ${background};
  background-size: ${backgroundSize};
  animation: ${animation};
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
    <div
      style={{ position: "relative", maxWidth: "640px", margin: "64px auto" }}
    >
      <pre
        style={{
          background: "#fff",
          color: "#222",
          padding: "32px",
          width: "100%",
          borderRadius: "4px",
          textAlign: "left",
          whiteSpace: "pre",
          boxShadow: "0 2px 8px rgba(0,0,0,.33)",
          overflowX: "scroll",
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
    </div>
  )
}

export default Output
