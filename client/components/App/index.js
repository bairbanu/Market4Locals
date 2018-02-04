import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../../reducers/index.js';
import MarketList from '../../containers/MarketList/index.js';
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
      <Provider store={createStore(reducers)}>
        <MarketList />
      </Provider>
    );
  }
}
