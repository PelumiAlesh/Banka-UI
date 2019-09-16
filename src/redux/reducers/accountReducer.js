import {
  SET_BANK_ACCOUNT,
  LOADING_BANK_ACCOUNT,
  SET_ACCOUNTS_ERROR,
  SET_TRANSACTIONS,
} from '@Actions/types';

export const initialState = {
  accounts: [],
  accountsLoading: false,
  errors: [],
  transactions: [],
};

export const accountReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_BANK_ACCOUNT:
      return {
        ...state,
        accounts: payload,
      };
    case LOADING_BANK_ACCOUNT:
      return {
        ...state,
        accountsLoading: payload,
      };
    case SET_ACCOUNTS_ERROR:
      return {
        ...state,
        errors: [...payload],
      };
    case SET_TRANSACTIONS:
      return {
        ...state,
        transactions: payload,
      };
    default:
      return state;
  }
};
