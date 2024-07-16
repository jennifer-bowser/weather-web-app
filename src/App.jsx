import LocationContextProvider from "./contexts/LocationContext";
import CurrentConditionContextProvider from "./contexts/CurrentConditionContext";
import AppContent from "./components/sections/AppContent/AppContent";

export default function App() {
  return (
    <>
        <LocationContextProvider>
            <CurrentConditionContextProvider>
                <AppContent />
            </CurrentConditionContextProvider>
        </LocationContextProvider>
    </>
  )
}
