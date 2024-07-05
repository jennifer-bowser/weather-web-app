import getCondition from "../../util/conditions";
import "./WeatherTile.css";

export default function WeatherTile({ id }) {
    const condition = getCondition(id);
    const tiles = [];

    if (condition && condition.getIcon(condition.IS_DAY)) {
        tiles.push(
            <div className="WeatherTile" style={{ backgroundColor: condition.getColor() }} key={`${id}-day`}>
                <img src={condition.getIcon()} />
                <p style={{ color: condition.getTextColor() }}>It's <span class="Bold">52&deg;</span> {condition.getLinkingWord()} <span class="Bold">{condition.getText()}</span></p>
            </div>
        );
    }

    if (condition && condition.getIcon(!condition.IS_DAY)) {
        tiles.push(
            <div className="WeatherTile" style={{ backgroundColor: condition.getColor(!condition.IS_DAY) }} key={`${id}-night`}>
                <img src={condition.getIcon(!condition.IS_DAY)} />
                <p style={{ color: condition.getTextColor(!condition.IS_DAY) }}>It's <span class="Bold">52&deg;</span> {condition.getLinkingWord()} <span class="Bold">{condition.getText()}</span></p>
            </div>
        );
    }

    return (
        <>
            {tiles}
        </>
    )
}