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
    const tiles = [];

    if (condition && condition.getIcon(condition.IS_DAY)) {
        tiles.push(
            <div className="WeatherTile" style={{ backgroundColor: condition.getColor() }} key={`${id}-day`}>
                <img src={condition.getIcon()} />
                <p>{condition.getText()}</p>
            </div>
        );
    }

    if (condition && condition.getIcon(!condition.IS_DAY)) {
        tiles.push(
            <div className="WeatherTile" style={{ backgroundColor: condition.getColor(!condition.IS_DAY) }} key={`${id}-night`}>
                <img src={condition.getIcon(!condition.IS_DAY)} />
                <p style={{ color: condition.getTextColor(!condition.IS_DAY) }}>{condition.getText()}</p>
            </div>
        );
    }

    return (
        <>
            {tiles}
        </>
    )
}