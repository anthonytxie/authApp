const mongoose = require('mongoose');
const { mongooseURI } = require('./../config/index.js')

mongoose.connect(mongooseURI, () => {
  console.log('Connected to mongoDB')
})

mongoose.Promise = global.Promise;