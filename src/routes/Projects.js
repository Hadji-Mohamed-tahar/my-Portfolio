import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import HeroImg from '../Components/HeroImg'
import Pricing from '../Components/Pricing'
import Work from '../Components/Work'
const Projects = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg heading="Projects" text="Some of my most recent works"/>
      <Work/>
      <Pricing/>
      <Footer/>
    </div>
  )
}

export default Projects