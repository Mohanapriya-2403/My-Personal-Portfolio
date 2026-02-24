import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Sending data to your backend running on port 5000
      // Ensure it is http (not https) and the port is 5000
      const res = await axios.get('http://localhost:5000/api/blogs');
      console.log("Server Response:", res.data); // Now 'res' is being used!
      alert("Message sent successfully!");
      setFormData({ name: '', email: '', message: '' }); // Clear form
    } catch (err) {
      alert("Error sending message. Check if Backend is running!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 pt-24 bg-white">
      <div className="max-w-4xl w-full grid md:grid-cols-2 gap-10 bg-gray-50 p-8 rounded-3xl shadow-sm border border-gray-100">
        <div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Let's <span className="text-orange-500">Connect</span></h2>
          <p className="text-gray-600 mb-8">Fill out the form to send a message directly to my MongoDB database.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-4 rounded-xl border focus:border-orange-500 outline-none"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            value={formData.name}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-4 rounded-xl border focus:border-orange-500 outline-none"
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            value={formData.email}
            required
          />
          <textarea
            placeholder="Message"
            className="w-full p-4 rounded-xl border focus:border-orange-500 outline-none"
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            value={formData.message}
            rows="4"
            required
          ></textarea>
          <button type="submit" className="w-full bg-orange-500 text-white font-bold py-4 rounded-xl hover:bg-orange-600 transition-all shadow-lg shadow-orange-100">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;