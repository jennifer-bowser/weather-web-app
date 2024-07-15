import "./HourlyTile.css";
import Tile from "../../atoms/Tile/Tile";
import WeatherIcon from "../../atoms/WeatherIcon/WeatherIcon";

export default function HourlyTile({condition}){
    return(
        <div className="HourlyTile">
            <p>{condition.getTime()}</p>
            <Tile useBoxShadow={true}>
                <WeatherIcon iconSrc={condition.getIcon()} />
                <div>
                    <p>{condition.getTemp()}</p>
                    <p>{condition.getPercentPrecip()}</p>
                </div>
            </Tile>
        </div>
    )
}