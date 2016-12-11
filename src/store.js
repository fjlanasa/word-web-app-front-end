import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

//import root reducer
import rootReducer from './reducers/index';

let searchTerm = null;
let searchResults = [];
let definitions = localStorage.getItem('definitions') || [];
console.log(definitions);

const initialState = {
  searchResults,
  definitions
};

console.log(initialState);

const store = createStore(rootReducer, initialState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
