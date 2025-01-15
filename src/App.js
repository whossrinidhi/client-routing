import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const Home = () => (
  <div className="text-center mt-10">
    <h2 className="text-3xl font-bold mb-4">Welcome to My Website!</h2>
    <img
      src="https://media.istockphoto.com/id/1316145932/photo/table-top-view-of-spicy-food.jpg?s=612x612&w=0&k=20&c=eaKRSIAoRGHMibSfahMyQS6iFADyVy1pnPdy1O5rZ98="
      alt="Random Unsplash"
      className="mx-auto rounded-lg shadow-lg"
    />
  </div>
);
const About = () => (
  <div className="text-center mt-10">
    <h2 className="text-2xl font-bold mb-4">About Us</h2>
    <p className="text-lg">
      This is an award winning restaurant in Los Angeles! It has 3 micheline
      stars!
    </p>
  </div>
);
const Contact = () => (
  <div className="text-center mt-10">
    <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
    <p className="text-lg">
      Email:{" "}
      <a
        href="mailto:contact@mywebsite.com"
        className="text-blue-500 underline"
      >
        contact@mywebsite.com
      </a>
    </p>
  </div>
);

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 flex justify-between items-center">
      <h1 className="text-white text-2xl font-bold">HelloRestaurant</h1>
      <div className="space-x-4">
        <Link to="/" className="text-white hover:text-gray-300">
          Home
        </Link>
        <Link to="/about" className="text-white hover:text-gray-300">
          About
        </Link>
        <Link to="/contact" className="text-white hover:text-gray-300">
          Contact
        </Link>
      </div>
    </nav>
  );
};

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
