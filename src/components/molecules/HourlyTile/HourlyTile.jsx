import "./HourlyTile.css";
import Tile from "../../atoms/Tile/Tile";
import WeatherIcon from "../../atoms/WeatherIcon/WeatherIcon";

export default function HourlyTile({condition}){
    return(
        <div className="HourlyTile">
            <h2 className="HourlyTile-Time">{condition.getTime()}</h2>
            <Tile useBoxShadow={true}>
                <WeatherIcon iconSrc={condition.getIcon()} />
                <div className="HourlyTile-Label">{condition.getTemp()}</div>
                <div className="HourlyTile-Label">{condition.getPercentPrecip()}%</div>
            </Tile>
        </div>
    )
}