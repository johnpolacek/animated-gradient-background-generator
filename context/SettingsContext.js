import React, { useState, createContext } from "react"

const SettingsContext = createContext({ colorSelection: [] })

const SettingsProvider = ({ children }) => {
  const [colorSelection, setColorSelection] = useState([
    "#ee7752",
    "#e73c7e",
    "#23a6d5",
    "#23d5ab",
  ])
  const [angle, setAngle] = useState(-45)
  const [speed, setSpeed] = useState(15)

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
