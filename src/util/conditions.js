import colors from "./colors";

import clear_day from "../assets/weather_icons/clear_day.svg";
import clear_night from "../assets/weather_icons/clear_night.svg";

import low_sun_day from "../assets/weather_icons/low_sun_day.svg";
import low_sun_night from "../assets/weather_icons/low_sun_night.svg";

import mid_sun_day from "../assets/weather_icons/mid_sun_day.svg";

import hazy_day from "../assets/weather_icons/hazy_day.svg";
import hazy_night from "../assets/weather_icons/hazy_night";

import cloudy_day from "../assets/weather_icons/cloudy_day.svg";
import cloudy_night from "../assets/weather_icons/cloudy_night.svg";

import rainy_day from "../assets/weather_icons/rainy_day.svg";
import rainy_night from "../assets/weather_icons/rainy_night/svg";

/**
 * key = id (AccuWeather's "WeatherIcon" number)
 * value = {
 *      text: Accuweather's "WeatherText" string (lowercased),
 *      icon: {
 *          day: dayIcon,
 *          night: nightIcon
 *      },
 *      color: {
 *          day: hex code,
 *          night: hex code
 *      }
 * }
 */
const conditions = {
    1: {
        text: "sunny",
        icon: {
            day: clear_day,
            night: null
        },
        color: {
            day: colors.full_sun_yellow,
            night: null
        },
        linking_word: "and"
    },
    2: {
        text: "mostly sunny",
        icon: {
            day: mid_sun_day,
            night: null
        },
        color: {
            day: colors.mid_sun_day,
            night: null
        },
        linking_word: "and"
    },
    3: {
        text: "partly sunny",
        icon: {
            day: mid_sun_day,
            night: null
        },
        color: {
            day: colors.mid_sun_day,
            night: null
        },
        linking_word: "and"
    },
    4: {
        text: "intermittent clouds",
        icon: {
            day: mid_sun_day,
            night: null
        },
        color: {
            day: colors.mid_sun_day,
            night: null
        },
        linking_word: "and"
    },
    5: {
        text: "hazy sunshine",
        icon: {
            day: hazy_day,
            night: null,
        },
        color: {
            day: colors.hazy_brown,
            night: null
        },
        linking_word: "with"
    },
    6: {
        text: "mostly cloudy",
        icon: {
            day: low_sun_day,
            night: null
        },
        color: {
            day: colors.low_sun_yellow,
            night: null
        },
        linking_word: "and"
    },
    7: {
        text: "cloudy",
        icon: {
            day: cloudy_day,
            night: cloudy_night
        },
        color: {
            day: colors.cloudy_gray,
            night: colors.night_blue
        },
        linking_word: "and"
    },
    8: {
        text: "overcast",
        icon: {
            day: cloudy_day,
            night: cloudy_night
        },
        color: {
            day: colors.cloudy_gray,
            night: colors.night_blue
        },
        linking_word: "and"
    },
    11: {
        text: "foggy",
        icon: {
            day: hazy_day,
            night: hazy_night
        },
        color: {
            day: colors.hazy_brown,
            night: colors.night
        },
        linking_word: "and"
    },
    12: {
        text: "showers",
        icon: {
            day: rainy_day,
            night: rainy_night
        },
        color: {
            day: colors.precip_blue_gray,
            night: colors.night
        },
        linking_word: "with"
    },
    13: {
        text: "mostly cloudy with showers",
        icon: {
            day: rainy_day,
            night: rainy_night
        },
        color: {
            day: colors.precip_blue_gray,
            night: colors.night
        },
        linking_word: "and"
    },
    14: {
        text: "partly sunny with showers",
        icon: {
            day: low_sun_day,
            night: hazy_night
        },
        color: {
            day: colors.low_sun_yellow,
            night: colors.night
        },
        linking_word: "and"
    }
}

export function getConditionText(id) {
    return conditions[id]["text"];
}

export function getConditionIcon(id, isDay = true) {
    return conditions[id]["icon"][isDay ? "day" : "night"];
}

export function getConditionColor(id, isDay = true) {
    return conditions[id]["color"][isDay ? "day" : "night"];
}

export function getLinkingWord(id) {
    return conditions[id]["linking_word"];
}
