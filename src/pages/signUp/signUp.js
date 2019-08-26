import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom/cjs/react-router-dom';

import './signUp.css';
import logo from '@Assets/imgs/logo.png';
import Input from '@Common/input/input';
import Button from '@Common/button/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signUp } from '@Actions/authActions';

const emailIcon = <FontAwesomeIcon icon="at" />;
const pwIcon = <FontAwesomeIcon icon="lock" />;
const userIcon = <FontAwesomeIcon icon="user" />;
const loaderIcon = <FontAwesomeIcon icon="spinner" spin />;

const SignUp = (props) => {
  const [firstName, updateFirstName] = useState('');
  const [lastName, updateLastName] = useState('');
  const [email, updateEmail] = useState('');
  const [password, updatePassword] = useState('');
  const [loading, setLoading] = useState('');

  const updateInput = (e, input) => input(e.target.value);

  const SignUpInputs = () => (
    <Fragment>
      <div className="f_name">
        <Input
          key="kFname"
          name="fName"
          type="text"
          value={firstName}
          onChange={e => updateInput(e, updateFirstName)}
          placeholder="First Name"
          icon={userIcon}
          id="firstName"
        />
      </div>

      <div className="s_name">
        <Input
          key="kSname"
          name="lName"
          type="text"
          value={lastName}
          onChange={e => updateInput(e, updateLastName)}
          placeholder="Last Name"
          icon={userIcon}
          id="lastName"
        />
      </div>

      <div className="email">
        <Input
          key="kEmail"
          name="email"
          type="email"
          value={email}
          onChange={e => updateInput(e, updateEmail)}
          placeholder="E-mail"
          icon={emailIcon}
          id="email"
        />
      </div>

      <div className="password">
        <Input
          key="kPassword"
          name="password"
          type="password"
          value={password}
          onChange={e => updateInput(e, updatePassword)}
          placeholder="Password"
          icon={pwIcon}
          id="password"
        />
      </div>
    </Fragment>
  );

  const signUserUp = async (e) => {
    setLoading(true);
    e.preventDefault();
    const userData = {
      firstName,
      lastName,
      email,
      password,
    };
    await props.signUp(userData);
    setLoading(false);
  };

  const button = (
    <Button
      name="signUp"
      className="btn"
      value={loading ? loaderIcon : 'Create your account'}
      onClick={(e) => { signUserUp(e); }}
    />
  );

  return (
    <div className="signup_container" data-test="signupComponent">
      <div className="signup-wrapper">
        <p><img src={logo} alt="logo" data-test="logo" /></p>
        <h1>Sign-up</h1>
        <div className="errorDiv">
          <p id="errDiv" />
        </div>
        <form className="signup-form" data-test="formComponent" method="POST">
          {SignUpInputs()}
          {button}
          <p>
               Already have an account?
            <Link to="/"> Log in now </Link>
            <span className="entypo-right-thin" />
          </p>
        </form>
      </div>
    </div>

  );
};

SignUp.propTypes = {
  signUp: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  auth: state.authReducer,
});

export default connect(
  mapStateToProps,
  { signUp },
)(SignUp);
