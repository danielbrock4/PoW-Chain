const { utxoDatabase } = require('../database')

// (1) Create Transaction Class Constructor because our UTXOs live in a transaction
class Transaction {
	constructor(inputUTXOsArray, outputUTXOsArray) {
		// Transactions will take in an array of UTXOs because have many inputs and many outputs
		this.inputUTXOs = inputUTXOsArray
		this.outputUTXOs = outputUTXOsArray
	}
	// (2) When we execute the transaction and we create & validate a block, we need to execute all our transactions and make sure all the inputs are greater than all the outputUTXOs
	execute() {
		/* (3) foreach() does return undefined but it will back and change inputUTX0s in the array to true, because now they have been spent. When a transaction is successful and mined to the blockchain, the output UTXOs become new TXOs that are ready to be spent. The input UTXOs need to be marked as spent, to ensure that they are not spent again! After all, the whole purpose of the blockchain is to fix the double-spend problem*/
		this.inputUTXOs.forEach((input) => {
			input.spent = true
		})
		// (4) Add outputs to the database of UTXOs which is in database object held in an array
		this.outputUTXOs.forEach((output) => {
			utxoDatabase.push(output)
		})
	}
}

// --- Check --- new Block() ----------------------------------
// const transaction = new Transaction([], [10]);
// console.log(transaction)
// console.log(transaction.outputUTXOs[0])

module.exports = Transaction
