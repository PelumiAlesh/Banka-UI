import adder from './adder';
import isLogged from './isLogged';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  'Count': adder,
  'isLogged': isLogged,
})

export default rootReducer;