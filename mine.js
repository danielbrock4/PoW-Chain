// (1) Import Dependencies
const Block = require('./models/block.js') // Import Block Class Constructor
const database = require('./database.js') // Import Database
const Transaction = require('./models/transaction.js') // Import Transactions Class Constructor
const UTXO = require('./models/utxo.js') // Import UTXO Class Constructor
const { MINER_PUBLIC_KEY, MINER_PRIVATE_KEY } = require('./config.js')
// (1.a) Set Variables
const TARGET_DIFFICULTY = BigInt('0x00' + 'F'.repeat(62)) // Create Target Difficulty - Convert to Big Integers so we can compare Hash() values
const BLOCK_REWARD = 10 // Set variable for miner coinbase reward for mining a block

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

	// TODO: Add Transactions from the Mempool

	const coinbaseUTXO = new UTXO(MINER_PUBLIC_KEY, BLOCK_REWARD) // (E) Create coinbase reward for successfully mining a block
	const coinbaseTX = new Transaction([], [coinbaseUTXO]) // (F) Create transaction for Coinbase Reward for mining
	block.addTransaction(coinbaseTX)

	while (BigInt('0x' + block.hash()) >= TARGET_DIFFICULTY) {
		// console.log(block.hash())
		block.nonce++ // Increment block nonce number until we find a hash value that is less difficulty
	}

	// Add a record of coinbase reward to database by executing the method from Transaction
	block.execute()

	database.blockchain.addBlock(block) // (A) Add new Block to Blockchain by using addBlock() method Block class we created

	console.log(
		`Block ${database.blockchain.blockHeight()} added to blockchain. Hash ${block.hash()}. Nonce ${
			block.nonce
		}. Coinbase Reward ${block.transactions[0].outputUTXOs[0]} UTXOs.`
	)

	setTimeout(mine, 5000) // (B) Use setTimeOut() to mine a new Block every 5 seconds
}

module.exports = {
	startMining,
	stopMining,
}
