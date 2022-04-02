import React, { useState } from "react";
import "../assets/css/Navbar.css";
import { FaSearch, FaUser, FaSignOutAlt } from "react-icons/fa";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <span className="nav-logo">
        Artex
        <FaSearch />
      </span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/home">Article Analysis</a>
        <a href="/about">View Articles</a>
        <a href="/service">My Articles</a>
        <a href="/contact">Profile</a>
        <a href="/logout">Logout</a>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;
