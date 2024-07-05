import WeatherTile from "./components/WeatherTile/WeatherTile"

export default function App() {
  const tiles = [];
  for (let i = 1; i <= 44; i++) {
    tiles.push(<WeatherTile id={i} key={i} />);
  }

  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {tiles}
      </div>

    </>
  )
}
