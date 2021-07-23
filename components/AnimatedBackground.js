import React, { useContext } from "react"
import { SettingsContext } from "../context/SettingsContext"

const AnimatedBackground = ({ children }) => {
  const { colorSelection, speed, angle } = useContext(SettingsContext)

  const background =
    "linear-gradient(" + angle + "deg, " + colorSelection.toString() + ")"

  const backgroundSize =
    colorSelection.length * 60 + "%" + " " + colorSelection.length * 60 + "%"

  const animation =
    "gradient-animation " +
    colorSelection.length * Math.abs(speed - 11) +
    "s ease infinite"

  return (
    <div
      style={{
        background,
        "background-size": backgroundSize,
        animation,
        color: "white",
      }}
    >
      {children}
    </div>
  )
}

export default AnimatedBackground
