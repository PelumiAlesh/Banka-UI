/* eslint-disable no-console */
import React, { useState, useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import logo from '@Assets/imgs/logo.png';
import Input from '@Common/input/input';
import Button from '@Common/button/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, withRouter } from 'react-router-dom';
import { logIn } from '@Actions/authActions';

import './signIn.css';

const emailIcon = <FontAwesomeIcon icon="at" />;
const pwIcon = <FontAwesomeIcon icon="lock" />;
const loaderIcon = <FontAwesomeIcon icon="spinner" spin />;

const SignIn = (props) => {
  const [email, updateEmail] = useState('');
  const [password, updatePassword] = useState('');
  const [loading, setLoading] = useState(false);

  const { history, onSubmit, errors } = props;
  const updateInput = (e, input) => input(e.target.value);

  const SignInInputs = () => (
    <Fragment>
      <div className="User-ID">
        <Input
          key="kEmail"
          name="email"
          type="email"
          id="signInEmail"
          onChange={e => updateInput(e, updateEmail)}
          placeholder="E-mail"
          icon={emailIcon}
          value={email}
        />
      </div>

      <div className="password">
        <Input
          key="kPassword"
          name="password"
          type="password"
          id="signInPassword"
          onChange={e => updateInput(e, updatePassword)}
          placeholder="Password"
          icon={pwIcon}
          value={password}
        />
      </div>
    </Fragment>
  );
  useEffect(() => {}, [props]);

  const handleSubmit = async (event) => {
    setLoading(true);
    event.preventDefault();
    const userData = { email, password };
    await onSubmit(userData, history);
  };

  const button = (
    <Button
      name="submit"
      onClick={(e) => { handleSubmit(e); }}
      className="btn"
      value={loading ? loaderIcon : 'SIGN IN'}
    />
  );


  return (
    <div className="auth_container">
      <div className="login_container" data-test="logInComponent">
        <div className="login-wrapper">
          <p><img src={logo} alt="Banka Logo" data-test="logo" /></p>
          <h1>SIGN IN</h1>
          {errors.length > 0 && <div className="errorDiv"><p id="errDiv">{errors}</p></div>}
          <form className="login-form" data-test="formComponent">
            {SignInInputs()}
            {button}
            <p>
              Not a Member?
              <Link to="/signup"> Sign up now</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

SignIn.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  history: PropTypes.shape({}).isRequired,
  errors: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  errors: state.auth.errors,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (userData, history) => dispatch(logIn(userData, history)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignIn));
