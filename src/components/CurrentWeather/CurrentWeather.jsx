import "./CurrentWeather.css";
import secrets from "../../../secrets";
import { useContext, useEffect, useState } from "react";
import LocationContext, { FetchLocationCode } from "../../contexts/LocationContext";

export default function CurrentWeather() {
    // const locationCode = useContext(LocationContext);
    const locationCode = FetchLocationCode();
    const [conditionCode, setConditionCode] = useState(null);

    console.log(locationCode);

    // useEffect(() => {
    //     async function getCurrentCondition(locationCode) {
    //         const url = `https://dataservice.accuweather.com/currentconditions/v1/${locationCode}?apikey=${secrets["api_key"]}`;
    //         try {
    //             const response = await fetch(url);
    //             if (!response.ok) {
    //                 // throw new Error(`Response status: ${response.status}`);
    //                 console.log(`Response status: ${response.status}`);
    //             }

    //             const json = await response.json();
    //             setConditionCode(json[0]);
    //         }
    //         catch {
    //             console.log("Oh no, error!");
    //         }
    //     }

    //     const currentCondition = getCurrentCondition(locationCode);
    // }, [locationCode]);
}