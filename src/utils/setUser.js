import jwtDecode from 'jwt-decode';
import { setUser } from '@Actions/authActions';
import store from '@Reducers/store';

const setAuthenticatedUser = () => {
  if (localStorage.jwtToken) {
    const decoded = jwtDecode(localStorage.jwtToken);
    store.dispatch(setUser(decoded));
  }
};

export default setAuthenticatedUser;
