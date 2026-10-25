const mongoose = require('mongoose')

const databseName = 'resumind'

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);// Exit the process with an error code
  }
}

module.exports = connectDB;