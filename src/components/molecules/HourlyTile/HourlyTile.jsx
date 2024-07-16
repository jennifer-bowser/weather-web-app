import "./HourlyTile.css";
import Tile from "../../atoms/Tile/Tile";
import WeatherIcon from "../../atoms/WeatherIcon/WeatherIcon";
import PercentPrecip from "../../atoms/PercentPrecip/PercentPrecip";

export default function HourlyTile({condition}){
    return(
        <div className="HourlyTile">
            <h2 className="HourlyTile-Time">{condition.getTime()}</h2>
            <Tile useBoxShadow={true} backgroundColor={condition.getColor()}>
                <WeatherIcon iconSrc={condition.getIcon()} />
                <div className="HourlyTile-Label">
                    <p>{condition.getTemp()}</p>
                </div>
                <div className="HourlyTile-Label">
                    <PercentPrecip condition={condition}/>
                </div>
            </Tile>
        </div>
    )
}