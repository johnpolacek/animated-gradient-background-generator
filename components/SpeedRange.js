import React, { useContext } from "react"
import { SettingsContext } from "../context/SettingsContext"

const SpeedRange = () => {
  const { speed, setSpeed } = useContext(SettingsContext)

  return (
    <div style={{ fontSize: "18px" }}>
      <label
        style={{
          display: "inline-block",
          fontWeight: "bold",
          width: "100px",
          textAlign: "right",
        }}
        htmlFor="speed"
      >
        Speed
      </label>
      <input
        type="range"
        id="speed"
        name="speed"
        min="1"
        max="10"
        value={speed}
        onChange={(e) => {
          setSpeed(e.target.value)
        }}
        style={{
          margin: "0 16px",
          width: "180px",
          position: "relative",
          top: "2px",
        }}
      />
      <span
        style={{
          fontSize: "14px",
          padding: "0 8px",
          position: "relative",
          top: "-2px",
          width: "120px",
          display: "inline-block",
        }}
      >
        {speed}
      </span>
    </div>
  )
}

export default SpeedRange
