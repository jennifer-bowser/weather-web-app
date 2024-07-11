import LocationContextProvider from "./contexts/LocationContext";
import AppContent from "./components/sections/AppContent/AppContent";
import CurrentWeather from "./components/sections/CurrentWeather/CurrentWeather";

export default function App() {
  return (
    <>
      <LocationContextProvider>
        <AppContent>
          <CurrentWeather />
        </AppContent>
      </LocationContextProvider>
    </>
  )
}
