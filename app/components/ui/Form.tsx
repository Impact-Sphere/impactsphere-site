import React, { useState } from "react";

export enum TextInputType {
  TEXT = "text",
  EMAIL = "email",
  PASSWORD = "password",
};

export type TextInputProps = {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  type?: TextInputType;
  label?: string;
  placeholder?: string;
  error?: string;
};

const TextInput: React.FC<TextInputProps> = ({
  name,
  value,
  onChange,
  className = "",
  type = TextInputType.TEXT,
  label,
  placeholder,
  error,
}) => {
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

// export type CheckboxProps = {
//   name: string;
//   text: string;
// };

// export type CheckboxGroupProps = {
//   checkboxes: CheckboxProps[];
// };

// const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
//   checkboxes,
// }) => {
//   return (
//     <div>
//       {checkboxes.map(({
//         name,
//         text,
//       }) => <input
//         type="checkbox"
//         name={name}
//       >{text}</input>)}
//     </div>
//   );
// }

export type InputProps = TextInputProps;
type FormInputProps = Omit<InputProps, "onChange"> & {validate: (s: string) => string};

type FormProps = {
    inputs: FormInputProps[];
    submitText: string;
    onSubmit: (form: Record<string, string>) => void;
};

export const Form: React.FC<FormProps> = ({
    inputs,
    submitText,
    onSubmit,
}) => {
  const initState: Record<string, string> = {};
  inputs.forEach(input => initState[input.name] = input.value ?? "");

  const inputsMap: Record<string, FormInputProps> = {};

  inputs.forEach(input => inputsMap[input.name] = input);
  const [form, setForm] = useState({...initState});

  inputs.forEach(input => initState[input.name] = "");
  const [errors, setErrors] = useState(initState);

  // Generic input change handler
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name] : "" }));
  };

  // Simple validation
  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    Object.entries(form).forEach(([key, value]) => {
      const err = inputsMap[key].validate(value);
      if (err)
        newErrors[key] = err;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    if (validate())
      onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 p-4">
      {inputs.map((f) => (
        <TextInput
          type={f.type}
          key={f.name}
          name={f.name}
          placeholder={f.placeholder}
          value={form[f.name]}
          onChange={handleChange}
          error={errors[f.name]}
        />
      )
      )}
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
      >
        {submitText}
      </button>
    </form>
  );
};
