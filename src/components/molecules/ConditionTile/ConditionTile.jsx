import "./ConditionTile.css";
import Tile from "../../atoms/Tile/Tile";
import WeatherIcon from "../../atoms/WeatherIcon/WeatherIcon";
import PercentPrecip from "../../atoms/PercentPrecip/PercentPrecip";
import ConditionText from "../../atoms/ConditionText/ConditionText";
import { TIMEFRAME_TYPE } from "../../../util/enums";

export default function ConditionTile({ condition, isHourly, extraClassNames = null }) {
    const borderStyle = `2px solid ${condition.getTextColor()}`;

    const tempInfo = isHourly
        ? <p style={{ color: condition.getTextColor() }}>{condition.getTemp()}</p>
        : <div>
            <p>High: <span className="Bold">{condition.getTemp()}</span></p>
            <p>Low: <span className="Bold">{condition.getTemp()}</span></p>
        </div>;

    const tempBorderStyles = isHourly
        ? { borderTop: borderStyle, borderRight: borderStyle }
        : { borderLeft: borderStyle, borderRight: borderStyle };

    const precipBorderStyles = isHourly
        ? { borderTop: borderStyle }
        : null;

    return (
        <div className={`ConditionTile ${extraClassNames}`}>
            <h2 className="ConditionTile-Label">{isHourly ? condition.getTime() : condition.getDate()}</h2>
            <Tile useBoxShadow={true} backgroundColor={condition.getColor()}>
                {isHourly ? null : <ConditionText timeframe={TIMEFRAME_TYPE.future} condition={condition} />}
                <div className="ConditionTile-ContentBox" style={{ color: condition.getTextColor() }}>
                    <WeatherIcon iconSrc={condition.getIcon()} />
                    <div className="ConditionTile-InfoBox" style={tempBorderStyles}>
                        {tempInfo}
                    </div>
                    <div className="ConditionTile-InfoBox" style={precipBorderStyles}>
                        <PercentPrecip condition={condition} />
                    </div>
                </div>
            </Tile>
        </div>
    )
}