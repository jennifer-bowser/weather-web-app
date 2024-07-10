import "./CurrentWeather.css";
import secrets from "../../../secrets";
import getCondition from "../../util/getCondition";
import { useEffect, useState } from "react";
import { FetchLocationCode } from "../../contexts/LocationContext";
import ConditionText from "../ConditionText/ConditionText";
import TIMEFRAME_TYPE from "../../util/timeframeType";

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

    return (
        <div>
            {condition && <ConditionText timeframe={TIMEFRAME_TYPE.now} condition={condition}/>}
        </div>
    )
}