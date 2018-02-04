import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../../reducers/index.js';
import MarketList from '../../containers/MarketList/index.js';
const Web3 = require('web3');

export default class App extends React.Component {
  componentWillMount() {
    const web3 = new Web3(
      new Web3.providers.HttpProvider('https://mainnet.infura.io/')
    );

    web3.eth.getBlock('latest').then(console.log)
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <MarketList />
      </Provider>
    );
  }
}
