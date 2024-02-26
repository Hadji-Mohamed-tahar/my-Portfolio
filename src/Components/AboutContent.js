import { Link } from "react-router-dom";
import "./AboutContent.css";
import React from "react";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>
          I am i react front-end developer. I create responsive secure website
          for my clients
        </p>
        <Link>
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stake top">
            <img src={require("../assets/project4.png")} className="img" />
          </div>
          <div className="img-stake bottom">
            <img src={require("../assets/intro-bg.jpg")} className="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
