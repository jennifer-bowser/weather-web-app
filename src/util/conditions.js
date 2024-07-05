import colors from "./colors";

/**
 * key = id (AccuWeather's "WeatherIcon" number)
 * value = {
 *      text: Accuweather's "WeatherText" string (lowercased),
 *      icon: {
 *          day: dayIcon,
 *          night: nightIcon
 *      },
 *      color: color (hex code)
 * }
 */
const conditions = {
    1: {
        text: "sunny",
        icon: {
            day: "",
            night: null,
        },
        color: colors.sunny_yellow
    },
    2: {
        text: "mostly sunny",
        icon: {
            day: "",
            night: "",
        },
        color: colors.mid_sun_yellow
    },
    3: {
        text: "partly sunny",
        icon: {
            day: "",
            night: "",
        },
        color: colors.minor_sun_yellow
    },
    4: {
        text: "intermittent clouds",
        icon: {
            day: "",
            night: "",
        },
        color: colors.minor_sun_yellow
    },
}

/**
 * @param {String} id        - The condition id
 * @param {Array} attributes - The condition attributes to return
 * @returns {Array} - An array of attribute values
 */
export default function getConditionAttrs(id, attributes) {
    const condition = conditions[id];

    const aAttributes = [];
    attributes.forEach(attributeName => {
        aAttributes.push(condition[attributeName]);
    });

    return aAttributes;
}
