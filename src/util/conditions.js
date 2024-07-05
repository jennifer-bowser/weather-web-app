import colors from "./colors";

import clear_day from "../assets/weather_icons/clear_day.svg";
import clear_night from "../assets/weather_icons/clear_night.svg";

import few_clouds_day from "../assets/weather_icons/few_clouds_day.svg";
import few_clouds_night from "../assets/weather_icons/few_clouds_night.svg";

import more_clouds_day from "../assets/weather_icons/more_clouds_day.svg";
import more_clouds_night from "../assets/weather_icons/more_clouds_night.svg";

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

import snow_day from "../assets/weather_icons/snow_day.svg";
import snow_night from "../assets/weather_icons/snow_night.svg";

import partial_snow_day from "../assets/weather_icons/partial_snow_day.svg";
import partial_snow_night from "../assets/weather_icons/partial_snow_night.svg";

import sleet_day from "../assets/weather_icons/sleet_day.svg";
import sleet_night from "../assets/weather_icons/sleet_night.svg";

import wind_day from "../assets/weather_icons/wind_day.svg";
import wind_night from "../assets/weather_icons/wind_night.svg";

class Condition {
    IS_DAY = true;

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

    getTextColor(isDay = true) {
        return isDay
            ? colors.black
            : colors.night_outline
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
    2: new Condition("mostly sunny", few_clouds_day, null, colors.mid_sun_yellow, "and"),
    3: new Condition("partly sunny", few_clouds_day, null, colors.mid_sun_yellow, "and"),
    4: new Condition("intermittent clouds", few_clouds_day, null, colors.mid_sun_yellow, "with"),
    5: new Condition("hazy sunshine", haze_day, null, colors.hazy_brown, "with"),
    6: new Condition("mostly cloudy", more_clouds_day, null, colors.low_sun_yellow, "and"),
    7: new Condition("cloudy", cloud_day, cloud_night, colors.cloudy_gray, "and"),
    8: new Condition("overcast", cloud_day, cloud_night, colors.cloudy_gray, "and"),
    11: new Condition("foggy", haze_day, haze_night, colors.hazy_brown, "and"),
    12: new Condition("showers", rain_day, rain_night, colors.precip_blue_gray, "with"),
    13: new Condition("mostly cloudy with showers", rain_day, rain_night, colors.precip_blue_gray, "and"),
    14: new Condition("partly sunny with showers", partial_rain_day, null, colors.low_sun_yellow, "and"),
    15: new Condition("thunderstorms", thunderstorm_day, thunderstorm_night, colors.storm_gray, "with"),
    16: new Condition("mostly cloudy with thunderstorms", thunderstorm_day, thunderstorm_night, colors.storm_gray, "and"), /* TODO: new icon */
    17: new Condition("partly sunny with thunderstorms", thunderstorm_day, false, colors.storm_gray, "and"),  /* TODO: new icon */
    18: new Condition("rainy", rain_day, rain_night, colors.precip_blue_gray, "and"),
    19: new Condition("flurries", snow_day, snow_night, colors.icy_white, "with"),
    20: new Condition("mostly cloudy with flurries", partial_snow_day, partial_snow_night, colors.partial_snow_white, "and"),
    21: new Condition("partly sunny with flurries", partial_snow_day, false, colors.partial_snow_white, "and"),
    22: new Condition("snowing", snow_day, snow_night, colors.icy_white, "and"),
    23: new Condition("mostly cloudy with snow", partial_snow_day, partial_snow_night, colors.partial_snow_white, "and"),
    24: new Condition("ice", sleet_day, sleet_night, colors.icy_white, "with"),
    25: new Condition("sleet", sleet_day, sleet_night, colors.icy_white, "with"),
    26: new Condition("freezing rain", sleet_day, sleet_night, colors.icy_white, "with"),
    29: new Condition("rain and snow", sleet_day, sleet_night, colors.icy_white, "with"),
    30: new Condition("hot", clear_day, clear_night, colors.full_sun_yellow, "and"), /*TODO: new icon and/or color? */
    31: new Condition("cold", snow_day, snow_night, colors.icy_white, "and"),   /*TODO: new icon and/or color? */
    32: new Condition("windy", wind_day, wind_night, colors.cloudy_gray, "and"),
    33: new Condition("clear", null, clear_night, null, "and"),
    34: new Condition("mostly clear", null, few_clouds_night, null, "and"),
    35: new Condition("partly cloudy", null, more_clouds_night, null, "and"),
    36: new Condition("intermittent clouds", null, few_clouds_night, null, "with"),
    37: new Condition("hazy moonlight", null, haze_night, null, "with"),
    38: new Condition("mostly cloudy", null, more_clouds_night, null, "and"),
    39: new Condition("partly cloudy with showers", null, partial_rain_night, null, "and"),
    40: new Condition("mostly cloudy with showers", null, partial_rain_night, null, "and"),
    41: new Condition("partly cloudy with thunderstorms", null, thunderstorm_night, null, "and"),
    42: new Condition("mostly cloudy with thunderstorms", null, thunderstorm_night, null, "and"),
    43: new Condition("mostly cloudy with flurries", null, partial_snow_night, null, "and"),
    44: new Condition("mostly cloudy with snow", null, partial_snow_night, null, "and"),
}

export default function getCondition(id) {
    return conditions[id] ?? null;
}
