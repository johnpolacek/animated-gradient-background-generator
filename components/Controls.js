import Colors from "./Colors"
import AddColor from "./AddColor"
import AngleRange from "./AngleRange"
import SpeedRange from "./SpeedRange"

const Controls = () => (
  <div
    style={{
      background: "rgba(0,0,0,.25)",
      maxWidth: "640px",
      borderRadius: "8px",
      margin: "auto",
      padding: "16px 16px 48px",
    }}
  >
    <Colors />
    <AddColor />
    <AngleRange />
    <SpeedRange />
  </div>
)

export default Controls
