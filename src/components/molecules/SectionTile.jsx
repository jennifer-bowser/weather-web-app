import Tile from "../atoms/Tile/Tile";
import "./SectionTile.css";

export default function SectionTile({extraClassnames = "", children}){
    return(
        <Tile extraClassnames={"SectionTile " + extraClassnames}>
            {children}    
        </Tile>
    );
}