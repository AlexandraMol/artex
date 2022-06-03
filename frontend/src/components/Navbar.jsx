import React, { useState } from "react";
import "./Navbar.css";
import { FaSearch } from "react-icons/fa";
import Axios from "axios";
import { useNavigate } from "react-router";

const SERVER_URL = "http://localhost:5000/";

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const logout = async () => {
    // Axios.post(`${SERVER_URL}/logout`, {}).then((res) => {
    //   console.log(res);
    // });
    navigate("/");
  };
  return (
    <div className="Navbar">
      <span className="nav-logo">
        Artex
        <FaSearch />
      </span>
      <div className={`nav-items ${isOpen && "open"}`}>
        {/* <span
          onClick={() => {
            navigate("/article-analysis", {
              state: { email: props.data.state.email },
            });
          }}
        >
          Analyze Article
        </span> */}
        <span
          onClick={() => {
            navigate("/articles", { state: { email: props.data.state.email } });
          }}
        >
          View Articles
        </span>
        <span
          onClick={() => {
            navigate("/my-articles", {
              state: { email: props.data.state.email },
            });
          }}
        >
          My Articles
        </span>
        <span
          onClick={() => {
            navigate("/profile", { state: { email: props.data.state.email } });
          }}
        >
          Profile
        </span>
        <span onClick={logout}>Logout</span>
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
