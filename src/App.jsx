import LocationContextProvider from "./contexts/LocationContext";
import AppContent from "./components/sections/AppContent/AppContent";
import CurrentWeather from "./components/sections/CurrentWeather/CurrentWeather";
import CurrentConditionContextProvider from "./contexts/CurrentConditionContext";
import HourlyForecast from "./components/sections/HourlyForecast/HourlyForecast";

export default function App() {
  return (
    <>
      <LocationContextProvider>
        <CurrentConditionContextProvider>
            <AppContent>
                <CurrentWeather />
                <HourlyForecast />
            </AppContent>
        </CurrentConditionContextProvider>
      </LocationContextProvider>
    </>
  )
}
