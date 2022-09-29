const mongoose = require('mongoose')
const dotenv = require('dotenv').config()

const dbConnect = async() => {
    try {
     await mongoose.connect(process.env.MONGODB_URI)  
     console.log('mongo connect')
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
}

module.exports = dbConnect