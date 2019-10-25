import { combineReducers } from "redux";
import Counter from 'Reducers/Counter.js';

export default combineReducers({
  counter: Counter
});