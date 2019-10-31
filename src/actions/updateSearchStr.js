/* updates the text of the search text field */

import {UPDATE_SEARCH_STR} from './actionTypes';

export default function updateSearchStr(searchStr) {
    return {
        type: UPDATE_SEARCH_STR,
        searchStr,
    };
}
