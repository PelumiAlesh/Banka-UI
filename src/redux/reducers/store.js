/* eslint-disable no-underscore-dangle */
import thunk from 'redux-thunk';
import { createStore, compose, applyMiddleware } from 'redux';
import allReducers from './index';

const initialState = {};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = [thunk];

const store = createStore(
  allReducers,
  initialState,
  composeEnhancers(applyMiddleware(...enhancers)),
);

export default store;
