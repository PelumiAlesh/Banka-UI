import isEmpty from '@Utils/isEmpty';
import { SET_USER, SET_ERROR } from '../actions/types';

export const initialState = {
  isAuthenticated: false,
  loading: false,
  user: {},
  errors: [],
};

export const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_USER:
      return {
        ...state,
        user: payload,
        isAuthenticated: !isEmpty(payload),
      };
    case SET_ERROR:
      return {
        ...state,
        errors: [...payload],
      };
    default:
      return state;
  }
};
