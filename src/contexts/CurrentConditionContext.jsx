import secrets from "../../secrets.js";
import { useContext, useState, useEffect, createContext } from "react";
import { FetchLocationCode } from "./LocationContext.jsx";
import getCondition from "../util/getCondition.js";

const CurrentConditonContext = createContext();

export default function CurrentConditionContextProvider({ children }) {
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
                const condition = getCondition(conditionCode);

                const temp = json[0]['Temperature']['Imperial']['Value'];
                condition.setTemp(temp);

                const isDay = json[0]['IsDayTime'];
                condition.setIsDay(isDay);

                setCondition(condition);
            }
            catch {
                console.log("Oh no, error!");
            }
        }

        if (locationCode) {
            getCurrentCondition(locationCode);
        }

    }, [locationCode]);

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
    if (context === undefined) {
        throw new Error("Context must be used within a Provider");
    }
    return context;
}