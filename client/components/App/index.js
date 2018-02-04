import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../../reducers/index.js';
import { Tabs } from '../Navigation/index.js';
import { StyleSheet } from 'react-native';
const Web3 = require('web3');

export default class App extends React.Component {
  componentWillMount() {
    const web3 = new Web3(
      new Web3.providers.HttpProvider('https://ropsten.infura.io/')
    );

    web3.eth.getBlock('latest').then(console.log)
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <Tabs style={styles.navbar} />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  navbar: {
    marginTop: 30,
  },
});
