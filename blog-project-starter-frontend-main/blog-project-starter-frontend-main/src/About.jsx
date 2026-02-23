import React from 'react';
import Footer from './Footer';
// Ensure your photo is in src/assets/ and named exactly myphoto.jpg
import ProfileImg from './assets/myphoto.jpg'; 

function About() {
  // Function to handle the Hire Me notification
  const handleHireMe = () => {
    alert("Thank you for your interest! I will get back to you as soon as possible via email.");
  };

  return (
    <div className="about-page bg-white min-h-screen">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Side: Text Content */}
        <div className="md:w-2/3">
          <h1 className="text-5xl font-bold mb-2 text-gray-800">
            About <span className="text-orange-400">Me</span>
          </h1>
          
          {/* UPDATED: Added Fresher Line Here */}
          <h2 className="text-2xl font-semibold text-gray-500 mb-6 italic">
            MERN Stack Developer | Fresher
          </h2>

          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            I am a passionate <span className="font-bold text-gray-900">MERN Stack Developer</span> dedicated to building functional, 
            scalable, and visually engaging web applications. With a deep understanding of the full software development lifecycle, 
            I specialize in transforming complex requirements into seamless digital experiences.
          </p>
          
          <div className="flex gap-4">
             {/* DOWNLOAD CV: Points to public/Mohanapriya_CV.pdf */}
             <a 
                href="/Mohanapriya_CV.pdf" 
                download="Mohanapriya_S_CV.pdf"
                className="bg-orange-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-orange-600 transition shadow-md inline-block text-center"
             >
                Download CV
             </a>
             
             {/* HIRE ME: Triggers the notification function */}
             <button 
                onClick={handleHireMe}
                className="border-2 border-orange-500 text-orange-500 px-8 py-3 rounded-lg font-bold hover:bg-orange-50 transition"
             >
                Hire Me
             </button>
          </div>
        </div>

        {/* Right Side: Profile Image */}
        <div className="md:w-1/3 flex justify-center">
            <div className="relative">
                {/* Visual design element */}
                <div className="absolute -inset-2 bg-orange-400 rounded-2xl rotate-3 opacity-20"></div>
                
                <img 
                    src={ProfileImg} 
                    alt="Mohanapriya S" 
                    className="relative w-64 h-80 object-cover rounded-2xl shadow-xl border-4 border-white"
                    onError={(e) => {
                        e.target.src = "https://via.placeholder.com/300x400?text=Profile+Photo";
                    }}
                />
            </div>
        </div>
      </div>

      {/* Expertise Cards */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Technical <span className="text-orange-400">Expertise</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-orange-400 hover:shadow-md transition">
              <h3 className="text-xl font-bold mb-3">Frontend</h3>
              <p className="text-gray-600 text-sm">Expert in React.js, Tailwind CSS, and Modern JS for building beautiful, responsive user interfaces.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-blue-400 hover:shadow-md transition">
              <h3 className="text-xl font-bold mb-3">Backend</h3>
              <p className="text-gray-600 text-sm">Building secure REST APIs and server-side logic using Node.js and Express.js framework.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-green-400 hover:shadow-md transition">
              <h3 className="text-xl font-bold mb-3">Database</h3>
              <p className="text-gray-600 text-sm">Managing flexible data models with MongoDB for projects like Blog systems and Student Portals.</p>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default About;