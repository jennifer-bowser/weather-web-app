import "./CurrentWeather.css";
import secrets from "../../../secrets";
import getCondition from "../../util/getCondition";
import { useContext, useEffect, useState } from "react";
import LocationContext, { FetchLocationCode } from "../../contexts/LocationContext";

export default function CurrentWeather() {
    const locationCode = FetchLocationCode();
    const [condition, setCondition] = useState(null);

    console.log(locationCode);

    useEffect(() => {
        async function getCurrentCondition(locationCode) {
            console.log(locationCode);
            const url = `https://dataservice.accuweather.com/currentconditions/v1/${locationCode}?apikey=${secrets["api_key"]}`;
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    // throw new Error(`Response status: ${response.status}`);
                    console.log(`Response status: ${response.status}`);
                }

                const json = await response.json();
                const conditionCode = json["WeatherIcon"];
                // setConditionCode(conditionCode);

                const currentCondition = getCondition(conditionCode);
                setCondition(currentCondition);
            }
            catch {
                console.log("Oh no, error!");
            }
        }

        getCurrentCondition();

    }, [locationCode]);

    console.log(condition);
}