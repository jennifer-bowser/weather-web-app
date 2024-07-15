import { useContext, useState, useEffect, createContext } from "react";
import { FetchLocationCode } from "./LocationContext.jsx";
import getCondition from "../util/getCondition.js";
import fetchData from "../util/fetchData.js";
import { setCookie, getCookie } from "../util/cookies.js";


const CurrentConditonContext = createContext();

export default function CurrentConditionContextProvider({ children }) {
    const locationCode = FetchLocationCode();
    const [condition, setCondition] = useState(null);

    // TODO: handle error states
    useEffect(() => {
        const currentConditionCookie = getCookie("currentCondition");
        if (currentConditionCookie) {
            setCondition(currentConditionCookie);
        }
        else if (locationCode) {
            const url = `https://dataservice.accuweather.com/currentconditions/v1/${locationCode}?`;
            fetchData(url, processData);
        }

    }, [locationCode]);

    const processData = (json) => {
        const conditionCode = json[0]["WeatherIcon"];
        const condition = getCondition(conditionCode);

        const temp = json[0]["Temperature"]["Imperial"]["Value"];
        condition.setTemp(temp);

        const isDay = json[0]["IsDayTime"];
        condition.setIsDay(isDay);

        setCondition(condition);
        setCookie("currentCondition", condition);
    }

    return (
        <CurrentConditonContext.Provider
            // Add required values to the value prop within an object (my preference)
            value={condition}
        >
            {children}
        </CurrentConditonContext.Provider>
    );
}

// Create a hook to use the APIContext, this is a Kent C. Dodds pattern
export function FetchCurrentCondition() {
    const context = useContext(CurrentConditonContext);
    // if (context === undefined) {
    //     throw new Error("Context must be used within a Provider");
    // }
    return context;
}