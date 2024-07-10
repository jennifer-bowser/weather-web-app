import "./HighLowText.css";

export const formats = {
    horizontal: "HighLowText-Horizontal",
    vertical: "HighLowText-Vertical"
}

export default function HighLowText({format, highTemp, lowTemp}){
    return(
        <div className={"HighLowText " + format}>
            <p>High: <span className="SemiBold">{highTemp}°</span></p>
            <p>Low: <span className="SemiBold">{lowTemp}°</span></p>
        </div>
    )
}