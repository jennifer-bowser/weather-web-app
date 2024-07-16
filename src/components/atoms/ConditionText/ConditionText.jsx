import "./ConditionText.css";

export default function ConditionText({timeframe, condition}){
    return(
        <p className="ConditionText">
            <span className="ConditionText-Small">{timeframe}&nbsp;</span>
            <span className="Bold">{condition.getTemp()}</span>
            <span className="ConditionText-LinkingWord ConditionText-Small">{condition.getLinkingWord()}</span>
            <span className="Bold">{condition.getText()}</span>
        </p>
    )
}