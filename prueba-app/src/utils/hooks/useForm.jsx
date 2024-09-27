import { useState } from "react";

export default function useForm(initialForm = {}) {
  const [formState, setFormState] = useState(initialForm);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  return {
    formState,
    setFormState,
    handleChange,
    onResetForm,
  };
}
