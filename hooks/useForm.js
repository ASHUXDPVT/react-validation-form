import { useState } from "react";

export default function useForm(initialValues, validate) {

  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    const newValues = {
      ...values,
      [name]: value
    };

    setValues(newValues);

    const validationErrors = validate(newValues);
    setErrors(validationErrors);
  };

  return {
    values,
    errors,
    handleChange
  };
}