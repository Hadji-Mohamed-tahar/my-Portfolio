import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
import "../index.css"
const Hero = () => {
  return (
  <div className="hero">
    <div className="mask">
      <img className="into-img" src={require('../assets/intro-bg.jpg')}/>
    </div>
    <div className="content">
      <p>I'm a freelancer</p>
      <h1>React js Developer</h1>
      <div className="">
        <Link to="/projects"className="btn">Projects</Link>
        <Link to="/contact"className="btn btn-light">Contact</Link>
      </div>
    </div>
  </div>
  );
};

export default Hero;
