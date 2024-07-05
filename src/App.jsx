import { getConditionText, getConditionIcon, getConditionColor } from "./util/conditions"

export default function App() {
  return (
    <>
      <h1>{getConditionText(1)}</h1>
      <img src={getConditionIcon(1)} style={{ width: "100px" }} />
      <div style={{ backgroundColor: getConditionColor(1), width: "100px", height: "100px", border: "1px solid black" }}></div >
      <div>{getConditionColor(1)}</div>
    </>
  )
}
