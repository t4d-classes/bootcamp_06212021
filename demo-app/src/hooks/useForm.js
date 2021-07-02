import { useState } from 'react';

export function useForm(initialForm) {
  const [form, setForm] = useState({ ...initialForm });

  const change = e => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.type === 'number'
          ? parseFloat(e.target.value)
          : e.target.value,
    });
  };

  const resetForm = () => setForm({ ...initialForm });

  return [form, change, resetForm];
}
