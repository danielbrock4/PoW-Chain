// (1) Import Dependencies
const Block = require('./models/block.js') // Import Block Class Constructor
const database = require('./database.js') // Import Database
const TARGET_DIFFICULTY = BigInt('0x00' + 'F'.repeat(62)) // Create Target Difficulty - Convert to Big Integers so we can compare Hash() values

// (3) Create Boolean for start/stop mining functions
let isMining = false
// mine()

// (4) Create startMining/stopMining Functions
function startMining() {
	isMining = true
	mine()
}

function stopMining() {
	isMining = false
}

// (2) Create mining function which will want to add block to the blockchain every so often [Moved to own file]
function mine() {
	if (!isMining) return // (C) If NOT mining === true will prevent mine function from executing in setTimeOut

	const block = new Block() // (D) Create New Block using constructor class

	while (BigInt('0x' + block.hash()) >= TARGET_DIFFICULTY) {
		// console.log(block.hash())
		block.nonce++ // Increment block nonce number until we find a hash value that is less difficulty
	}

	database.blockchain.addBlock(block) // (A) Add new Block to Blockchain by using addBlock() method Block class we created

	console.log(
		`Block ${database.blockchain.blockHeight()} is added to blockchain. Block Hash ${block.hash()} at nonce ${
			block.nonce
		}.`
	)

	setTimeout(mine, 5000) // (B) Use setTimeOut() to mine a new Block every 5 seconds
}

module.exports = {
	startMining,
	stopMining,
}
