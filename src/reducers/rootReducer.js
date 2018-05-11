import listReducer from './listReducer.js';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  listReducer: listReducer
});

export default rootReducer;