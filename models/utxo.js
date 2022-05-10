// (1) Create UTXO Class Constructor
class UTXO {
	constructor(owner, amount) {
		this.owner = owner // public key
		this.amount = amount
		this.spent = false
	}
}
