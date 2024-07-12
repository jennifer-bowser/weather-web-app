import secrets from "../../secrets.js";
import { useContext, useState, useEffect, createContext } from "react";

const LocationContext = createContext();

export default function LocationContextProvider({ children }) {
    const [locationCode, setLocationCode] = useState(null);
    const location = "Puyallup";


    // useEffect is a lifecycle method for function components, run once after mount
    useEffect(() => {
        // the callback to useEffect can't be async, but you can declare async within
        async function fetchData() {
            const url = `https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${secrets["api_key"]}&q=${location}`;
            // use the await keyword to grab the resolved promise value
            // remember: await can only be used within async functions!
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    // throw new Error(`Response status: ${response.status}`);
                    console.log(`Response status: ${response.status}`);
                }

                const json = await response.json();

                setLocationCode(json[0]["Key"]);
            }
            catch {
                console.log("Oh no, error!");
            }
        }
        // fetchData will only run once after mount as the deps array is empty 
        // fetchData();
        setLocationCode("341343"); // TODO: Fetch real data in prod
    }, [location]);


    return (
        <LocationContext.Provider
            // Add required values to the value prop within an object (my preference)
            value={locationCode}
        >
            {children}
        </LocationContext.Provider>
    );
}

// Create a hook to use the APIContext, this is a Kent C. Dodds pattern
export function FetchLocationCode() {
    const context = useContext(LocationContext);
    if (context === undefined) {
        throw new Error("Context must be used within a Provider");
    }
    return context;
}
