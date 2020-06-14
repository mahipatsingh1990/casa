import React from 'react';

export const Input = ({ input, label, type, meta: { touched, error } }) => {

  return (
    <div>
      <input {...input} placeholder={label} type="{type}" className={touched && error ? "error-input": ""} />
      {touched && error && <span className="error-message">{error}</span>}
    </div>
  );
}

export default Input;