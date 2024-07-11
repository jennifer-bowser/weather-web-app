import { useState } from "react";
import colors from "../../../util/colors";
import "./AppContent.css";

export default function AppContent({ children }) {
    const defaultColor = colors.mostly_cloudy_white
    const [backgroundColor, setBackgroundColor] = useState({ defaultColor });

    return (
        <div className="AppContent" style={{ backgroundColor: backgroundColor }}>
            {children}
        </div>
    )
}