/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  name, type, onChange, value, icon, placeholder, id,
}) => (
  <React.Fragment>
    <label htmlFor={id}><span className="entypo-user">{icon}</span></label>
    <input
      name={name}
      type={type}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      id={id}
      data-test="input"
    />
  </React.Fragment>
);

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  icon: PropTypes.element,
};

Input.defaultProps = {
  icon: null,
};

export default Input;
