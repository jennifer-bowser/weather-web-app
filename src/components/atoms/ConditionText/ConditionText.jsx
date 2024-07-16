import "./ConditionText.css";

export default function ConditionText({timeframe, condition}){
    return(
        <p className="ConditionText">
            {timeframe}&nbsp;
            <span className="Bold">{condition.getTemp()}</span>
            <span className="ConditionText-LinkingWord">{condition.getLinkingWord()}</span>
            <span className="Bold">{condition.getText()}</span>
        </p>
    )
}