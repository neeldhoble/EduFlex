import "./App.css";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import Home from "./Components/Home.jsx";
import Signup from "./Components/Signup";
import Dashboard from "./Components/Dashboard";
import { About } from "./pages/About.jsx";
import { Contact } from "./pages/Contact.jsx";
import PrivateRoute from "./Components/PrivateRoute";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import React, { useState } from "react";
import { Footer } from "./Components/Footer.jsx";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="w-screen h-screen flex flex-col ">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} /><hr></hr>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/signup"
          element={<Signup setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/contact"
          element={<Contact  />}
        />
        <Route isLoggedIn={isLoggedIn}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
