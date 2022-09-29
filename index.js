const express = require('express')
const app = express()
const dbConnect = require('./dbConnect/dbConnect')

// connect to db 
dbConnect()

app.listen(5000, () => {
  console.log('server listening on port 5000')
})
