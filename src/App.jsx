import AppContent from "./components/AppContent/AppContent";
import LocationContext from "./contexts/LocationContext";
export default function App() {

  return (
    <>
      <LocationContext.Provider value="Puyallup">
        <AppContent />
      </LocationContext.Provider>
    </>
  )
}
