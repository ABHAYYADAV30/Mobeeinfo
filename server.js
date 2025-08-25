const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// ✅ MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/mobeeinfo")
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

// ✅ Schema & Model
const phoneSchema = new mongoose.Schema({
  name: String,
  brand: String,
  price: Number,
  specs: Object,
  features: Array
});

const Phone = mongoose.model("Phone", phoneSchema);

// ✅ Routes

// Get all phones
app.get("/api/phones", async (req, res) => {
  try {
    const phones = await Phone.find();
    res.json(phones);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a new phone
app.post("/api/phones", async (req, res) => {
  try {
    const newPhone = new Phone(req.body);
    await newPhone.save();
    res.json(newPhone);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get phone by ID
app.get("/api/phones/:id", async (req, res) => {
  try {
    const phone = await Phone.findById(req.params.id);
    if (!phone) return res.status(404).json({ error: "Phone not found" });
    res.json(phone);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete phone
app.delete("/api/phones/:id", async (req, res) => {
  try {
    await Phone.findByIdAndDelete(req.params.id);
    res.json({ message: "Phone deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update phone
app.put("/api/phones/:id", async (req, res) => {
  try {
    const updatedPhone = await Phone.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedPhone);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Start Server
const PORT = 5000;
app.listen(PORT, () => console.log('🚀 Server running on http://localhost:${PORT}'));