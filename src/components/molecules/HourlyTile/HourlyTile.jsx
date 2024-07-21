import "./HourlyTile.css";
import Tile from "../../atoms/Tile/Tile";
import WeatherIcon from "../../atoms/WeatherIcon/WeatherIcon";
import PercentPrecip from "../../atoms/PercentPrecip/PercentPrecip";

export default function HourlyTile({ condition }) {
    const borderStyle = `2px solid ${condition.getTextColor()}`;
    (condition);

    return (
        <div className="HourlyTile">
            <h2 className="HourlyTile-Time">{condition.getTime()}</h2>
            <Tile useBoxShadow={true} backgroundColor={condition.getColor()}>
                <WeatherIcon iconSrc={condition.getIcon()} />
                <div className="HourlyTile-Label" style={{ borderTop: borderStyle }}>
                    <p style={{ color: condition.getTextColor() }}>{condition.getTemp()}</p>
                </div>
                <div className="HourlyTile-Label" style={{ borderLeft: borderStyle, borderTop: borderStyle }}>
                    <PercentPrecip condition={condition} />
                </div>
            </Tile>
        </div>
    )
}