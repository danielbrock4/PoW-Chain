// (1) Import Node Modules
const SHA256 = require('crypto-js/sha256')

// (2) Create Block Class with block properties
class Block {
	constructor() {
		this.timeStamp = Date.now() // (A) Return unix timestamp
		this.nonce = 0 // (A) Set Empty nonce value to 0
		this.transactions = [] // (B) Array to hold transactions (We decided to not use a Tree to keep it simple)
	}
	// (3) Create block header using has function
	hash() {
		return SHA256(
			this.timeStamp + '' + this.nonce + '' + JSON.stringify(this.transactions) // Add + '' + between properties for SHA256
		).toString()
	}
	// tx = transaction array
	addTransaction(transaction) {
		this.transactions.push(transaction)
	}
	// (4)
	execute() {
		this.transactions.forEach((x) => x.execute())
	}
}

// --- Check --- new Block() ----------------------------------
// let block = new Block()
// console.log(block)

// --- Check --- addTransaction() ----------------------------------
// const Transaction = require('./transaction.js')
// const transaction = new Transaction([], [10]);
// console.log(transaction)
// console.log(transaction.outputUTXOs[0])

// block.addTransaction(transaction)
// console.log(block)
// console.log(block.transactions[0].outputUTXOs[0])

// --- Check --- hash() ----------------------------------
// block = block.hash()
// console.log(block)

// --- Check --- addTransaction() ----------------------------------

module.exports = Block
