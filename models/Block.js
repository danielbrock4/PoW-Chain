// Import Node Modules
const SHA256 = require('crypto-js/sha256')

// (2) Create Block Class with block properties
class Block {
	constructor() {
		this.timeStamp = Date.now() // Return unix timestamp
		this.nonce = 0 // Set Empty nonce value to 0
	}
	hash() {
		return SHA256(this.timeStamp + '' + this.nonce).toString()
	}
}

// Hash Function Check ---------------------------------------------------------------
// let block = new Block()
// console.log(block)
// block = block.hash()
// console.log(block)

module.exports = Block
