import React, { useState } from "react";
import "./Navbar.css";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <span className="nav-logo">
        Artex
        <FaSearch />
      </span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/article-analysis">Analyze Article</a>
        <a href="/articles">View Articles</a>
        <a href="/my-articles">My Articles</a>
        <a href="/profile">Profile</a>
        <a href="/">Logout</a>
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
