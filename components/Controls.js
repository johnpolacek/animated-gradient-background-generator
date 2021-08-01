import Colors from "./Colors"
import AddColor from "./AddColor"
import AngleRange from "./AngleRange"
import SpeedRange from "./SpeedRange"
import Random from "./Random"

const Controls = () => (
  <div
    style={{
      background: "rgba(0,0,0,.25)",
      maxWidth: "640px",
      borderRadius: "8px",
      margin: "auto",
      padding: "32px",
    }}
  >
    <Colors />
    <AddColor />
    <AngleRange />
    <SpeedRange />
    <Random />
  </div>
)

export default Controls
