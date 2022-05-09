// Import Dependencies
const { PORT } = require('../config.js') // (3) Import config.js

// Import Node Modules
const jayson = require('jayson') // (1) Import Jayson Node Module

// -------------- Most of Code Below Comes from Jayson Documentation but Altered for our Use  --------------

// (2) Create a Client
const client = jayson.Client.http({
	port: PORT,
})

module.exports = client
