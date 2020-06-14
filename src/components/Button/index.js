import React from 'react';

export const Button = (props) => {
  const { title, type } = props
  return (
    <button {...props} type={type}> {title} </button>
  );
}

export default Button;

