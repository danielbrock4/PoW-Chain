// (1) Import Dependencies
const client = require('./client.js')

// -------------- Most of Code Below Comes from Jayson Documentation but Altered for our Use  --------------

// (2) Invoke Add
client.request('startMining', [], function (err, response) {
	if (err) throw err
	console.log(response.result) // Return = Mining Start: SuccessfuL
})
