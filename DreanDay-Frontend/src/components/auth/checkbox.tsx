import React from "react";

type GCheckboxProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  id?: string;
};

const GCheckbox: React.FC<GCheckboxProps> = ({
  checked,
  onChange,
  label = "Remember me",
  id = "remember-me",
}) => {
  return (
    <label htmlFor={id} className="flex items-center gap-2 cursor-pointer select-none">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="w-4 h-4 accent-blue-600 cursor-pointer"
      />

      <span className="text-sm text-gray-700">{label}</span>
    </label>
  );
};

export default GCheckbox;