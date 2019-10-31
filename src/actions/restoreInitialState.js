/* restores the store to the initial state of the application */

import {RESTORE_DEFAULT} from './actionTypes';

export default function restoreInitialState() {
    return {
        type: RESTORE_DEFAULT,
    };
}
