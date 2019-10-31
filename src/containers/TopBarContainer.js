/* defines the behavior of the component TopBar and connects it to the store  */

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import TopBar from '../components/TopBar';
import clearResults from '../actions/clearResults';

const mapStateToProps = ({data, UI}, {navigate}) => ({
    showCancelButton: data.cocktails.allIds.length > 0 || UI.searchStr.length > 0,
    backPressHandler: () => {navigate('Home');},
});

const mapDispatchToProps = dispatch => ({
    cancelPressHandler: () => dispatch(clearResults()),
});

const TopBarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TopBar);

// we need the navigate function to go back to the home screen when the user presses the back button of the
// top bar
TopBarContainer.propTypes = {
    navigate: PropTypes.func.isRequired,
};

export default TopBarContainer;
