/* this is the first screen the user sees when he enters the app (i.e., Wireframe 1) */

import React from 'react';
import {
    StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Logo from '../components/Logo';
import EnterButtonContainer from '../containers/EnterButtonContainer';

class HomeScreen extends React.Component {
    // prevents react navigation from adding a white bar on the top of the screen
    static navigationOptions = {
        header: null,
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <LinearGradient start={{x: 0, y: 1}} end={{x: 1, y: 0}} colors={['#e53f31', '#c81492']} style={styles.linearGradient}>
                <Logo/>
                <EnterButtonContainer navigate={navigate} />
            </LinearGradient>
        );
    }
}


const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        padding: 15,
   },
});

export default HomeScreen;
