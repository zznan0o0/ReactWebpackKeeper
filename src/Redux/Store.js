import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import combineReducers from './Reducers.js';

let Store = createStore(combineReducers, applyMiddleware(thunkMiddleware));

export default Store;