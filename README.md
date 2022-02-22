# Mempool Ethereum Blockchain Pending Transactions

# Technologies
Node.js and Web3.js

# Variables
- On the line 4 of "app.js" you can set your WSS endpoint.

# Pre-requisites
- Download and install [Node.js](https://nodejs.org/en/download/)
- npm install
- npm start

- Install [web3.js](https://web3js.readthedocs.io/en/v1.7.0/getting-started.html)
- npm install web3

# Getting started
- Run the file "app.js" from the project on your IDE

# Returns
- The console should be displaying the returned transactions where
- "data" returns the transaction hash on each incoming pending transaction 
- with some of the following values: chainId, blockHash, blockNumber, from, to, value, nonce, gas, gasPrice, etc;

- Example {blockHash: null, 
-          blockNumber: null, 
-          from: '0xF9A700595D77370C3Ca1412ADb07DFe81e51FEEe',
-          gas: 70648, 
-          gasPrice: '82000000000'}


- "error" returns an object when an error in the subscription occurs.
 
