/* this reducer relates to all states which are only related to the UI. In this case, the only state we have is the
text in the cocktail search field */

import {CLEAR_RESULTS, RESTORE_DEFAULT, UPDATE_SEARCH_STR} from '../actions/actionTypes';

const initialState = {
    searchStr: '',
};

export default function dataReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_SEARCH_STR:
            return {searchStr: action.searchStr};
        case CLEAR_RESULTS:
        case RESTORE_DEFAULT:
            return initialState;
        default:
            return state;
    }
}
