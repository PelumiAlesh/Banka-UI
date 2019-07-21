import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { add } from './actions/adder';
// import {LOGIN, LOGOUT} from './actions/isLogged';
import SignIn from '@Pages/signIn/signIn';
import fontIcons from '@Utils/fontIcons';

const App = () => {
  // const count = useSelector(state => state.Count);
  // const isLogged = useSelector(state => state.isLogged);
  // const dispatch = useDispatch() 
  // const content = <div>
  //  <p> Current count: {count}</p>
  //   <button onClick={() => dispatch(add())}>+1</button>
  //   <br />
  //   <br />
  //   <button onClick={() => dispatch(LOGOUT())}>Log out</button>
  // </div>

  // const logIn = <div>
  //   <p>Log in to access the counter</p>
  //   <button onClick={() => dispatch(LOGIN())}>Log In</button>
  // </div>
  
  return <div>
    <SignIn />
    </div>;
};

export default App;