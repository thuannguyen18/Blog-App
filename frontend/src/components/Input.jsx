
function Input({ label, htmlFor, id, type, placeholder, value, onChange }) {
    if (type === "textarea") {
        return (
            <div className="mb-6">
                <textarea
                    className="w-full shadow appearance-none border rounded-lg py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    cols="30"
                    rows="10"
                    placeholder="Short bio about you"
                >
                </textarea>
            </div>
        );
    }

    return (
        <div className="mb-6">
            <label className="block text-lg font-semibold mb-2" htmlFor={htmlFor}>
                {label}
            </label>
            <input
                value={value}
                className="w-full h-12 shadow appearance-none border rounded-lg py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                id={id}
                type={type}
                placeholder={placeholder}
                autoComplete="on"
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
}

export default Input;