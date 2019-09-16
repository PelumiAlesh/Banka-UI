import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import '@Utils/fontIcons';
import './styles.css';

import store from '@Reducers/store';
import SignIn from '@App/pages/signIn/SignIn';
import SignUp from '@Pages/signUp/signUp';
import CreateAccount from '@Pages/client/createAccount/createAccount';
import Dashboard from '@Pages/client/dashboard/dashboard';
import setAuthenticatedUser from '@Utils/setUser';

setAuthenticatedUser();
const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/createaccount" component={CreateAccount} />
        <ToastContainer />
      </Switch>
    </Router>
  </Provider>
);

export default App;
