export default function Input({ label, htmlFor, id, type, placeholder, value, onChange }) {
    return (
        <div className="mb-6">
            <label className="block font-semibold mb-2" htmlFor={htmlFor}>
                {label}
            </label>
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full h-10 shadow appearance-none border rounded py-5 px-3 leading-tight focus:outline-none focus:shadow-outline"
                autoComplete="on"
                required
            />
        </div>
    );
}