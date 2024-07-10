import "./CurrentWeather.css";
import secrets from "../../../secrets";
import getCondition from "../../util/getCondition";
import { useEffect, useState } from "react";
import { FetchLocationCode } from "../../contexts/LocationContext";
import ConditionText from "../ConditionText/ConditionText";
import TIMEFRAME_TYPE from "../../util/timeframeType";
import WeatherIcon from "../WeatherIcon/WeatherIcon";
import HighLowText, {formats} from "../HighLowText/HighLowText";

export default function CurrentWeather() {
    const locationCode = FetchLocationCode();
    const [condition, setCondition] = useState(null);

    // TODO: handle error states
    useEffect(() => {
        async function getCurrentCondition(locationCode) {
            const url = `https://dataservice.accuweather.com/currentconditions/v1/${locationCode}?apikey=${secrets["api_key"]}`;
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    // throw new Error(`Response status: ${response.status}`);
                    console.log(`Response status: ${response.status}`);
                }

                const json = await response.json();

                const conditionCode = json[0]["WeatherIcon"];
                const currentCondition = getCondition(conditionCode);

                const temp = json[0]['Temperature']['Imperial']['Value'];
                currentCondition.setTemp(temp);

                const isDay = json[0]['IsDayTime'];
                currentCondition.setIsDay(isDay);

                setCondition(currentCondition);
            }
            catch {
                console.log("Oh no, error!");
            }
        }

        if(locationCode){
            getCurrentCondition(locationCode);
        }

    }, [locationCode]);

    const successContent = [
        <ConditionText timeframe={TIMEFRAME_TYPE.now} condition={condition} key={0}/>,
        <WeatherIcon iconSrc={condition.getIcon()} key={1}/>,
        <HighLowText format={formats.horizontal} highTemp="87" lowTemp="62" key={2}/>,  // TODO: Add actual high/low temps
    ];

    const errorContent = "Oh no, error!";

    return (
        <div className="CurrentWeather">
            <div className="CurrentWeather-ContentBox">
                {condition ? successContent : errorContent}
            </div>
        </div>
    )
}