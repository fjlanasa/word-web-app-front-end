import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import searchResults from './search'
import definitions from './save'

const rootReducer = combineReducers({searchResults, definitions, routing: routerReducer});

export default rootReducer;
