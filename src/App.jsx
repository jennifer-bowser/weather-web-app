import LocationContext from "./contexts/LocationContext";
import { useContext } from "react";

export default function App() {

  return (
    <>
      <LocationContext.Provider value="Puyallup">
        <p>{useContext(LocationContext)}</p>
      </LocationContext.Provider>
    </>
  )
}
