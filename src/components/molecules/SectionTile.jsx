import "./SectionTile.css";
import Tile from "../atoms/Tile/Tile";

export default function SectionTile({extraClassnames = "", sectionName, children}){
    return(
        <Tile extraClassnames={"SectionTile " + extraClassnames}>
            <h1>{sectionName}</h1>
            <div className="SectionTile-Content">
                {children}    
            </div>
        </Tile>
    );
}