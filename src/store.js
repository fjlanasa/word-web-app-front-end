import { createStore } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import rootReducer from './reducers/index';

let searchTerm = '';
let searchResults = [];
let definitions = JSON.parse(localStorage.getItem('definitions')) || [];

const initialState = {
  searchTerm,
  searchResults,
  definitions
};

const store = createStore(rootReducer, initialState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
