/* generic text element, used to have a common style throughout the app  */

import React from 'react';
import PropTypes from 'prop-types';
import {
    StyleSheet,
    Text,
} from 'react-native';

export default function AppText({children}) {
    return (
        <Text style={styles.baseText}>
            {children}
        </Text>
    );
}
AppText.propTypes = {
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
};

const styles = StyleSheet.create({
    baseText: {
        fontFamily: 'Cochin',
    },
});
