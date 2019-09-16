/* eslint-disable no-console */
import API_SERVICE from '@Utils/API';
import {
  SET_BANK_ACCOUNT,
  LOADING_BANK_ACCOUNT,
  SET_ACCOUNTS_ERROR,
  SET_TRANSACTIONS,
} from './types';

const setAccount = payload => ({
  type: SET_BANK_ACCOUNT,
  payload,
});

const setAccountLoading = payload => ({
  type: LOADING_BANK_ACCOUNT,
  payload,
});

const setTransactions = payload => ({
  type: SET_TRANSACTIONS,
  payload,
});

const setError = payload => ({
  type: SET_ACCOUNTS_ERROR,
  payload,
});

export const createAccount = (accountData, history) => async (dispatch) => {
  dispatch(setError(''));
  dispatch(setAccountLoading(true));
  try {
    const response = await API_SERVICE.post('/accounts', accountData);
    dispatch(setAccount(response.data.data));
    dispatch(setAccountLoading(false));
    history.push('/dashboard');
  } catch (errs) {
    console.log(errs.response.data);
    dispatch(setError(errs.response.data.error));
  }
};

export const getTransactions = accountNumber => async (dispatch) => {
  try {
    const response = await API_SERVICE.get(`/accounts/${accountNumber}/transactions`);
    dispatch(setTransactions(response.data.data));
  } catch (errs) {
    dispatch(setError(errs.response.data.error));
  }
};

export const getAccounts = email => async (dispatch) => {
  try {
    const response = await API_SERVICE.get(`/user/${email}/accounts`);
    dispatch(setAccount(response.data.accounts));
    return response.data.accounts;
  } catch (errs) {
    console.log(errs.response.data);
    dispatch(setError(errs.response.data.error));
  }
};
