import "./WeatherIcon.css";

export default function WeatherIcon({iconSrc}){
    return(
        <div className="WeatherIcon">
            <img src={iconSrc}/>
        </div>
    )
}