import getCondition from "./getCondition";

export function setCookie(key, condition) {
    document.cookie = `${key} = ${stringifyValue(condition)}`;
}

export function getCookie(key) {
    const cookiesString = document.cookie;

    let keyCookie = null;
    if (cookiesString) {
        const cookiesObj = explodeCookies(cookiesString);
        keyCookie = cookiesObj[key] ?? null;
    }

    if (!keyCookie) {
        return null;
    }
    else {
        return Array.isArray(keyCookie)
            ? parseConditions(keyCookie)
            : parseCondition(keyCookie);
    }
}

function explodeCookies(cookies) {
    const values = {};

    // cookies come in the form of a string: 
    // "cookie1 = value1; cookie2 = value2 ..."
    const cookiesArray = cookies.split("; ");

    cookiesArray.forEach(cookie => {
        const key = cookie.slice(0, cookie.indexOf("="));
        const rawValue = cookie.slice(cookie.indexOf("=") + 1);
        const valueObject = JSON.parse(rawValue);
        values[key] = valueObject;
    });

    return values;
}

function stringifyValue(value) {
    const preppedValue = Array.isArray(value)
        ? preprocessConditions(value)
        : preprocessCondition(value);
    return JSON.stringify(preppedValue);
}

function preprocessConditions(conditionsArray) {
    const jsonArray = [];
    conditionsArray.forEach((condition) => {
        jsonArray.push(preprocessCondition(condition));
    });
    return jsonArray;
}

function preprocessCondition(condition) {
    const jsonObj = {};
    jsonObj["id"] = condition.getId();
    jsonObj["time"] = condition.getTime();
    jsonObj["temp"] = condition.getTemp();
    jsonObj["percentPrecip"] = condition.getPercentPrecip();
    jsonObj["isDay"] = condition.isDay();
    return jsonObj;
}

function parseConditions(conditionObjArray) {
    const parsedConditions = [];
    conditionObjArray.forEach((condition) => {
        parsedConditions.push(parseCondition(condition));
    });
    return parsedConditions;
}

function parseCondition(conditionObj) {
    const condition = getCondition(conditionObj["id"]);
    condition.setTime(conditionObj["time"]);
    condition.setTemp(conditionObj["temp"]);
    condition.setPercentPrecip(conditionObj["percentPrecip"]);
    condition.setIsDay(conditionObj["isDay"]);
    return condition;
}