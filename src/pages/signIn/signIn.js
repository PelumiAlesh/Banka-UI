import React, { Component } from 'react';

import logo from '@Assets/imgs/logo.png';
import Input from '@Common/input/input';
import Button from '@Common/button/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import '../../assets/imgs/background.jpg';
import './signIn.css';

const emailIcon = <FontAwesomeIcon  icon="at" />
const pwIcon = <FontAwesomeIcon icon="lock" />

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
    this.onChange = this.onChange.bind(this);
  }

  
  onChange(e) {
    const {name, value} = e.target;
      return this.setState({
        [name] : value
      })
  }

  SignInInputs = onChange => {
    return (
      <React.Fragment>
    <div className="User-ID">
      <Input 
      key="kEmail" 
      name='email' 
      type='email' 
      onChange={onChange} 
      placeholder="E-mail" 
      icon={emailIcon}
      />
    </div>
    
    <div className="password">
      <Input 
      key="kPassword" 
      name='password' 
      type='password' 
      onChange={onChange} 
      placeholder="Password" 
      icon={pwIcon}/>
    </div>
    </React.Fragment>
    )
  }
  
  render() {
    const button = <Button name='submit' onClick={() => {}} className='btn' value='SIGN IN'/> ;
    return(
      <div className="login_container" data-test="logInComponent">
        <div className="login-wrapper">
        <p><img src={logo} alt="random image" data-test="logo"/></p>
        <h1>SIGN IN</h1>
        <form className="login-form" data-test="formComponent">
              {this.SignInInputs(this.onChange)}
            {button}
            <p>Not a Member? <a>Sign up now</a></p>
          </form>
          </div>
      </div>
    ) 
  }
}

export default SignIn;