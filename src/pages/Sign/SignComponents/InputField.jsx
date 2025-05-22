export default function InputField({ type, value, onChange, placeholder, className = "" }) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full h-13 border border-gray-300 rounded-[10px] focus:outline-none focus:shadow-md ${className}`}
      required
    />
  );
}