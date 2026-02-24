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
      // Sending login request to backend
      const res = await axios.post('http://localhost:5000/api/login', { email, password });

      if (res.data.success) {
        alert("Login Successful!");
        
        // Store user info (including name) so other pages can use it
        localStorage.setItem("user", JSON.stringify(res.data.user));
        
        // Redirect to home page
        navigate("/home");
      }
    } catch (err) {
      console.error(err);
      // If the backend sends an error message, show it; otherwise show a generic error
      alert(err.response?.data?.message || "Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh] bg-gray-50">
      <div className="bg-white p-10 rounded-xl shadow-lg border w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6 text-orange-500">Welcome Back</h2>
        
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Email Address</label>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full p-3 border rounded-lg focus:outline-orange-500"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div>
            <label className="block text-gray-700 mb-1">Password</label>
            <input 
              type="password" 
              placeholder="Enter your password" 
              className="w-full p-3 border rounded-lg focus:outline-orange-500"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-orange-500 text-white py-3 rounded-lg font-bold hover:bg-orange-600 transition shadow-md"
          >
            Login
          </button>
        </form>

        {/* This is the part you asked to add */}
        <p className="text-center mt-6 text-gray-600 text-sm">
          Don't have an account? 
          <Link to="/signup" className="text-orange-500 font-bold ml-1 hover:underline">
            Sign Up here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;