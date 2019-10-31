/* this element shows the logo of the app in the home screen (i.e., the cocktail picture with the name of the
* app under it */

import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native';

import AppText from './AppText';

export default function Logo() {
    return (
        <View style={styles.view}>
            <Image source={require('../../assets/images/cocktail-icon.png')} style={styles.image}/>
            <AppText>
                <Text style={styles.text}>
                    <Text style={styles.textBold}>
                        Cocktail
                    </Text>
                    Finder
                </Text>
            </AppText>
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        alignItems: 'center',
    },
    image: {
        marginBottom: 5,
    },
    text: {
        color: 'white',
        fontSize: 30,
    },
    textBold: {
        fontWeight: 'bold',
    },
});
