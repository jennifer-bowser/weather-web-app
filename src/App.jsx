import AppContent from "./components/AppContent/AppContent";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import LocationContextProvider from "./contexts/LocationContext";
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
