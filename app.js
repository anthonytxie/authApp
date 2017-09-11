const express = require('express');
const app = express();
// const authRoutes = require('./../routes/authRoutes');
const basicRoutes = require('./routes/basicRoutes');

app.use(basicRoutes)


module.exports = app; 