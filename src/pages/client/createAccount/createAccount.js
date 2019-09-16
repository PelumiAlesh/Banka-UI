/* eslint-disable jsx-a11y/label-has-for */
import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import logo from '@Assets/imgs/logo.png';
import Input from '@Common/input/input';
import Button from '@Common/button/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createAccount } from '@Actions/accountActions';
import './createAccount.css';

const moneyCheck = <FontAwesomeIcon icon="money-check-alt" />;
const dollarSign = <FontAwesomeIcon icon="dollar-sign" />;
const loaderIcon = <FontAwesomeIcon icon="spinner" spin />;

const CreateAccount = (props) => {
  const [accountType, updateAccountType] = useState('');
  const [initialDeposit, updateInitialDeposit] = useState('');
  const [loading, setLoading] = useState(false);

  const { history, onSubmit, errors } = props;
  const updateInput = (e, input) => input(e.target.value);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const accountData = { initialDeposit, type: accountType };
    await onSubmit(accountData, history);
    setLoading(false);
  };

  const inputs = (
    <Fragment>
      <div className="acct-type">
        <div className="select-wrap">
          <label htmlFor="acct-type"><span className="entypo-user">{moneyCheck}</span></label>
          <select value={accountType} onChange={e => updateInput(e, updateAccountType)} name="acct-type" id="acct-type">
            <option value="default">Account Type</option>
            <option value="savings">Savings Account</option>
            <option value="current">Checkings Account</option>
          </select>
        </div>
      </div>
      <div className="user-id">
        <Input
          key="kInitialDepsosit"
          name="initialDeposit"
          type="number"
          id="initialDeposit"
          onChange={e => updateInput(e, updateInitialDeposit)}
          placeholder="Initial Deposit"
          icon={dollarSign}
          value={initialDeposit}
        />
      </div>
    </Fragment>
  );

  const button = (
    <Button
      name="submit"
      onClick={(e) => { handleSubmit(e); }}
      className="btn"
      value={loading ? loaderIcon : 'CREATE'}
    />
  );
  return (
    <div className="auth_container">
      <div className="crtAcct_container">
        <div className="crtAcct-wrapper">
          <p><img src={logo} alt="Banka logo" /></p>
          <h1>CREATE ACCOUNT</h1>
          {errors.length > 0 && <div className="errorDiv"><p id="errDiv">{errors}</p></div>}
          <form className="crtAcct-form" action="dashboard.html">
            {inputs}
            {button}
            <p>
              By clicking create account. It means you agree to our
              <Link to="/" className="link">
                terms and condition?
                <span className="entypo-right-thin" />
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

CreateAccount.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  history: PropTypes.shape({}).isRequired,
  errors: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  errors: state.accounts.errors,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (userData, history) => dispatch(createAccount(userData, history)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateAccount);
