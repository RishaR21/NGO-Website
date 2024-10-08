import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About ';
import Contact from './components/Contact';
import Donation from './components/Donation';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
         
            <Route path="/contact" element={<Contact />} />
          
            <Route path="/donation" element={<Donation />} />
            
          </Routes>
        </div>
    
        <Footer />
      </div>
    </Router>
  );
};

export default App;

