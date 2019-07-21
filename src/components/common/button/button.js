import React from 'react'
import PropTypes from 'prop-types'

const Button = ({name, value, onClick, className}) => {
  return (
    <button 
      name={name} 
      onClick={onClick}
      className={className}
      data-test="btn"
      >
      {value}
    </button>
  )
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string.isRequired
}

export default Button;