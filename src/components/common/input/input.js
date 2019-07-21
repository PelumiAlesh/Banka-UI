import React from 'react';
import PropTypes from 'prop-types';

const Input = ({name, type, onChange, value, icon, placeholder}) => {
  return (
    <React.Fragment>
    <label><span className="entypo-user">{icon}</span></label>
      <input
        name={name}
        type={type}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        data-test="input"
      />
    </React.Fragment>
  )
};

Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func
}

export default Input;