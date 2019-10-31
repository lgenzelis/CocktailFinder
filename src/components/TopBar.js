/* this is the top bar of the filter screen, composed by the search bar, the "go back: button and
* the cancel button  */

import React from 'react';
import {Text, StyleSheet, TouchableOpacity, View, Image} from 'react-native';
import PropTypes from 'prop-types';

import SearchBarContainer from '../containers/SearchBarContainer';
import AppText from './AppText';

function TopBar({showCancelButton, cancelPressHandler, backPressHandler}) {
    const cancelButton = showCancelButton ?
        <TouchableOpacity activeOpacity={0.78} onPress={cancelPressHandler}  style={styles.touchable}>
            <AppText>
                <Text style={styles.cancelText}>
                    Cancel
                </Text>
            </AppText>
        </TouchableOpacity>
        :
        undefined;
    return (
        <View style={styles.topBar}>
            <TouchableOpacity activeOpacity={0.78} onPress={backPressHandler}>
                <Image
                    source={require('../../assets/images/left_arrow.png')}
                    style={styles.iconStyle}
                />
            </TouchableOpacity>
            <SearchBarContainer />
            {cancelButton}
        </View>
    );
}
TopBar.propTypes = {
    showCancelButton: PropTypes.bool.isRequired,
    cancelPressHandler: PropTypes.func.isRequired,
    backPressHandler: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
    touchable: {
        marginLeft: 8,
    },
    cancelText: {
        color: 'red',
    },
    topBar: {
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
    },
    iconStyle: {
        height: 16,
        width: 16,
        resizeMode: 'stretch',
        marginRight: 8,
    },
});

export default TopBar;
