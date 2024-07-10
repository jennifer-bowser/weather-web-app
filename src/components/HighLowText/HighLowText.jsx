import "./HighLowText.css";

export const formats = {
    horizontal: "HighLowText-Horizontal",
    vertical: "HighLowText-Vertical"
}

export default function HighLowText({format, highTemp, lowTemp}){
    return(
        <div className={"HighLowText " + format}>
            <p><span className="SemiBold">High:</span> {highTemp}°</p>
            <p><span className="SemiBold">Low:</span> {lowTemp}°</p>
        </div>
    )
}