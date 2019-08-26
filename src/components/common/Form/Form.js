import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Form = ({ inputs, button }) => (
  <Fragment>
    <form data-test="formComponent">
      <div data-test="inputsComponent">
        {inputs}
      </div>
      {button}
    </form>
  </Fragment>
);

Form.propTypes = {
  inputs: PropTypes.array.isRequired,
  button: PropTypes.shape({}).isRequired,
};

export default Form;
