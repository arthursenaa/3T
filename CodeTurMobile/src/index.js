import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import MainScreen from './pages/main';
import HomeInScreen from './pages/Home';

const AuthStack = createStackNavigator({
    Sign: { screen: HomeInScreen },
});

export default createAppContainer(
    createSwitchNavigator(
        {
            AuthStack,
        },
        {
            initialRouteName: 'AuthStack',
        },
    ),
);