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
            ? parseCondition
            : parseConditions;
    }
}

function explodeCookies(cookies) {
    const values = [];

    // cookies come in the form of a string: 
    // "cookie1 = value1; cookie2 = value2 ..."
    const cookiesArray = cookies.split(";");

    cookiesArray.forEach(cookie => {
        const rawValue = cookie.slice(cookie.indexOf("=") + 1);
        const valueObject = JSON.parse(rawValue);
        values.push(valueObject);
    });

    return values;
}

function stringifyValue(value) {
    const preppedValue = Array.isArray(value)
        ? preprocessCondtions(value)
        : preprocessCondition(value);
    return JSON.stringify(preppedValue);
}

function preprocessCondtions(conditionsArray) {
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
    condition.setTime(jsonObject["time"]);
    condition.setTemp(jsonObject["temp"]);
    condition.setPercentPrecip(jsonObject["percentPrecip"]);
    return condition;
}