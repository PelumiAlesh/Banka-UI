import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import '@Utils/fontIcons';

import store from '@Reducers/store';

import { SignIn, SignUp } from '@Pages/root';

const App = () => (
  <Provider store={store}>
    <Router>
      <Route exact path="/" component={SignIn} />
      <Route exact path="/signup" component={SignUp} />
      <ToastContainer />
    </Router>
  </Provider>
);

export default App;
