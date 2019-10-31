/* shows to search bar of the filter screen (i.e., the grey bar of the second wireframe) */

import React from 'react';
import {Image, StyleSheet, TextInput, View, ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types';

function SearchBar({searchFieldStr, isWaitingForResults, changeTextHandler}) {
    return (
        <View style={styles.searchBar}>
            <Image
                source={require('../../assets/images/search-icon.png')}
                style={styles.iconStyle}
                tintColor="gray"
            />
            <TextInput
                style={styles.searchField}
                placeholder="Search"
                onChangeText={text => changeTextHandler(text)}
                autoFocus = {true}
                defaultValue={searchFieldStr}
            />
            {isWaitingForResults ? <ActivityIndicator /> : null}
        </View>
    );
}
SearchBar.propTypes = {
    searchFieldStr: PropTypes.string.isRequired,
    isWaitingForResults: PropTypes.bool.isRequired,
    changeTextHandler: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
    searchField: {
        marginLeft: 6,
        padding: 0,
        flex: 1,  // so that the user can click anywhere (almost) on the search bar give it focus
    },
    searchBar: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'lightgray',
        padding: 5,
        paddingLeft: 10,
        borderRadius: 8,
        flexDirection: 'row',
    },
    iconStyle: {
        height: 16,
        width: 16,
        resizeMode: 'stretch',
    },
});

export default SearchBar;
