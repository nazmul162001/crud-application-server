import express from 'express'
import route from './Route/Routes.js'
import cors from 'cors'
import bodyParser from 'body-parser'
import dbConnect from './dbConnect/dbConnect.js'
const app = express()
const port = process.env.PORT || 5000
app.use(cors())

// .env //
// MONGODB_URI=mongodb+srv://dashboardCrudApplication:aUz88vj8r5ks82ku@cluster0.c3pdl3e.mongodb.net/?retryWrites=true&w=majority

// PORT=5000
////////

//mongoose connect
// mongoose.connect(process.env.MONGODB_URI, () => {
//   console.log('mongodb connected')
// })

dbConnect()


// middleware
app.use(bodyParser.json())
app.use('/api/user', route)

app.get('/', (req, res) => {
  res.send('My Todos app running')
})

app.listen(port, () => {
  console.log('server connected')
})
