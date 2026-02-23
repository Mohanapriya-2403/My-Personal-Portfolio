import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      // Ensure your backend is running on port 5000
      const res = await axios.post('http://localhost:5000/api/signup', { name, email, password });
      
      if (res.data.success) {
        alert("Registration Successful! Redirecting to login...");
        navigate("/login");
      } else {
        alert(res.data.message || "Registration failed");
      }
    } catch (err) {
      console.error(err);
      alert("Server is not running. Please start your backend in the terminal!");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh] bg-gray-50">
      <div className="bg-white p-10 rounded-xl shadow-lg border w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Create Account</h2>
        
        <form onSubmit={handleSignUp} className="space-y-4">
          <input 
            type="text" 
            placeholder="Full Name" 
            className="w-full p-3 border rounded-lg focus:outline-orange-500"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input 
            type="email" 
            placeholder="Email Address" 
            className="w-full p-3 border rounded-lg focus:outline-orange-500"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input 
            type="password" 
            placeholder="Create Password" 
            className="w-full p-3 border rounded-lg focus:outline-orange-500"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button 
            type="submit" 
            className="w-full bg-orange-500 text-white py-3 rounded-lg font-bold hover:bg-orange-600 transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center mt-6 text-gray-600 text-sm">
          Already have an account? 
          <Link to="/login" className="text-orange-500 font-bold ml-1">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;