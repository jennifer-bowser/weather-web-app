// import secrets from "../../secrets.js";
import { createContext } from "react";

const LocationContext = createContext("Puyallup");

// export default async function getLocationKey(location) {
//     const url = `https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${secrets["api_key"]}&q=${location}`;
//     try {
//         const response = await fetch(url);
//         if (!response.ok) {
//             // throw new Error(`Response status: ${response.status}`);
//             console.log(`Response status: ${response.status}`);
//         }

//         const json = await response.json();

//         return json;
//     }
//     catch {
//         console.log("Oh no, error!");
//     }
// }

export default LocationContext;