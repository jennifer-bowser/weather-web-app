import colors from "./colors";

export default class Condition {
    #id;
    #text;
    #dayIcon;
    #nightIcon;
    #dayColor;
    #nightColor;
    #linkingWord;
    #isDay = true;
    #temp = null;
    #time = null;
    #percentPrecip = null;

    constructor(id, text, dayIcon, nightIcon, dayColor, linkingWord) {
        this.#id = id;
        this.#text = text;
        this.#dayIcon = dayIcon;
        this.#nightIcon = nightIcon;
        this.#dayColor = dayColor;
        this.#nightColor = colors.night_blue;
        this.#linkingWord = linkingWord;
    }

    getId() {
        return this.#id;
    }

    getText() {
        return this.#text
    }

    getIcon() {
        return this.#isDay
            ? this.#dayIcon
            : this.#nightIcon
    }

    getColor() {
        return this.#isDay
            ? this.#dayColor
            : this.#nightColor
    }

    getTextColor() {
        return this.#isDay
            ? colors.black
            : colors.night_outline
    }

    getLinkingWord() {
        return this.#linkingWord;
    }

    setTemp(temp) {
        this.#temp = String(temp);
    }

    getTemp() {
        return this.#temp;
    }

    setIsDay(isDay) {
        this.#isDay = isDay;
    }

    isDay() {
        return this.#isDay;
    }

    setTime(time) {
        this.#time = time;
    }

    getTime() {
        return this.#time;
    }

    setPercentPrecip(percentPrecip) {
        this.#percentPrecip = percentPrecip;
    }

    getPercentPrecip() {
        return this.#percentPrecip;
    }
}
