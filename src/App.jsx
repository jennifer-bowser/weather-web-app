import LocationContextProvider from "./contexts/LocationContext";
import AppContent from "./components/sections/AppContent/AppContent";
import CurrentWeather from "./components/sections/CurrentWeather/CurrentWeather";
import CurrentConditionContextProvider from "./contexts/CurrentConditionContext";

export default function App() {
  return (
    <>
      <LocationContextProvider>
        <CurrentConditionContextProvider>
            <AppContent>
                <CurrentWeather />
            </AppContent>
        </CurrentConditionContextProvider>
      </LocationContextProvider>
    </>
  )
}
