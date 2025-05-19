export default function InputField({ label, type, value, onChange, placeholder }) {
    return (
        <div>
            <label className="block mb-1 text-gray-700">{label}</label>
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
                required
            />
        </div>
    );
}