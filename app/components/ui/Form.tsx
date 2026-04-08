import React, { useState } from "react";
import { Input, InputProps } from "./Input";

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
  inputs.forEach(input => initState[input.name] = "");

  const inputsMap: Record<string, FormInputProps> = {};
  inputs.forEach(input => inputsMap[input.name] = input);

  const [form, setForm] = useState(initState);
  const [errors, setErrors] = useState({...initState});

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
    if (validate()) {
      console.log("Form submitted:", form);
      onSubmit(form);
      // reset form if needed
      // setForm({ name: "", email: "", password: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 p-4">
      {inputs.map((f) => (
        <Input
          key={f.name}
          name={f.name}
          type={f.type}
          placeholder={f.placeholder}
          value={form[f.name]}
          onChange={handleChange}
          error={errors[f.name]}
        />
      ))}
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
      >
        {submitText}
      </button>
    </form>
  );
};
