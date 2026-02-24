import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // This runs as soon as the Navbar appears on screen
  useEffect(() => {
    const status = localStorage.getItem("isLoggedIn");
    if (status === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    // 1. Remove the login data
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    
    // 2. Go back to Login page
    navigate("/login");
  };

  return (
    <nav className="flex justify-between items-center px-10 py-6 border-b bg-white">
      <div className="text-2xl font-bold text-orange-500">Personal</div>
      
      <ul className="flex items-center gap-8 font-medium">
        <li><Link to="/home" className="hover:text-orange-500">Home</Link></li>
        <li><Link to="/blogs" className="hover:text-orange-500">Blogs</Link></li>
        <li><Link to="/about" className="hover:text-orange-500">About</Link></li>
        <li><Link to="/contact" className="hover:text-orange-500 transition-colors">Contact</Link></li>
        
        <li>
          {isLoggedIn ? (
            <button 
              onClick={handleLogout}
              className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-black transition shadow-md"
            >
              Logout
            </button>
          ) : (
            <Link 
              to="/login" 
              className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition shadow-md"
            >
              Login
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;