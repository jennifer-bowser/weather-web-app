import colors from "./colors";

export default class Condition {
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