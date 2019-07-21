import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Form = ({inputs, button}) => {
  return (
        <Fragment>
          <form data-test="formComponent">
            <div data-test="inputsComponent">
            </div>
            {button}
          </form>
        </Fragment>
  )
}

Form.propTypes = {
  inputs: PropTypes.array,
  button: PropTypes.object
}

export default Form;