import "./Tile.css";

export default function Tile({extraClassnames = "", useBoxShadow = false, children}){
    const classNames = "Tile " + extraClassnames + (
        useBoxShadow ? "BoxShadowed" : ""
    );
    return(
        <div className={classNames}>
            {children}
        </div>
    )
}