import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutServices from './components/AboutServices'
import PortfolioSection from './components/PorfolioSection'
import Testimonial from './components/Testimonial'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import Freeresources from './components/Freeresources'

const App = () => {
  return (
    <>
    

      <Navbar/>
      <Hero/>
      <AboutServices/>
      <PortfolioSection/>
      <Freeresources/>
      <Testimonial/>
      <ContactSection/>
      <Footer/>
   
    </>
  )
}

export default App
