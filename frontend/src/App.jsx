import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./components/pages/SignUp";
import Products from "./components/pages/Products"
import Meetchefs from "./components/pages/Meetchefs";
import Services from "./components/pages/Services";
import Testimonials from "./components/pages/Testimonials";
import ContactUs from "./components/pages/ContactUs"
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Meetchefs" element={<Meetchefs/>} />
          <Route path="/Services" element={<Services/>} />
          <Route path="/Products" element={<Products/>}/>
          <Route path="/Testimonials" element={<Testimonials/>}/>
          <Route path="/ContactUs" element={<ContactUs/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
