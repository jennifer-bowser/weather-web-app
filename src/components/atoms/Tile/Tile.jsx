export default function Tile({extraClassnames = "", children}){
    return(
        <div className={`Tile ` + extraClassnames}>
            {children}
        </div>
    )
}