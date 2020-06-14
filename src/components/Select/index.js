import React from 'react';
import operator from '../../constants/operator';

export const Select = (props) => {
  const { input, label, meta: { touched, error } } = props;
  const selectOptions = (operator) => (
    <option key={operator} value={operator}>{operator}</option>
  )
  return (
  	<div>
		<select {...input} className={touched && error ? "error-input": ""}>
			<option value="">Select Operator</option>
			{operator.map(selectOptions)}
		</select>
		{touched && error && <span className="error-message">{error}</span>}
	</div>
  );
}

export default Select;

