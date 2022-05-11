// (1) Import dependencies
const client = require('./client.js') // (1)
const { MINER_PUBLIC_KEY } = require('../config') // (2) We will want to hard key to get peoples balances

// -------------- Most of Code Below Comes from Jayson Documentation but Altered for our Use  --------------

// (2) Invoke add, which names/creates script to run on our server. The script function will be from index.js server file
client.request('getBalance', [MINER_PUBLIC_KEY], function (err, response) {
	if (err) throw err
	console.log(response.result) // Return = Mining Start: SuccessfuL
})
