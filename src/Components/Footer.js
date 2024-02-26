import React from "react";
import "./Footer.css";
import { FaHouse } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location lpe">
            <FaHouse style={{ color: "#fff", marginRight: "2rem" }} className="lpe-icon"/>
            <div className="">
              <p>M'sila Magra</p>
              <p>Algeria</p>
            </div>
          </div>
          <div className="phone lpe">
            <FaPhoneAlt style={{ color: "#fff", marginRight: "2rem" }} className="lpe-icon" />
            <div className="">
              <h4>05 000 999</h4>
            </div>
          </div>
          <div className="email lpe">
            <MdOutlineEmail style={{ color: "#fff", marginRight: "2rem" }} className="lpe-icon"/>
            <div className="">
              <h4>taharhadji99@gmail.com</h4>
            </div>
          </div>
        </div>
        <div className="right">
          <h4>About the company</h4>
          <p>
            We aim to empower our clients to achieve their goals and improve
            their business efficiency by providing tailored software solutions
            that meet their individual needs.
          </p>
          <div className="social">
            <FaFacebook style={{ color: "#fff", marginRight: "2rem" }} className="lpe-icon"/>
            <FaInstagram style={{ color: "#fff", marginRight: "2rem" }} className="lpe-icon"/>
            <FaLinkedinIn style={{ color: "#fff", marginRight: "2rem" }} className="lpe-icon"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
