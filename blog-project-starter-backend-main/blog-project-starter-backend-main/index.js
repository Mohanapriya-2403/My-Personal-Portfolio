const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// --- MIDDLEWARE ---
app.use(cors()); 
app.use(express.json()); 

// --- 1. DATABASE CONNECTION ---
// Replace 'blogDB' with your actual database name from MongoDB Compass
mongoose.connect('mongodb://127.0.0.1:27017/blogDB')
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.log('❌ Connection Error:', err));

// --- 2. SCHEMAS & MODELS ---

// Updated User Schema to include 'name'
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});
const User = mongoose.model('User', UserSchema);

// Blog Schema
const BlogSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: String,
  date: { type: Date, default: Date.now }
});
const Blog = mongoose.model('Blog', BlogSchema);

// Contact Schema
const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  createdAt: { type: Date, default: Date.now }
});
const Contact = mongoose.model('Contact', ContactSchema);

// --- 3. ROUTES ---

// AUTH: Signup Route (Now saving Name)
app.post('/api/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: "User already exists!" });
    }

    const newUser = new User({ name, email, password });
    await newUser.save();
    
    res.status(201).json({ success: true, message: "User created successfully!" });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// AUTH: Login Route
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || user.password !== password) {
      return res.status(401).json({ success: false, message: "Invalid email or password" });
    }

    res.status(200).json({ 
      success: true, 
      message: "Login successful!", 
      user: { name: user.name, email: user.email } 
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// BLOGS: Fetch all blogs
app.get('/api/blogs', async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// CONTACT: Submit message
app.post('/api/contact', async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.status(200).json({ success: true, message: "Message sent successfully!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// --- 4. SERVER START ---
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});