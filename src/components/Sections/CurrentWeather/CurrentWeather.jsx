import "./CurrentWeather.css";
import { FetchLocationCode } from "../../../contexts/LocationContext";
import { FetchCurrentCondition } from "../../../contexts/CurrentConditionContext";
import { TIMEFRAME_TYPE, FORMATS } from "../../../util/enums";
import getCondition from "../../../util/getCondition";
import error_icon from "../../../assets/error_icon.svg";
import ConditionText from "../../atoms/ConditionText/ConditionText";
import WeatherIcon from "../../atoms/WeatherIcon/WeatherIcon";
import HighLowText from "../../atoms/HighLowText/HighLowText";

export default function CurrentWeather() {
    const locationCode = FetchLocationCode();
    const condition = FetchCurrentCondition();

    const getContent = (condition) => {
        let content = null;
        if (condition) {
            content = [
                <ConditionText timeframe={TIMEFRAME_TYPE.now} condition={condition} key={0} />,
                <WeatherIcon iconSrc={condition.getIcon()} key={1} />,
                <HighLowText format={FORMATS.horizontal} highTemp="87°" lowTemp="62°" key={2} />  // TODO: Add actual high/low temps
            ];
        }
        else if (!locationCode) {
            condition = getCondition(6);
            content = [
                <p className="CurrentWeather-DefaultText" key={0}>Tell us where you&apos;re at</p>,
                <WeatherIcon iconSrc={condition.getIcon()} key={1} />,
                <HighLowText format={FORMATS.horizontal} highTemp={null} lowTemp={null} key={2} />
            ];
        }
        else {
            content = [
                <p className="CurrentWeather-ErrorText" key={0}>Hmm, looks like we&apos;re having issues.</p>,
                <p className="CurrentWeather-ErrorText" key={1}>Try again later!</p>,
                <WeatherIcon iconSrc={error_icon} key={2} />,
            ]
        }

        return content;
    }

    return (
        <div className="CurrentWeather">
            <div className="CurrentWeather-ContentBox">
                {getContent(condition)}
            </div>
        </div>
    )
}