import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../../reducers/index.js';
import Authenticator from '../../containers/Authenticator/index.js';
const Web3 = require('web3');

export default class App extends React.Component {
  constructor(props) {
    super(props);

    const web3 = new Web3(
      new Web3.providers.HttpProvider('https://ropsten.infura.io/')
    );

    const ABI = [ { "constant": true, "inputs": [], "name": "paymentAccepted", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "stateMutability": "pure", "type": "function" }, { "constant": true, "inputs": [], "name": "paymentDisbursed", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "stateMutability": "pure", "type": "function" } ];
    const smartContractAddress = '0x27fc9269b9b266b3af06c98ca7f69e5872002fa3';

    const ContractInstance = new web3.eth.Contract(ABI);
    ContractInstance.options.address = smartContractAddress;

    this.state = {
      ContractInstance
    }
  }

  render() {
    this.state.ContractInstance.methods.paymentAccepted().call().then(console.log)
    return (
      <Provider store={createStore(reducers)}>
        <Authenticator />
      </Provider>
    );
  }
}
