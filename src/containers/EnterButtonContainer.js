/* defines the behavior of the component EnterButton and connects it to the store  */

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import EnterButton from '../components/EnterButton';
import restoreInitialState from '../actions/restoreInitialState';

const mapDispatchToProps = (dispatch, ownProps) => ({
    onPress: () => {
        // in case the user has already been to the FinderScreen, navigated back to HomeScreen and now is pressing
        // the button to go to the FinderScreen again
        dispatch(restoreInitialState());
        ownProps.navigate('FinderScreen');
    },
});

const EnterButtonContainer = connect(
    null,
    mapDispatchToProps
)(EnterButton);

// we need the navigate function to go back to the filter screen when the user presses the button
EnterButtonContainer.propTypes = {
    navigate: PropTypes.func.isRequired,
};

export default EnterButtonContainer;
