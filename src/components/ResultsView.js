/* shows the list of cocktails found to the user */

import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

import CocktailView from './CocktailView';

export default function ResultsView({cocktails}) {
    return (
        <FlatList
            style={styles.flatList}
            data={cocktails}
            renderItem={({item}) => <CocktailView {...item} />}
        />
    );
}
ResultsView.propTypes = {
    cocktails: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string.isRequired,
        cocktail: PropTypes.string.isRequired,
        picURL: PropTypes.string.isRequired,
    })).isRequired,
};

const styles = StyleSheet.create({
    flatList: {
        paddingTop: 15,
    },
});
