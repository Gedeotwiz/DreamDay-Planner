import { useState } from "react";

type InputElement = HTMLInputElement | HTMLTextAreaElement;

export const useChangeValue = () => {
  const [values, setValues] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<InputElement>) => {
    const { name, value } = e.target;

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return { values, handleChange };
};