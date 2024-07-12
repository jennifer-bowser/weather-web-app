import secrets from "../../secrets";

export default async function fetchData(url, callbackFn) {
    url = url + `apikey=${secrets["api_key"]}`;

    // use the await keyword to grab the resolved promise value
    // remember: await can only be used within async functions!
    try {
        const response = await fetch(url);
        if (!response.ok) {
            // throw new Error(`Response status: ${response.status}`);
            console.log(`Response status: ${response.status}`);
        }

        const json = await response.json();

        callbackFn(json);
    }
    catch {
        console.log("Oh no, error!");
    }
}
