interface ButtonProps {
  text: string;
  handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export function Button({ text, handleClick }: ButtonProps) {
  return (
    <div>
      <button onClick={(e) => handleClick(e)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        { text } 
      </button>
    </div>
  )
}