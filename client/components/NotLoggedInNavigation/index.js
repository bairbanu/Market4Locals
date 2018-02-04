import React from 'react';
import { TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import Login from '../../containers/Login/index.js';
import Signup from '../../containers/SignUp/index.js';

export const NotLoggedInTabs = TabNavigator({
  Buy: {
    screen: Login,
    navigationOptions: {
      tabBarLabel: 'Login',
      tabBarIcon: ({ tintColor }) => <Icon size={35} color={tintColor} />,
    },
  },
  Sell: {
    screen: Signup,
    navigationOptions: {
      tabBarLabel: 'Signup',
      tabBarIcon: ({ tintColor }) => <Icon size={35} color={tintColor} />,
    },
  },
});
