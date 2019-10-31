/* defines the behavior of the component SearchBar and connects it to the store  */

import { connect } from 'react-redux';

import SearchBar from '../components/SearchBar';
import fetchCocktails from '../actions/fetchCocktails';
import updateSearchStr from '../actions/updateSearchStr';
import stopWaitingResults from '../actions/stopWaitingResults';

const mapStateToProps = ({data, UI}) => ({
    isWaitingForResults: data.isWaitingForResults,
    searchFieldStr: UI.searchStr,
});

const mapDispatchToProps = dispatch => ({
    changeTextHandler: searchStr => {
        dispatch(updateSearchStr(searchStr));
        searchStr = searchStr.trim();
        if (searchStr.length > 2) {
            dispatch(fetchCocktails(searchStr));
        }
        else {
            // in case the user is deleting the search text. If there are pending results to arrive, we ignore them.
            dispatch(stopWaitingResults());
        }
    },
});

const SearchBarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchBar);

export default SearchBarContainer;
