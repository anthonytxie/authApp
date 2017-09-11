const port = 1993 || process.env.PORT 
const mongooseURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/authApp'

module.exports = { port, mongooseURI }