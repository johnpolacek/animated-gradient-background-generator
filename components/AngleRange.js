import React, { useContext } from "react"
import { SettingsContext } from "../context/SettingsContext"

const AngleRange = () => {
  const { angle, setAngle } = useContext(SettingsContext)

  return (
    <div style={{ padding: "32px 0", fontSize: "18px" }}>
      <label
        style={{
          display: "inline-block",
          fontWeight: "bold",
          width: "100px",
          textAlign: "right",
        }}
        for="angle"
      >
        Angle
      </label>
      <input
        type="range"
        id="angle"
        name="angle"
        min="0"
        max="360"
        value={angle}
        onChange={(e) => {
          setAngle(e.target.value)
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
        {angle} degrees
      </span>
    </div>
  )
}

export default AngleRange
