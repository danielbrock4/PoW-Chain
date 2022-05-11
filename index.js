// Run "nodemon index" to start blockchain server

// Import Dependencies
// const Blockchain = require('./models/blockchain.js') // (1) Create & Import Blockchain Class Constructor
// const Block = require('./models/block.js') // (2) Create & Import Block Class Constructor
// const database = require('./database.js') // (3) Create & Import Create Database
const { startMining, stopMining } = require('./mine.js') // (4) Create & Import Mine Function
// const startMining = require('./scripts/startMining.js') // (7) Create & Import startMining Function
const { PORT } = require('./config.js') // (8) Create & Import config
const { blockchain, utxoDatabase } = require('./database.js')

// Import Node Modules
const jayson = require('jayson') // Creates JSON-RPC server (a simple bare-bones server compare to request/response model)

// -------------- Most of Code Below Comes from Jayson Documentation but Altered for our Use  --------------

// (5) Create a Server and within the server lives server functions, but server scripts are named and connect to the server in scripts folder
const server = new jayson.server({
	// startMining is a script from the scripts folder
	// No Argument(args) Parameter indicated by _ blank parameter
	startMining: function (_, callback) {
		callback(null, 'START MINING: Successful')
		startMining()
	},
	stopMining: function (_, callback) {
		callback(null, 'STOP MINING: Successful')
		stopMining()
	},
	// address is public key
	getBalance: function (address, callback) {
		// console.log(
		// 	utxoDatabase.map((x) => x.owner),
		// 	address
		// )
		const genesisMinerUTXOs = utxoDatabase.filter((x) => {
			// console.log(x.owner, address, x.spent)
			return x.owner === address && !x.spent
		})
		// console.log(utxoDatabase.length)
		// console.log(utxoDatabase)
		const sum = genesisMinerUTXOs.reduce((p, c) => p + c.amount, 0)
		console.log({ balance: sum.toString() })

		callback(null, 'STOP MINING: Successful')
		stopMining()
	},
})

// (6) Run Server on Port 3032 from config.js
/* To kill server run "npx kill-port ####" in the terminal */
server.http().listen(PORT)
