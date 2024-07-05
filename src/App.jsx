import getConditionAttrs from "./util/conditions"

export default function App() {
  return (
    <>
      <h1>{getConditionAttrs(1, ["text"])}</h1>
    </>
  )
}
