import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {

  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setErrors(validate(values))
    if (isSubmitting) {
      callback();
    }
  }, [values, isSubmitting]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);
  };

  const handleChange = (event) => {
    event.persist();
    setValues(values => ({...values, [event.target.name]: event.target.value}));
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit
  }
};

export default useForm;