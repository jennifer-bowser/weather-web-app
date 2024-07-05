import colors from "./colors";

import clear_day from "../assets/weather_icons/clear_day.svg";
import clear_night from "../assets/weather_icons/clear_night.svg";

import low_sun_day from "../assets/weather_icons/low_sun_day.svg";
import low_moon_night from "../assets/weather_icons/low_moon_night.svg";

import mid_sun_day from "../assets/weather_icons/mid_sun_day.svg";

import haze_day from "../assets/weather_icons/haze_day.svg";
import haze_night from "../assets/weather_icons/haze_night.svg";

import cloud_day from "../assets/weather_icons/cloud_day.svg";
import cloud_night from "../assets/weather_icons/cloud_night.svg";

import rain_day from "../assets/weather_icons/rain_day.svg";
import rain_night from "../assets/weather_icons/rain_night.svg";

import partial_rain_day from "../assets/weather_icons/partial_rain_day.svg";
import partial_rain_night from "../assets/weather_icons/partial_rain_night.svg";

import thunderstorm_day from "../assets/weather_icons/thunderstorm_day.svg";
import thunderstorm_night from "../assets/weather_icons/thunderstorm_night.svg";


class Condition {
    constructor(text, dayIcon, nightIcon, dayColor, linkingWord) {
        this.text = text;
        this.dayIcon = dayIcon;
        this.nightIcon = nightIcon;
        this.dayColor = dayColor;
        this.nightColor = colors.night_blue;
        this.linkingWord = linkingWord;
    }

    getText() {
        return this.text
    }

    getIcon(isDay = true) {
        return isDay
            ? this.dayIcon
            : this.nightIcon
    }

    getColor(isDay = true) {
        return isDay
            ? this.dayColor
            : this.nightColor
    }

    getLinkingWord() {
        return this.linkingWord;
    }
}

/**
 * key = id (AccuWeather's "WeatherIcon" number)
 * value = Condition object
 */
const conditions = {
    1: new Condition("sunny", clear_day, null, colors.full_sun_yellow, "and"),
    2: new Condition("mostly sunny", mid_sun_day, null, colors.mid_sun_yellow, "and"),
    3: new Condition("partly sunny", mid_sun_day, null, colors.mid_sun_yellow, "and"),
    4: new Condition("intermittent clouds", mid_sun_day, null, colors.mid_sun_yellow, "and"),
    5: new Condition("hazy sunshine", haze_day, null, colors.hazy_brown, "with"),
    6: new Condition("mostly cloudy", low_sun_day, null, colors.low_sun_yellow, "and"),
    7: new Condition("cloudy", cloud_day, cloud_night, colors.cloudy_gray, "and"),
    8: new Condition("overcast", cloud_day, cloud_night, colors.cloudy_gray, "and"),
    11: new Condition("foggy", haze_day, haze_night, colors.hazy_brown, "and"),
    12: new Condition("showers", rain_day, rain_night, colors.precip_blue_gray, "with"),
    13: new Condition("mostly cloudy with showers", rain_day, rain_night, colors.precip_blue_gray, "and"),
    14: new Condition("partly sunny with showers", partial_rain_day, partial_rain_night, colors.low_sun_yellow, "and"),
    15: new Condition("thunderstorms", thunderstorm_day, thunderstorm_night, colors.storm_gray, "with")
}

export default function getCondition(id) {
    return conditions[id] ?? null;
}
