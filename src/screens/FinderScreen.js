/* this is the screen where the user searches for cocktails (Wireframe 2) */

import React from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import ResultsViewContainer from '../containers/ResultsViewContainer';
import TopBarContainer from '../containers/TopBarContainer';

class FinderScreen extends React.Component {
    // prevents react navigation from adding a white bar on the top of the screen
    static navigationOptions = {
        header: null,
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.mainView}>
                <TopBarContainer navigate={navigate}/>
                <LinearGradient start={{x: 0, y: 1}} end={{x: 1, y: 0}} colors={['#c81492', '#e53f31']} style={styles.linearGradient}>
                    <ResultsViewContainer />
                </LinearGradient>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
    },
    linearGradient: {
        flex: 1,
    },
});


export default FinderScreen;
