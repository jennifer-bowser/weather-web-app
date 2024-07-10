import "./ConditionText.css";
import TIMEFRAME_TYPE from "../../util/timeframeType";

export default function ConditionText({timeframe, condition}){
    return(
        <p className="ConditionText">{timeframe === TIMEFRAME_TYPE.now ? "It's" : "It'll be"} {condition.getTemp()} & {condition.getText()}</p>
    )
}