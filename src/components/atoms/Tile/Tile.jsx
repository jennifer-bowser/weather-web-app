import "./Tile.css";

export default function Tile({extraClassnames = "", useBoxShadow = false, backgroundColor = null, children}){
    const classNames = "Tile " + extraClassnames + (
        useBoxShadow ? "BoxShadowed" : ""
    );
    return(
        <div className={classNames} style={{backgroundColor: backgroundColor}}>
            {children}
        </div>
    )
}