interface SelectProps {
  value: string;
  setValue: (value: string) => void;
  label: string;
  options: Array<{
    value: string;
    label?: string;
  }>;
}

export const Select = ({ value, setValue, label, options }: SelectProps) => {
  return (
    <label className="flex flex-col">
      {label}
      <select
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="border h-7 mt-1"
      >
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label || value}
          </option>
        ))}
      </select>
    </label>
  );
}
