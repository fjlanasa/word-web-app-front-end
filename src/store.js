import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

//import root reducer
import rootReducer from './reducers/index';

let searchTerm = '';
let searchResults = [];
let definitions = JSON.parse(localStorage.getItem('definitions')) || [];
console.log(definitions);

const initialState = {
  searchTerm,
  searchResults,
  definitions
};

console.log(initialState);

const store = createStore(rootReducer, initialState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
