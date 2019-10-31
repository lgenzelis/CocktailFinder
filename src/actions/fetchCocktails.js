/* Makes calls to the API to get the list of cocktails matching the user's input */

import { debounce } from 'lodash';
import {Alert} from 'react-native';

import {REQUEST_COCKTAILS} from './actionTypes';
import receiveCocktails from './receiveCocktails';
import stopWaitingResults from './stopWaitingResults';


// this action is only needed inside of this module, so we don export it
function requestCocktails(requestId) {
    return {
        type: REQUEST_COCKTAILS,
        requestId,
    };
}

// these variables are used to keep track of the different calls made to the API
let lastRequestId = 0, lastSearchAnswered = -1;

// we use debounce, so that we don't many calls to the API in a row unnecessarily
const debouncedFetchCocktails = debounce((dispatch, searchStr, requestId) => {
    let fetchPending = true;
    // this function will be invoked when the request times out, or when fetch returns an error
    const handleError = () => {
        if (fetchPending) {
            dispatch(stopWaitingResults());
            // disregard next calls to handleError from the current call to debouncedFetchCocktails
            fetchPending = false;
            Alert.alert(
                'Network error',
                'Please check your internet connection.'
            );
        }
    };
    // fetch doesn't provide a timeout mechanism, so we implement our own
    setTimeout(handleError,3000);
    return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchStr.toLowerCase()}`)
        .then(response => response.json())
        .then(responseJson => {
            fetchPending = false;
            // the following check prevents the unlikely scenario where the results of a previous search arrive after
            // (and therefore overwrite) those of latter one
            if (requestId > lastSearchAnswered) {
                lastSearchAnswered = requestId;
                dispatch(receiveCocktails(responseJson, requestId));
            }
        }).
        catch(handleError);
    }, 250, // wait at least 250ms since the last call to debouncedFetchCocktails before executing it
    { maxWait: 800 }  // if 800ms have passed since the first call to debouncedFetchCocktails, we execute it
    );


export default function fetchCocktails(searchStr) {
    return dispatch => {
        // we tell our store that we are expecting results, before trying to fetch them
        dispatch(requestCocktails(lastRequestId));
        debouncedFetchCocktails(dispatch, searchStr, lastRequestId);
        lastRequestId += 1;
    };
}
