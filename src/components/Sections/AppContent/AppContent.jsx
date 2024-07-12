import "./AppContent.css";
import colors from "../../../util/colors";
import { FetchCurrentCondition } from "../../../contexts/CurrentConditionContext";
import CurrentWeather from "../CurrentWeather/CurrentWeather";
import HourlyForecast from "../HourlyForecast/HourlyForecast";
import DailyForecast from "../DailyForecast/DailyForecast"

export default function AppContent() {
    const defaultColor = colors.mostly_cloudy_white;
    const condition = FetchCurrentCondition();

    return (
        <div className="AppContent" style={{ backgroundColor: condition ? condition.getColor() : defaultColor }}>
            <CurrentWeather />
            <HourlyForecast />
            <DailyForecast />
        </div>
    )
}