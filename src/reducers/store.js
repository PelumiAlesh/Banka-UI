import allReducers from './index';
import thunk from 'redux-thunk';
import { createStore, compose, applyMiddleware } from 'redux';

const initialState = {};


const enhancers = [];

const isDev = process.env.NODE_ENV === 'development';

if (isDev && typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__) {
 enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__());
}
const store = createStore(
  allReducers,
  initialState,
  compose(...enhancers));

export default store;
