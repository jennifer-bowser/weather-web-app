import "./DailyForecast.css";
import { useState, useEffect } from "react";
import fetchData from "../../../util/fetchData";
import { FetchLocationCode } from "../../../contexts/LocationContext";
import { setCookie, getCookie } from "../../../util/cookies";
import getCondition from "../../../util/getCondition";
import SectionTile from "../../molecules/SectionTile/SectionTile.jsx";

export default function HourlyForecast() {
    const locationCode = FetchLocationCode();
    const [dailyConditions, setDailyConditions] = useState(null);

    useEffect(() => {
        const dailyConditionsCookieData = getCookie("dailyConditions");
        if (dailyConditionsCookieData) {
            setDailyConditions(dailyConditionsCookieData);
        }
        else if (locationCode) {
            const url = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationCode}?`;
            fetchData(url, processData);
        }
    }, [locationCode]);

    const processData = (json) => {
        const hourlyConditions = [];
        for (let i = 0; i < json.length; i++) {
            const entry = json[i];

            const conditionCode = entry["WeatherIcon"];
            const condition = getCondition(conditionCode);

            // const temp = entry["Temperature"]["Value"];
            // condition.setTemp(temp);

            const isDay = entry["IsDaylight"];
            condition.setIsDay(isDay);

            // let time = entry["DateTime"];
            // time = time.substr(time.indexOf("T") + 1, 5);
            // condition.setTime(time);

            let percentPrecip = entry["PrecipitationProbability"];
            condition.setPercentPrecip(percentPrecip);

            hourlyConditions.push(condition);
        }

        setDailyConditions(hourlyConditions);
        setCookie("dailyConditions", hourlyConditions);
    }

    return (
        <SectionTile extraClassnames="DailyForecast" sectionName="Daily Forecast">
        </SectionTile>
    )
}