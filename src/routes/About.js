import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import HeroImg from '../Components/HeroImg'
import AboutContent from '../Components/AboutContent'
const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg heading="About is" text="I'm a fullstack developer"/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About