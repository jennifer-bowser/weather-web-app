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
            night: "",
        },
        color: colors.sunny_yellow
    },
    2: {
        text: "mostly sunny",
        icon: {
            day: "",
            night: "",
        },
        color: ""
    },
}

export default conditions;