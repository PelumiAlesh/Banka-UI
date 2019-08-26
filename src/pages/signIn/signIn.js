import React, { useState, useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import logo from '@Assets/imgs/logo.png';
import Input from '@Common/input/input';
import Button from '@Common/button/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { signIn } from '@Actions/authActions';

import './signIn.css';

const emailIcon = <FontAwesomeIcon icon="at" />;
const pwIcon = <FontAwesomeIcon icon="lock" />;
const loaderIcon = <FontAwesomeIcon icon="spinner" spin />;

export const SignIn = (props) => {
  const [email, updateEmail] = useState('');
  const [password, updatePassword] = useState('');
  const [loading, setLoading] = useState('');


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

  const logUserIn = async (e) => {
    setLoading(true);
    e.preventDefault();
    const userData = { email, password };
    await props.signIn(userData);
    setLoading(false);
  };

  const button = (
    <Button
      name="submit"
      onClick={(e) => { logUserIn(e); }}
      className="btn"
      value={loading ? loaderIcon : 'SIGN IN'}
    />
  );


  return (
    <div className="login_container" data-test="logInComponent">
      <div className="login-wrapper">
        <p><img src={logo} alt="Banka Logo" data-test="logo" /></p>
        <h1>SIGN IN</h1>
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
  );
};

SignIn.propTypes = {
  signIn: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  auth: state.authReducer,
});

export default connect(
  mapStateToProps,
  { signIn },
)(SignIn);
