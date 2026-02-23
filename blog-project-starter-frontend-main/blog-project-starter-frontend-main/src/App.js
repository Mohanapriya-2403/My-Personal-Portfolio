import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Blogs from "./Blogs";
import Login from "./Login";
import Signup from "./Signup";
import Navbar from "./Navbar";
import Footer from "./Footer";
import About from "./About";
import Contact from "./Contact";

function App() {
  return (
    <BrowserRouter>
      {/* This wrapper div ensures your styling applies to the whole app */}
      <div className="min-h-screen px-10 bg-white border rounded-md">
        <Navbar />
        
        <Routes>
          {/* Main Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Auth Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          
          {/* Fallback Route: If user types a wrong URL, go back home */}
          <Route path="*" element={<Home />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;