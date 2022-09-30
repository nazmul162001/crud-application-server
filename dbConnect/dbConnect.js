import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const dbConnect = async() => {
    try {
     await mongoose.connect(process.env.MONGODB_URI)  
     console.log('mongodb connect')
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
}

export default dbConnect