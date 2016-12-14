import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import searchTerm from './searchTerm'
import searchResults from './searchResults'
import definitions from './definitions'

const rootReducer = combineReducers({searchResults, definitions, searchTerm, routing: routerReducer});

export default rootReducer;
