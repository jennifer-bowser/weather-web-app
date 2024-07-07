import "./AppContent.css";

export default function AppContent({ backgroundColor, children = null }) {
    return (
        <div className="AppContent" style={backgroundColor = { backgroundColor }}>
            {children}
        </div>
    )
}