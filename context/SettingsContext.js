import React, { useState, createContext } from "react"

const SettingsContext = createContext({ colorSelection: [] })

const SettingsProvider = ({ children }) => {
  const [colorSelection, setColorSelection] = useState([
    "deepskyblue",
    "darkviolet",
    "blue",
  ])
  const [angle, setAngle] = useState(300)
  const [speed, setSpeed] = useState(5)

  return (
    <SettingsContext.Provider
      value={{
        colorSelection,
        setColorSelection,
        angle,
        setAngle,
        speed,
        setSpeed,
      }}
    >
      {children}
    </SettingsContext.Provider>
  )
}

export { SettingsContext, SettingsProvider }
