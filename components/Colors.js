import React, { useContext } from "react"
import { SettingsContext } from "../context/SettingsContext"

const Colors = () => {
  const { colorSelection, setColorSelection } = useContext(SettingsContext)

  const onDelete = (deleteColor) => {
    setColorSelection(colorSelection.filter((color) => color !== deleteColor))
  }

  return (
    <div style={{ paddingBottom: "16px" }}>
      {colorSelection.map((color) => (
        <div
          key={color}
          style={{
            background: color,
            display: "inline-block",
            padding: "32px",
            margin: "16px",
            position: "relative",
            borderRadius: "4px",
            boxShadow: "0 2px 8px rgba(0,0,0,.33)",
          }}
        >
          <button
            onClick={() => onDelete(color)}
            style={{
              background: "crimson",
              color: "white",
              display: "inline-block",
              borderRadius: "50%",
              position: "absolute",
              top: "-8px",
              right: "-8px",
              border: "none",
              fontSize: "18px",
              lineHeight: 1,
              width: "24px",
              height: "24px",
              cursor: "pointer",
              boxShadow: "0 0 1px #000",
            }}
          >
            ×
          </button>
        </div>
      ))}
    </div>
  )
}

export default Colors
