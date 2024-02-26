import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
const Navbar = () => {
  const [click, setClick] = useState(false);
  const handelClick = () => {
    setClick(!click);
  };

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 1) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);
  return (
    <div className={color? "header header-bg" :"header"}>
      <Link to="/">Portfolio.</Link>
      <ul className={!click ? "nav-menu" : "nav-menu active"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          <Link to="/contact">contact</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handelClick}>
        {!click ? (
          <FaBars style={{ color: "#fff", fontSize: 20 }} />
        ) : (
          <FaTimes style={{ color: "#fff", fontSize: 20 }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
