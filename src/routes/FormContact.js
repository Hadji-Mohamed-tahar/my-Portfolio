import "./FormContact.css";
import React from "react";
const FormContact = () => {
  return (
    <div className="form">
      <form>
        <label>Your Name</label>
        <input type="text" placeholder="enter your name" />
        <label>Your Email</label>
        <input type="text" placeholder="enter your Email" />
        <label> Subject</label>
        <input type="text" placeholder="enter your Subject" />
        <label>Message</label>
        <textarea row="6" placeholder="enter your Message" />
        <button className="btn">Send</button>
      </form>
    </div>
  );
};

export default FormContact;
