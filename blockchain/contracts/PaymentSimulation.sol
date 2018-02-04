pragma solidity ^0.4.15;
/*
  ABI = [ { "constant": true, "inputs": [], "name": "paymentAccepted", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "stateMutability": "pure", "type": "function" }, { "constant": true, "inputs": [], "name": "paymentDisbursed", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "stateMutability": "pure", "type": "function" } ]
  address = '0x27fc9269b9b266b3af06c98ca7f69e5872002fa3'
*/

contract PaymentSimulation {
  function paymentAccepted() public pure returns (string) {
    return "Thank you for buying! Your payment is stored in the smart contract and will be disbursed upon delivery.";
  }

  function paymentDisbursed() public pure returns (string) {
    return "Hope you enjoy! Transaction is now complete.";
  }
}
