/* this action tells our store that we are no longer waiting from that (we either got answers to all of
* our fetches or are not interested in processing the remaining answers) */

import {STOP_WAITING_RESULTS} from './actionTypes';

export default function stopWaitingResults() {
    return {
        type: STOP_WAITING_RESULTS,
    };
}
