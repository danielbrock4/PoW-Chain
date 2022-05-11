// (1) Import Node Module Elliptic to generate Public Private Keys
const EC = require('elliptic').ec

// (2) Create and initialize EC instance
const ec = new EC('secp256k1') // secp256k1 refers to the parameters of the elliptic curve used in Bitcoin's public-key cryptography
// console.log(ec)

// (3) Create Key variable to hold EC Instance and Generate Key Method
const key = ec.genKeyPair()

// (4) Script Result for Generating Key in Terminal by running "node generate"\
// (4.a) Use Key create Separate .getPrivate() and .getPrivate()
// (4.b) Public Key is object ith two hex string properties (x and y)
// (4.c) Add .toString() to convert object to string and place "16" to make it hexadecimal
console.log({
	privateKey: key.getPrivate().toString(16),
	// publicX: key.getPublic().x.toString(16),
	// publicY: key.getPublic().y.toString(16),
	publicKey: key.getPublic().encode('hex'), // Method for one line public key which combines the x and y coordinate from the curve
})
