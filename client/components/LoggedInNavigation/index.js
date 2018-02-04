import React from 'react';
import { TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import MarketList from '../../containers/MarketList/index.js';
import SellItem from '../SellItem/index.js';

export const LoggedInTabs = TabNavigator({
  Buy: {
    screen: MarketList,
    navigationOptions: {
      tabBarLabel: 'Market',
      tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
    },
  },
  Sell: {
    screen: SellItem,
    navigationOptions: {
      tabBarLabel: 'Sell',
      tabBarIcon: ({ tintColor }) => <Icon size={35} color={tintColor} />,
    },
  },
});
