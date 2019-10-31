/* creates the store, using the root reducer, and adding a middleware */

import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

export default function configureStore(preLoadedState) {
    return createStore(
        rootReducer,
        preLoadedState,
        applyMiddleware(thunkMiddleware)
    );
}
