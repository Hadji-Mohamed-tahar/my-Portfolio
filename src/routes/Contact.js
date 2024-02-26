import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import HeroImg from "../Components/HeroImg";
import FormContact from "./FormContact";
const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImg heading="Contact me" text="let's have a chat" />
      <FormContact/>
      <Footer />
    </div>
  );
};

export default Contact;
