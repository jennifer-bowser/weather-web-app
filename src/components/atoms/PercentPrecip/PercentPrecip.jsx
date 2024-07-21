import "./PercentPrecip.css";
import umbrellaDay from "../../../assets/umbrella_day.svg";
import umbrellaNight from "../../../assets/umbrella_night.svg";

export default function PercentPrecip({ condition }) {
    return (
        <div className="PercentPrecip">
            <img src={condition.isDay() ? umbrellaDay : umbrellaNight} width="50" />
            <p style={{ color: condition.getTextColor() }}>{condition.getPercentPrecip()}%</p>
        </div>
    )
}