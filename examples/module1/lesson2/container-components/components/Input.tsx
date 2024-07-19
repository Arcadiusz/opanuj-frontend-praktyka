interface InputProps {
  value: string;
  setValue: (value: string) => void;
  label: string;
}

export const Input = ({ value, setValue, label}: InputProps) => {
  return (
    <label className="flex flex-col">
      {label}
      <input
        className="border h-7 mt-1 indent-2"
        type="text"
        placeholder="Rick Sanchez..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </label>
  );
}
