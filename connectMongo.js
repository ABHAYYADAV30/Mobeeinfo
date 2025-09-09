// connectMongo.js
const { MongoClient } = require('mongodb');

const uri = 'mongodb://127.0.0.1:27017'; // or your MongoDB Atlas URI
const client = new MongoClient(uri);

async function connectDB() {
  try {
    await client.connect();
    console.log('✅ Connected to MongoDB');
    const db = client.db('mobeeinfo'); // Create/use this DB
    return db;
  } catch (err) {
    console.error('❌ MongoDB connection error:', err);
  }
}

module.exports = connectDB;
