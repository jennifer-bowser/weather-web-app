import secrets from "../../secrets";

export default async function fetchData(url, callbackFn) {
    url = url + `apikey=${secrets["api_key"]}`;

    // const options = {
    //     method: "GET",
    //     mode: "no-cors"
    // }

    // use the await keyword to grab the resolved promise value
    // remember: await can only be used within async functions!
    try {
        const response = await fetch(url/*, options*/);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();

        callbackFn(json);
    }
    catch (error) {
        console.log(error);
        console.log("Oh no, error!");
    }
}
