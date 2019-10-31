/* this is the reducer used to create the store */

import {combineReducers} from 'redux';

import dataReducer from './dataReducer';
import UIReducer from './UIReducer';

const rootReducer = combineReducers({data: dataReducer, UI: UIReducer});

export default rootReducer;
