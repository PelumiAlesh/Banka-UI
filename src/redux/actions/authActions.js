/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import setAuthToken from '@Utils/setAuthToken';
import { toast } from 'react-toastify';
import { LOADING, SET_USER } from './types';


const setUser = decode => ({
  type: SET_USER,
  payload: decode,
});

const toastOption = {
  position: 'top-center',
  hideProgressBar: true,
};

export const signIn = userData => async (dispatch) => {
  dispatch({ type: LOADING, payload: true });
  try {
    const response = await axios.post('https://pelumi-banka.herokuapp.com/api/v1/auth/signIn', userData);
    const { token } = response.data.data[0];
    localStorage.setItem('jwtToken', token);
    setAuthToken(token);
    dispatch(setUser(jwtDecode(token)));
    return dispatch({ type: LOADING, payload: false });
  } catch (errs) {
    errs.response.data.error.map(err => toast.error(err, toastOption));
  }
};

export const signUp = userData => async (dispatch) => {
  dispatch({ type: LOADING, payload: true });
  try {
    const response = await axios.post('https://pelumi-banka.herokuapp.com/api/v1/auth/signUp', userData);
    const { token } = response.data.data[0];
    localStorage.setItem('jwtToken', token);
    setAuthToken(token);
    dispatch(setUser(jwtDecode(token)));
    return dispatch({ type: LOADING, payload: false });
  } catch (errs) {
    errs.response.data.error.map(err => toast.error(err, toastOption));
  }
};
