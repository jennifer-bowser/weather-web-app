import getCondition from "../../util/conditions";
import "./WeatherTile.css";

export default function WeatherTile({ id }) {
    // return (
    //     getConditionText(id) &&
    //     <div className="WeatherTile" style={{ backgroundColor: getConditionColor(id) }}>
    //         <img src={getConditionIcon(id)} />
    //         <p>{getConditionText(id)}</p>
    //     </div>
    // )

    // const condition = getCondition(id);
    // return (
    //     condition &&
    //     <div className="WeatherTile" style={{ backgroundColor: condition.color.day }}>
    //         <img src={condition.icon.day} />
    //         <p>{condition.text}</p>
    //     </div>
    // )

    const condition = getCondition(id);
    return (
        condition &&
        <div className="WeatherTile" style={{ backgroundColor: condition.getColor() }} key={id}>
            <img src={condition.getIcon()} />
            <p>{condition.getText()}</p>
        </div>
    )
}