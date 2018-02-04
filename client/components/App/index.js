import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
const Web3 = require('web3');

/* [ { "constant": true, "inputs": [], "name": "test", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" } ] */
/* 0xf715519fa02465ca1af5f95fc73b590e31bbd463 */
export default class App extends React.Component {
  // componentWillMount() {
  //   const web3 = new Web3(
  //     new Web3.providers.HttpProvider('https://ropsten.infura.io/')
  //   );
  //
  //   // console.log('web3::', Object.keys(web3.eth))
  //   // const abi = [ { "constant": true, "inputs": [], "name": "test", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" } ];
  //   // const address = '0xf715519fa02465ca1af5f95fc73b590e31bbd463'
  //   // //
  //   // const MyContract = web3.eth.Contract(abi);
  //   console.log('contract:::', MyContract)
  //   //
  //   // console.log('contract:::', MyContract)
  //   // web3.eth.contract([ { "constant": true, "inputs": [], "name": "test", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" } ]).at('0xf715519fa02465ca1af5f95fc73b590e31bbd463').test((err, result) => {
  //     // console.log(result)
  //   // })
  // }

  componentWillMount() {
    const web3 = new Web3(
      // new Web3.providers.HttpProvider('https://ropsten.infura.io/')
      new Web3.providers.HttpProvider('https://ropsten.infura.io/')
    );

    const abi = [ { "constant": true, "inputs": [], "name": "test", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" } ];
    const ad = '0xb9b9160673d22611104c6ed03da2f55338d27051'

    const Contract = new web3.eth.Contract(abi)
    Contract.options.address = ad
    Contract.methods.test().call().then(console.log)
    // console.log('web3::', new web3.eth.Contract(abi).options.address)

    // web3.eth.getBlock('latest').then(console.log)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
