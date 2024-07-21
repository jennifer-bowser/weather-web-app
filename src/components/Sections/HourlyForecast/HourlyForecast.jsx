import "./HourlyForecast.css";
import { useState, useEffect } from "react";
import fetchData from "../../../util/fetchData";
import { FetchLocationCode } from "../../../contexts/LocationContext";
import getCondition from "../../../util/getCondition";
import SectionTile from "../../molecules/SectionTile/SectionTile";
import { setCookie, getCookie } from "../../../util/cookies";
// import HourlyTile from "../../molecules/HourlyTile/HourlyTile";
import ConditionTile from "../../molecules/ConditionTile/ConditionTile";
import ScrollBox from "../../atoms/ScrollBox/ScrollBox";

export default function HourlyForecast() {
    const locationCode = FetchLocationCode();
    const [hourlyConditions, setHourlyConditions] = useState(null);

    useEffect(() => {
        const hourlyConditionsCookie = getCookie("hourlyConditions");
        if (hourlyConditionsCookie) {
            setHourlyConditions(hourlyConditionsCookie);
        }
        else if (locationCode) {
            const url = `https://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${locationCode}?`;
            fetchData(url, processData);
        }
    }, [locationCode]);

    const processData = (json) => {
        const hourlyConditions = [];
        for (let i = 0; i < json.length; i++) {
            const entry = json[i];

            const conditionCode = entry["WeatherIcon"];
            const condition = getCondition(conditionCode);

            const temp = entry["Temperature"]["Value"];
            condition.setTemp(temp);

            const isDay = entry["IsDaylight"];
            condition.setIsDay(isDay);

            let time = entry["DateTime"];
            time = time.substr(time.indexOf("T") + 1, 5);
            condition.setTime(time);

            let percentPrecip = entry["PrecipitationProbability"];
            condition.setPercentPrecip(percentPrecip);

            hourlyConditions.push(condition);
        }

        setHourlyConditions(hourlyConditions);
        setCookie("hourlyConditions", hourlyConditions);
    }

    return (
        <SectionTile extraClassnames="HourlyForecast" sectionName="Hourly Forecast">
            <ScrollBox>
                {hourlyConditions && hourlyConditions.map((condition, index) => (
                    // <HourlyTile condition={condition} key={index} />
                    <ConditionTile condition={condition} isHourly={true} extraClassNames={"HourlyTile"} key={index} />
                ))}
            </ScrollBox>
        </SectionTile>
    )
}