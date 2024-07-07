import { useState } from "react";
import "./AppContent.css";

export default function AppContent({ children = null }) {
    const [backgroundColor, setBackgroundColor] = useState("blue");

    return (
        <div className="AppContent" style={{ backgroundColor: backgroundColor }}>
            {children}
        </div>
    )
}