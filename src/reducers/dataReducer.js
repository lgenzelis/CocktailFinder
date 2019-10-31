/* this reducer handles all the states which are relevant to the data and the internal logic of the app,
* that is, the list of cocktails fetched from the API and the state of the fetching process */

import {
    REQUEST_COCKTAILS,
    RECEIVE_COCKTAILS,
    CLEAR_RESULTS,
    RESTORE_DEFAULT,
    STOP_WAITING_RESULTS,
} from '../actions/actionTypes';

const noCocktails = {
    byId: {},
    allIds: [],
};

const initialState = {
    cocktails: noCocktails,
    isWaitingForResults: false, // whether we are waiting for results (and accepting them) or not
    lastRequestId: null,
};

export default function dataReducer(state = initialState, action) {
    switch (action.type) {
        case REQUEST_COCKTAILS:
            return Object.assign({}, state, {
                isWaitingForResults: true,
                lastRequestId: action.requestId,
            });
        case RECEIVE_COCKTAILS:
            if (!state.isWaitingForResults) {
                return state;
            } else {
                return Object.assign({}, state, {
                    // if we are getting the answer to an old request, we keep waiting
                    isWaitingForResults: (action.requestId !== state.lastRequestId),
                    cocktails: action.cocktails,
                });
            }
        case CLEAR_RESULTS:
            return Object.assign({}, state, {cocktails: noCocktails, isWaitingForResults: false});
        case RESTORE_DEFAULT:
            return initialState;
        case STOP_WAITING_RESULTS:
            return Object.assign({}, state, {isWaitingForResults: false});
        default:
            return state;
    }
}
