import secrets from "../../secrets.js";
import { useContext, useState, useEffect, createContext } from "react";
import { FetchLocationCode } from "./LocationContext.jsx";
import getCondition from "../util/getCondition.js";
import fetchData from "../util/fetchData.js";

const CurrentConditonContext = createContext();

export default function CurrentConditionContextProvider({ children }) {
    const locationCode = FetchLocationCode();
    const [condition, setCondition] = useState(null);

    // TODO: handle error states
    useEffect(() => {
        const url = `https://dataservice.accuweather.com/currentconditions/v1/${locationCode}?`;

        if (locationCode) {
            // fetchData(url, processData);

            // TODO: Fetch real data in prod
            const tempCondition = getCondition(1);
            tempCondition.setTemp(68);
            tempCondition.setIsDay(true);
            setCondition(tempCondition);
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