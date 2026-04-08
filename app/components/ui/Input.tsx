import React from "react";

export type InputProps = {
  type: string;
  name: string,
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  error?: string;
  className?: string;
};

export const Input: React.FC<InputProps> = ({
  type,
  name,
  value,
  onChange,
  label,
  placeholder,
  error,
  className = "",
}) => {
  // TODO: support other types and maybe use different constructors
  if (["text", "password", "email"].indexOf(type) < 0) {
    throw Error("Input type " + type + " not implemented");
  }

  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label className="block mb-1 text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`
          w-full px-3 py-2 
          border rounded-lg 
          focus:outline-none focus:ring-2 focus:ring-blue-500
          ${error ? "border-red-500" : "border-gray-300"}
        `}
      />

      <p className="text-sm text-red-500 min-h-[1.25rem]">{error || ""}</p>
    </div>
  );
};
