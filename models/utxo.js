// (1) Create UTXO Class Constructor
// (2) In a separate module create a transaction class because UTXOs live in transactions
class UTXO {
	constructor(ownerPublicKey, walletAmount) {
		this.owner = ownerPublicKey // Public Key Wallet Address
		this.amount = walletAmount // Amount of UTXO's in Owners Wallet
		this.spent = false // Default to false because once its spent we are not going to allow it spend again
	}
}

module.exports = UTXO
