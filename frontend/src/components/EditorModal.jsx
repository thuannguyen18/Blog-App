export default function EditorModal({ visible, children }) {
    if (!visible) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-10 backdrop-blur-lg z-10">
            {children}
        </div>
    );
}