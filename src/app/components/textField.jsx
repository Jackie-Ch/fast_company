import React from 'react';
import PropTypes from 'prop-types';

function TextField({ label, type, name, value, onChange, errors }) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        onChange={onChange}
        name={name}
        value={value}
        id={name}
      />
      {errors && <p>{errors}</p>}
    </div>
  );
}
TextField.defaultProps = {
  type: 'text'
};
TextField.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  errors: PropTypes.string
};
export default TextField;
