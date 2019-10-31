/* this is the button from the home screen, which takes us to the finder screen */

import React from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
    Image,
} from 'react-native';
import PropTypes from 'prop-types';

import AppText from './AppText';

export default function EnterButton({onPress}) {
    return (
        <TouchableOpacity activeOpacity={0.78} onPress={onPress}>
            <View style={styles.button}>
                <Image
                    source={require('../../assets/images/search-icon.png')}
                    style={styles.iconStyle}
                    tintColor="#d82b5d"
                />
                <AppText>
                    <Text  style={styles.buttonText}>
                        Search your favourite cocktail
                    </Text>
                </AppText>
            </View>
        </TouchableOpacity>
    );
}
EnterButton.propTypes = {
    onPress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
    button: {
        marginTop: 25,
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 8,
    },
    buttonText: {
        color: 'grey',
        fontSize: 18,
    },
    iconStyle: {
        marginRight: 30,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
    },
});
