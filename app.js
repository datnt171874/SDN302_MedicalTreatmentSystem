require('dotenv').config();
const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGODB_CONNECT_URI;

async function connectDB() {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1);
  }
}

connectDB();
