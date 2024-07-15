import "./PercentPrecip.css";
import umbrellaIcon from "../../../assets/umbrella.svg";

export default function PercentPrecip({condition}){
    return(
        <div className="PercentPrecip">
            <img src={umbrellaIcon} width="50"/>
            <p>{condition.getPercentPrecip()}%</p>
        </div>
    )
}