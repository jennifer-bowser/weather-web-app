import "./ConditionText.css";
import TIMEFRAME_TYPE from "../../util/timeframeType";

export default function ConditionText({timeframe, condition}){
    return(
        <p className="ConditionText">
            {timeframe === TIMEFRAME_TYPE.now ? "It's" : "It'll be"}&nbsp;
            <span className="Bold">{condition.getTemp()}&nbsp;</span>
            {condition.getLinkingWord()}&nbsp;
            <span className="Bold">{condition.getText()}</span>
        </p>
    )
}