const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/blogDB')
    .then(() => console.log('✅ MongoDB Connected'))
    .catch(err => console.log(err));

// Blog Schema
const blogSchema = new mongoose.Schema({
    title: String,
    content: String,
    author: { type: String, default: "Mohanapriya S" },
    date: { type: Date, default: Date.now }
});
const Blog = mongoose.model('Blog', blogSchema);

// GET: Fetch all blogs
app.get('/api/blogs', async (req, res) => {
    const blogs = await Blog.find().sort({ date: -1 });
    res.json(blogs);
});

// POST: Add a blog
app.post('/api/blogs', async (req, res) => {
    const newBlog = new Blog(req.body);
    await newBlog.save();
    res.json({ success: true });
});

// --- DELETE ROUTE (ADD THIS) ---
app.delete('/api/blogs/:id', async (req, res) => {
    try {
        await Blog.findByIdAndDelete(req.params.id);
        res.json({ success: true, message: "Blog deleted" });
    } catch (err) {
        res.status(500).json({ success: false });
    }
});

app.listen(5000, () => console.log('🚀 Server running on port 5000'));