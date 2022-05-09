// (1) Create Blockchain Class Object to allow us the option to create/run multiple blockchains
class Blockchain {
	constructor() {
		this.blockchainArray = [] // (A) Create Genesis Block by using the 1st instance of the Block Class Constructor within the Blockchain Class Constructor
	}
	// (2) Add Block to Blockchain Array
	addBlock(block) {
		return this.blockchainArray.push(block) // (A) Using Push() add a block to blockchain array (this.chain) created from Blockchain class constructor
	}
	// (3) Get Blockchain height aka blockchain length which is how many blocks are in blockchain
	blockHeight() {
		return this.blockchainArray.length
	}
}

module.exports = Blockchain
