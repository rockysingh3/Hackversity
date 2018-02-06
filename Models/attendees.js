'use strict'
const config = require('../config');
const Mongoose = require('mongoose').connect(config.dbURI);


// check if the db is connected
Mongoose.connection.on('error', error => {
  console.log("MongoDB Error: ", error);
});
