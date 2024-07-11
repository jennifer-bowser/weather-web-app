import "./HighLowText.css";

export default function HighLowText({ format, highTemp, lowTemp }) {
    return (
        <div className={"HighLowText " + format}>
            <p>High: <span className="SemiBold">{highTemp ? `${highTemp}°` : "?"}</span></p>
            <p>Low: <span className="SemiBold">{lowTemp ? `${lowTemp}°` : "?"}</span></p>
        </div>
    )
}