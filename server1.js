const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/mobeeinfoDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Error:", err));

// Schema
const phoneSchema = new mongoose.Schema({
  name: String,
  brand: String,
  description: String
});
const Phone = mongoose.model('Phone', phoneSchema);

// API to get all phones
app.get('/phones', async (req, res) => {
  const phones = await Phone.find();
  res.json(phones);
});

// API to search phones
app.get('/search', async (req, res) => {
  const query = req.query.q;
  const result = await Phone.find({
    $or: [
      { name: { $regex: query, $options: 'i' } },
      { brand: { $regex: query, $options: 'i' } }
    ]
  });
  res.json(result);
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
