const express = require('express');
const { port } = require('./config/index')
const mongooseConnection = require('./db/mongoose.js')
const app = require('./app');

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})