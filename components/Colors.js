import React, { useContext } from "react"
import { SettingsContext } from "../context/SettingsContext"

const Colors = (props) => {
  const { colorSelection } = useContext(SettingsContext)
  return <>Colors: {colorSelection.toString()}</>
}

export default Colors
