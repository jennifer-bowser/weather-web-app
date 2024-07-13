import getCondition from "./getCondition";

export function setCookie(key, condition) {
    document.cookie = `${key} = ${stringifyValue(condition)}`;
}

export function getCookie(key) {
    const cookiesString = document.cookie;

    if (cookiesString) {
        const cookiesObj = parseCookies(cookiesString);
        return cookiesObj[key] ?? null;
    }
}

function parseCookies(cookies) {
    const values = [];

    // cookies come in the form of a string: 
    // "cookie1 = value1; cookie2 = value2 ..."
    const cookiesArray = cookies.split(";");

    cookiesArray.forEach(cookie => {
        const value = cookie.slice(cookie.indexOf("="));
        const condition = parseCondition(value);
        values.push(condition);
    });

    return values;
}

function stringifyValue(value) {
    const preppedValue = typeof value === "object"
        ? stringifyConditions(value)
        : stringifyCondition(value);
    return JSON.stringify(preppedValue);
}

function stringifyConditions(conditionsArray) {
    const jsonArray = [];
    conditionsArray.forEach((condition) => {
        jsonArray.push(stringifyCondition(condition));
    });
    console.log(jsonArray);
    return jsonArray;
}

function stringifyCondition(condition) {
    const jsonObj = {};
    jsonObj["id"] = condition.getId();
    jsonObj["time"] = condition.getTime();
    jsonObj["temp"] = condition.getTemp();
    jsonObj["percentPrecip"] = condition.getPercentPrecip();
    return jsonObj;
}

function parseCondition(jsonString) {
    const jsonObject = JSON.parse(jsonString);
    const condition = getCondition(jsonObject["id"]);
    condition.setTime(jsonObject["time"]);
    condition.setTemp(jsonObject["temp"]);
    condition.setPercentPrecip(jsonObject["percentPrecip"]);
    return condition;
}