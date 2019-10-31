/* Clears all the results and the search field, and stop accepting incoming results */

import {CLEAR_RESULTS} from './actionTypes';

export default function clearResults() {
    return {
        type: CLEAR_RESULTS,
    };
}
