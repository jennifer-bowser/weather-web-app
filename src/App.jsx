import LocationContextProvider from "./contexts/LocationContext";
import AppContent from "./components/sections/AppContent/AppContent";
import CurrentWeather from "./components/sections/CurrentWeather/CurrentWeather";
import CurrentConditionContextProvider from "./contexts/CurrentConditionContext";
import HourlyForecast from "./components/sections/HourlyForecast/HourlyForecast";
import DailyForecast from "./components/sections/DailyForecast/DailyForecast";

export default function App() {
  return (
    <>
      <LocationContextProvider>
        <CurrentConditionContextProvider>
            <AppContent>
                <CurrentWeather />
                <HourlyForecast />
                <DailyForecast />
            </AppContent>
        </CurrentConditionContextProvider>
      </LocationContextProvider>
    </>
  )
}
