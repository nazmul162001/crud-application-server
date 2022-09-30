import express from 'express'
import route from './Route/Routes.js'
import cors from 'cors'
import bodyParser from 'body-parser'
import dbConnect from './dbConnect/dbConnect.js'
const app = express()
const port = process.env.PORT || 5000
app.use(cors())

// mongoDB database connect
dbConnect()

// middleware
app.use(bodyParser.json())
app.use('/api/v1/users', route)

app.get('/', (req, res) => {
  res.send('My Crud Application Running')
})

app.listen(port, () => {
  console.log('server connected')
})
