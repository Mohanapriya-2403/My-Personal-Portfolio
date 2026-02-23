import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Check for typos: no 's' in http, and port must be 5000
const res = await axios.post('http://localhost:5000/api/login', { email, password });
      
      if (res.data.success) {
        // Save status and redirect
        localStorage.setItem("isLoggedIn", "true");
        navigate("/home");
        window.location.reload(); // Updates the Navbar immediately
      } else {
        alert("Invalid email or password");
      }
    } catch (err) {
      alert("Server is not running. Please start your backend!");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh] bg-gray-50">
      <div className="bg-white p-10 rounded-xl shadow-lg border w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Login</h2>
        
        <form onSubmit={handleLogin} className="space-y-4">
          <input 
            type="email" 
            placeholder="Email Address" 
            className="w-full p-3 border rounded-lg focus:outline-orange-500"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input 
            type="password" 
            placeholder="Password" 
            className="w-full p-3 border rounded-lg focus:outline-orange-500"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button 
            type="submit" 
            className="w-full bg-orange-500 text-white py-3 rounded-lg font-bold hover:bg-orange-600 transition"
          >
            Sign In
          </button>
        </form>

        <p className="text-center mt-6 text-gray-600 text-sm">
          Don't have an account? 
          <Link to="/signup" className="text-orange-500 font-bold ml-1">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;