import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import searchTerm from './searchTerm'
import searchResults from './search'
import definitions from './save'

const rootReducer = combineReducers({searchResults, definitions, searchTerm, routing: routerReducer});

export default rootReducer;
