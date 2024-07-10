import "./ConditionText.css";

export default function ConditionText({timeframe, condition}){
    return(
        <p className="ConditionText">
            {timeframe}&nbsp;
            <span className="Bold">{condition.getTemp()}&nbsp;</span>
            {condition.getLinkingWord()}&nbsp;
            <span className="Bold">{condition.getText()}</span>
        </p>
    )
}