import API_SERVICE from '@Utils/API';
import jwtDecode from 'jwt-decode';
import setAuthToken from '@Utils/setAuthToken';
import { SET_USER, SET_ERROR } from './types';


export const setUser = decode => ({
  type: SET_USER,
  payload: decode,
});

const setError = payload => ({
  type: SET_ERROR,
  payload,
});


export const logIn = (userData, history) => async (dispatch) => {
  dispatch(setError(''));
  try {
    const response = await API_SERVICE.post('/auth/signIn', userData);
    const { token } = response.data.data[0];
    localStorage.setItem('jwtToken', token);
    setAuthToken(token);
    dispatch(setUser(jwtDecode(token)));
    return history.push('/dashboard');
  } catch (errs) {
    dispatch(setError(errs.response.data.error));
  }
};

export const signUp = (userData, history) => async (dispatch) => {
  dispatch(setError(''));
  try {
    const response = await API_SERVICE.post('/auth/signUp', userData);
    const { token } = response.data.data[0];
    localStorage.setItem('jwtToken', token);
    setAuthToken(token);
    dispatch(setUser(jwtDecode(token)));
    history.push('/createAccount');
  } catch (errs) {
    dispatch(setError(errs.response.data.error));
  }
};
