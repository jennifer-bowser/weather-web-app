import "./AppContent.css";
import colors from "../../../util/colors";
import { FetchCurrentCondition } from "../../../contexts/CurrentConditionContext";

export default function AppContent({ children }) {
    const defaultColor = colors.mostly_cloudy_white;
    const condition = FetchCurrentCondition();
    
    return (
        <div className="AppContent" style={{ backgroundColor: condition ? condition.getColor() : defaultColor }}>
            {children}
        </div>
    )
}