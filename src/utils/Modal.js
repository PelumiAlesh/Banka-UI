/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Modal = ({ closeModal, errors }) => {
  const [values, setValues] = useState({
    accountType: '',
    initialDeposit: '',
  });

  const handleOnChange = (name, value) => {
    console.log(value);
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <div id="create_account_modal_">
      <div className="modal_content">
        <div className="content_header">
          <span role="button" tabIndex="0" onKeyPress={closeModal} className="close" onClick={closeModal}>&times;</span>
          <h1>Create new account</h1>
        </div>
        {errors.length > 0 && <div className="errorDiv"><p id="errDiv">{errors}</p></div>}
        <form method="POST">
          <div className="acct-type">
            <label htmlFor="select-wrap">Account type:</label>
            <div className="select-wrap">
              <select value={values.accountType} name="acct-type" onChange={value => handleOnChange('accountType', value)} id="acct-type">
                <option value="">Account Type</option>
                <option value="savings">Savings Account</option>
                <option value="current">Current Account</option>76 
              </select>
            </div>
          </div>
          <label>Initial deposit:</label>
          <div className="bvn">
            <input type="number" id="initialDeposit" placeholder="Initial Deposit " required />
          </div>
          <button type="submit" name="CREATE ACCOUNT" className="btn" id="createAcct">CREATE</button>
          <p>
            {' By clicking create. It means you agree to our '}
            <Link to="/" className="link">terms and condition?</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  errors: PropTypes.array.isRequired,
};

export default Modal;
