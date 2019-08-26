import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  name, value, onClick, className,
}) => (
  <button
    name={name}
    onClick={onClick}
    className={className}
    data-test="btn"
    type="button"
  >
    {value}
  </button>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  value: PropTypes.any.isRequired,
  className: PropTypes.string.isRequired,
};

export default Button;
