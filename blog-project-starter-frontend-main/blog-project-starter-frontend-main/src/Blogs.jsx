import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Blogs() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [allBlogs, setAllBlogs] = useState([]);

    const fetchBlogs = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/blogs');
            setAllBlogs(res.data);
        } catch (err) { console.log(err); }
    };

    useEffect(() => { fetchBlogs(); }, []);

    const handleAddBlog = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/api/blogs', { title, content });
        setTitle(''); setContent('');
        fetchBlogs();
    };

    // DELETE FUNCTION
    const deleteBlog = async (id) => {
        if (window.confirm("Delete this blog?")) {
            try {
                const res = await axios.delete(`http://localhost:5000/api/blogs/${id}`);
                if (res.data.success) {
                    setAllBlogs(allBlogs.filter(blog => blog._id !== id));
                }
            } catch (err) { console.log("Delete failed", err); }
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-4xl mx-auto py-10 px-4">
                <h1 className="text-center text-5xl font-bold mb-10">Latest <span className="text-orange-400">Blogs</span> 📚</h1>

                {/* Form Section */}
                <div className="bg-white p-8 rounded-2xl shadow-lg mb-10">
                    <form onSubmit={handleAddBlog} className="space-y-4">
                        <input className="w-full p-3 border rounded-lg" placeholder="Blog Title" value={title} onChange={(e)=>setTitle(e.target.value)} required />
                        <textarea className="w-full p-3 border rounded-lg h-32" placeholder="Blog Content" value={content} onChange={(e)=>setContent(e.target.value)} required />
                        <button className="w-full bg-orange-500 text-white py-3 rounded-lg font-bold hover:bg-orange-600 transition">Add Blog</button>
                    </form>
                </div>

                {/* Blogs Display Section */}
                <div className="space-y-6">
                    {allBlogs.map((blog) => (
                        <div key={blog._id} className="relative bg-white p-6 rounded-2xl shadow-md border-l-8 border-orange-400 transition hover:shadow-xl">
                            <h2 className="text-2xl font-bold text-gray-800">{blog.title}</h2>
                            <p className="text-gray-600 mt-2">{blog.content}</p>
                            <p className="text-xs text-gray-400 mt-4 italic">By {blog.author} on {new Date(blog.date).toLocaleDateString()}</p>
                            
                            {/* DELETE BUTTON */}
                            <button 
                                onClick={() => deleteBlog(blog._id)}
                                className="absolute top-4 right-4 bg-red-50 text-red-500 px-3 py-1 rounded-md hover:bg-red-500 hover:text-white transition font-bold text-sm"
                            >
                                Delete
                            </button>
                        </div>
                    ))}
                </div>
            </div>
          
        </div>
    );
}

export default Blogs;