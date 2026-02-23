import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer' 
import BlogProfileImage from "./assets/Blog Website Design.png"
import CSS from "./assets/css-3.png"
import HTML from "./assets/html.png"
import DB from "./assets/data-server.png"
import JS from "./assets/js.png"
import REACTICON from "./assets/physics.png"
import NODE from "./assets/node-js.png"
import P1 from "./assets/p1.jpg"
import P2 from "./assets/p2.png"
import P3 from "./assets/p3.png"
import BlogImage from "./assets/blogImage.png"

function Home() {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);

    // --- BLOG CONTENT DATA ---
    const latestBlogs = [
        {
            title: "Why I Chose the MERN Stack",
            desc: "A deep dive into why MongoDB, Express, React, and Node.js are the perfect toolkit for 2026.",
            category: "Tech"
        },
        {
            title: "Beautiful UI with Tailwind",
            desc: "How utility-first CSS is changing the way we style modern web applications.",
            category: "Design"
        }
    ];

    const handleHireMeClick = () => {
        setIsModalOpen(true);
    };

    return (
        <div className="relative font-sans">
            {/* 1. HERO SECTION */}
            <div className='flex flex-col sm:flex-row items-center justify-center py-16 px-6 max-w-7xl mx-auto'>
                <div className="w-full sm:w-1/2 flex flex-col justify-center">
                    <h2 className='text-3xl md:text-5xl font-bold pb-2 text-gray-800'>Hy! I Am</h2>
                    <h2 className='text-4xl md:text-7xl font-bold text-orange-400 py-2'>Mohanapriya S</h2>
                    <p className='py-4 text-gray-600 text-lg md:text-xl max-w-lg'>
                        I am a <span className="font-bold text-gray-800">MERN Stack Developer | Fresher</span> building stunning, 
                        functional websites with modern web technologies.
                    </p>
                    <button 
                        onClick={handleHireMeClick}
                        className='bg-orange-500 text-white w-fit px-10 py-4 rounded-xl font-bold mt-4 hover:bg-orange-600 transition-all hover:scale-105 shadow-xl'
                    >
                        Hire Me
                    </button>
                </div>
                <div className="hidden sm:block w-1/3">
                    <img src={BlogProfileImage} className='w-full rounded-3xl shadow-2xl border-8 border-white' alt="Profile" />
                </div>
            </div>

            {/* 2. SKILL ICONS */}
            <div className='flex justify-evenly py-12 bg-gray-50 border-y border-gray-100'>
                {[HTML, CSS, JS, REACTICON, NODE, DB].map((icon, index) => (
                    <img key={index} src={icon} alt="skill" className="w-10 h-10 md:w-14 md:h-14 object-contain grayscale hover:grayscale-0 hover:scale-125 transition-all cursor-pointer" />
                ))}
            </div>

            {/* 3. PROJECTS SECTION */}
            <div className="max-w-6xl mx-auto px-4 py-10">
                <h2 className='text-center text-5xl mb-14 font-bold text-gray-800'>My <span className="text-orange-400">Projects</span></h2>
                <div className='grid grid-cols-1 sm:grid-cols-3 gap-8'>
                    <img src={P1} className='w-full border-4 border-white shadow-xl rounded-xl hover:rotate-3 transition' alt="P1" />
                    <img src={P2} className='w-full border-4 border-white shadow-xl rounded-xl hover:-rotate-3 transition' alt="P2" />
                    <img src={P3} className='w-full border-4 border-white shadow-xl rounded-xl hover:rotate-3 transition' alt="P3" />
                </div>
            </div>

            {/* 4. BLOGS SECTION (Integrated content here) */}
            <div className="bg-orange-50 py-20 px-4 mt-10">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center justify-between mb-12">
                        <div className="text-center md:text-left">
                            <h2 className="text-4xl font-bold text-gray-800">Latest <span className="text-orange-500">Blogs</span></h2>
                            <p className="text-gray-600 mt-2">Insights into full-stack development and design</p>
                        </div>
                        <button 
                            className='hidden md:block bg-gray-800 text-white px-8 py-3 rounded-lg font-bold hover:bg-black transition' 
                            onClick={() => navigate("/blogs")}
                        >
                            View All Posts
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {latestBlogs.map((blog, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl shadow-md border-l-8 border-orange-400 hover:shadow-xl transition">
                                <span className="text-orange-500 font-bold text-sm uppercase">{blog.category}</span>
                                <h4 className="text-2xl font-bold my-2 text-gray-800">{blog.title}</h4>
                                <p className="text-gray-600 mb-4">{blog.desc}</p>
                                <button onClick={() => navigate("/blogs")} className="text-orange-500 font-bold hover:underline">Read more →</button>
                            </div>
                        ))}
                    </div>
                    
                    <button 
                        className='md:hidden w-full mt-8 bg-gray-800 text-white px-8 py-4 rounded-lg font-bold' 
                        onClick={() => navigate("/blogs")}
                    >
                        Read All Blogs
                    </button>
                </div>
            </div>

            {/* MODAL */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl border-t-8 border-orange-500">
                        <div className="text-6xl mb-4">🚀</div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">Message Sent!</h2>
                        <p className="text-gray-600 mb-6">I've received your request. Let's build something amazing together!</p>
                        <button onClick={() => setIsModalOpen(false)} className="bg-orange-500 w-full text-white px-6 py-3 rounded-xl font-bold hover:bg-orange-600 transition">Great!</button>
                    </div>
                </div>
            )}

            
        </div>
    )
}

export default Home;