/* here we create initialize the store and define the data needed by react-navigation */

import React from 'react';
import { Provider } from 'react-redux';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import configureStore from './configureStore';
import HomeScreen from './screens/HomeScreen';
import FinderScreen from './screens/FinderScreen';

const MainNavigator = createStackNavigator({
    Home: {screen: HomeScreen},
    FinderScreen: {screen: FinderScreen},
});

const store = configureStore();

const AppNav = createAppContainer(MainNavigator);

const App = () => (
    <Provider store={store}>
        <AppNav />
    </Provider>
);

export default App;
