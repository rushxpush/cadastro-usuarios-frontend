interface InputProps {
  label: string;
  type: string;
  value?: string;
  handleInput: (data: string) => void
}
export function Input({label, type, value, handleInput}: InputProps) {
  return (
    <div className="mb-4">
      <label htmlFor="" className="block text-gray-700 text-sm font-bold mb-2 text-left">{label}</label>
      <input type={type} value={value} onChange={e => handleInput(e.target.value)} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
    </div>
  )
}