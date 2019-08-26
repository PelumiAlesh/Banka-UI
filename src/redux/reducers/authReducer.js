/* eslint-disable import/prefer-default-export */
import isEmpty from '@Utils/isEmpty';
import { SET_USER, LOADING } from '../actions/types';

const initialState = {
  isAuthenticated: false,
  loading: false,
  user: {},
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: !isEmpty(action.payload),
      };

    case LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    default:
      return state;
  }
};
