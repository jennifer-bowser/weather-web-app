import fetchData from "../util/fetchData";
import { useContext, useState, useEffect, createContext } from "react";

const LocationContext = createContext();

export default function LocationContextProvider({ children }) {
    const [locationCode, setLocationCode] = useState(null);
    const location = "Puyallup";


    // useEffect is a lifecycle method for function components, run once after mount
    useEffect(() => {
        const url = `https://dataservice.accuweather.com/locations/v1/cities/search?q=${location}&`;

        // fetchData will only run once after mount as the deps array is empty 
        // fetchData(url, processData);
        setLocationCode("341343"); // TODO: Fetch real data in prod
    }, [location]);

    const processData = (json) => {
        const locationCode = json[0]["Key"];
        setLocationCode(locationCode);
    }

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
