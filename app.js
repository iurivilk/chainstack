// Create a web3 instance to import web3 library
const Web3 = require('web3');

// Set the provider:
const endpoint = ''; 

// Adding a reconnect request_kwargs parameter in case of losing connection
var options = {
    timeout: 30000,
    clientConfig: {
      // Useful if requests are large
      maxReceivedFrameSize: 100000000,
      maxReceivedMessageSize: 100000000,

      // Useful to keep a connection alive
      keepalive: true,
      keepaliveInterval: 60000 // ms
    },
    // Enable auto reconnection
    reconnect: {
      auto: true,
      delay: 5000,
      maxAttempts: 15,
      onTimeout: false,
    },
  };

//  Instantiating a WebSocketProvider and assigning it to the web3 variable
const web3 = new Web3(new Web3.providers.WebsocketProvider(endpoint, options));

// Subscribing to pendingTransactions method from the mempool, a waiting area for the transactions that haven't been added to a block and are still unconfirmed.
var subscription = web3.eth.subscribe('pendingTransactions', function(error, result){
    if (!error)
    // Getting the transaction body by hash 
        subscription.on("data", (txHash) => {
            setTimeout(async () => {
              try {
                let tx = await web3.eth.getTransaction(txHash);
                // printing the transactions on the console
                if(tx != null)
                console.log('Pending transaction: ', tx)
              } catch (err) {
                console.error(err);
              }
            });
          });
})
.on("data", function(transaction){
    console.log(transaction);
});

// unsubscribes the subscription
subscription.unsubscribe(function(error, success){
    if(success)
        console.log('Successfully unsubscribed!');
});
