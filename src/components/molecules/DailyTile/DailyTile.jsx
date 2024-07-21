import "./DailyTile.css";

export default function DailyTile({ condition }) {
    return (
        <div className="DailyTile">
            <h2>condition.getDate()</h2>
            <Tile useBoxShadow={true} backgroundColor>

            </Tile>
        </div>
    )
}