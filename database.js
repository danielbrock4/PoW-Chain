// (1) Import Modules/Dependencies and create Block and Blockchain classes
const Blockchain = require('./models/blockchain.js') // (1) Create & Import Blockchain Class Constructor

// (2) Create database to hold the blockchain
const database = {
	blockchain: new Blockchain(), // Construct Blockchain with array using the Blockchain Constructor
}

module.exports = database