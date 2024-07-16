import colors from "./colors";
import Condition from "./Condition";

import clear_day from "../assets/weather_icons/clear_day.svg";
import clear_night from "../assets/weather_icons/clear_night.svg";

import mostly_clear_day from "../assets/weather_icons/mostly_clear_day.svg";
import mostly_clear_night from "../assets/weather_icons/mostly_clear_night.svg"

import partly_clear_day from "../assets/weather_icons/partly_clear_day.svg";
import partly_clear_night from "../assets/weather_icons/partly_clear_night.svg"

import mostly_cloudy_day from "../assets/weather_icons/mostly_cloudy_day.svg";
import mostly_cloudy_night from "../assets/weather_icons/mostly_cloudy_night.svg"

import cloud_day from "../assets/weather_icons/cloud_day.svg";
import cloud_night from "../assets/weather_icons/cloud_night.svg";

import haze_day from "../assets/weather_icons/haze_day.svg";
import haze_night from "../assets/weather_icons/haze_night.svg";

import partial_haze_day from "../assets/weather_icons/partial_haze_day.svg";
import partial_haze_night from "../assets/weather_icons/partial_haze_night.svg";

import rain_day from "../assets/weather_icons/rain_day.svg";
import rain_night from "../assets/weather_icons/rain_night.svg";

import partial_rain_day from "../assets/weather_icons/partial_rain_day.svg";
import partial_rain_night from "../assets/weather_icons/partial_rain_night.svg";

import thunderstorm_day from "../assets/weather_icons/thunderstorm_day.svg";
import thunderstorm_night from "../assets/weather_icons/thunderstorm_night.svg";

import partial_thunderstorm_day from "../assets/weather_icons/partial_thunderstorm_day.svg"
import partial_thunderstorm_night from "../assets/weather_icons/partial_thunderstorm_night.svg"

import snow_day from "../assets/weather_icons/snow_day.svg";
import snow_night from "../assets/weather_icons/snow_night.svg";

import partial_snow_day from "../assets/weather_icons/partial_snow_day.svg";
import partial_snow_night from "../assets/weather_icons/partial_snow_night.svg";

import sleet_day from "../assets/weather_icons/sleet_day.svg";
import sleet_night from "../assets/weather_icons/sleet_night.svg";

import wind_day from "../assets/weather_icons/wind_day.svg";
import wind_night from "../assets/weather_icons/wind_night.svg";

import hot_day from "../assets/weather_icons/hot_day.svg";
import hot_night from "../assets/weather_icons/hot_night.svg";

import cold_day from "../assets/weather_icons/cold_day.svg";
import cold_night from "../assets/weather_icons/cold_night.svg";

/**
 * key = id (AccuWeather's "WeatherIcon" number)
 * value = parms for Condition constructor
 */
const conditions = {
    1: [1, "sunny", clear_day, null, colors.full_sun_yellow, "and"],
    2: [2, "mostly sunny", mostly_clear_day, null, colors.mostly_clear_yellow, "and"],
    3: [3, "partly sunny", partly_clear_day, null, colors.partly_clear_yellow, "and"],
    4: [4, "intermittent clouds", partly_clear_day, null, colors.partly_clear_yellow, "with"],
    5: [5, "hazy sunshine", partial_haze_day, null, colors.hazy_brown, "with"],
    6: [6, "mostly cloudy", mostly_cloudy_day, null, colors.mostly_cloudy_white, "and"],
    7: [7, "cloudy", cloud_day, cloud_night, colors.cloudy_gray, "and"],
    8: [8, "overcast", cloud_day, cloud_night, colors.cloudy_gray, "and"],
    11: [11, "foggy", haze_day, haze_night, colors.hazy_brown, "and"],
    12: [12, "showers", rain_day, rain_night, colors.precip_blue_gray, "with"],
    13: [13, "mostly cloudy with showers", rain_day, rain_night, colors.precip_blue_gray, "and"],
    14: [14, "partly sunny with showers", partial_rain_day, null, colors.cloudy_gray, "and"],
    15: [15, "thunderstorms", thunderstorm_day, thunderstorm_night, colors.storm_gray, "with"],
    16: [16, "mostly cloudy with thunderstorms", partial_thunderstorm_day, thunderstorm_night, colors.hazy_brown, "and"],
    17: [17, "partly sunny with thunderstorms", partial_thunderstorm_day, false, colors.hazy_brown, "and"],
    18: [18, "rainy", rain_day, rain_night, colors.precip_blue_gray, "and"],
    19: [19, "flurries", snow_day, snow_night, colors.icy_white, "with"],
    20: [20, "mostly cloudy with flurries", partial_snow_day, partial_snow_night, colors.partial_snow_white, "and"],
    21: [21, "partly sunny with flurries", partial_snow_day, false, colors.partial_snow_white, "and"],
    22: [22, "snowing", snow_day, snow_night, colors.icy_white, "and"],
    23: [23, "mostly cloudy with snow", partial_snow_day, partial_snow_night, colors.partial_snow_white, "and"],
    24: [24, "ice", sleet_day, sleet_night, colors.icy_white, "with"],
    25: [25, "sleet", sleet_day, sleet_night, colors.icy_white, "with"],
    26: [26, "freezing rain", sleet_day, sleet_night, colors.icy_white, "with"],
    29: [29, "rain and snow", sleet_day, sleet_night, colors.icy_white, "with"],
    30: [30, "hot", hot_day, hot_night, colors.hot_red, "and"],
    31: [31, "cold", cold_day, cold_night, colors.cold_blue, "and"],
    32: [32, "windy", wind_day, wind_night, colors.cloudy_gray, "and"],
    33: [33, "clear", null, clear_night, null, "and"],
    34: [34, "mostly clear", null, mostly_clear_night, null, "and"],
    35: [35, "partly cloudy", null, partly_clear_night, null, "and"],
    36: [36, "intermittent clouds", null, partly_clear_night, null, "with"],
    37: [37, "hazy moonlight", null, partial_haze_night, null, "with"],
    38: [38, "mostly cloudy", null, mostly_cloudy_night, null, "and"],
    39: [39, "partly cloudy with showers", null, partial_rain_night, null, "and"],
    40: [40, "mostly cloudy with showers", null, partial_rain_night, null, "and"],
    41: [41, "partly cloudy with thunderstorms", null, partial_thunderstorm_night, null, "and"],
    42: [42, "mostly cloudy with thunderstorms", null, partial_thunderstorm_night, null, "and"],
    43: [43, "mostly cloudy with flurries", null, partial_snow_night, null, "and"],
    44: [44, "mostly cloudy with snow", null, partial_snow_night, null, "and"],
}

export default function getCondition(id) {
    return conditions[id]
        ? new Condition(...conditions[id])
        : null;
}
