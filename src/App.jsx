import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutServices from "./components/AboutServices";
// import PortfolioSection from "./components/PorfolioSection";
import Testimonial from "./components/Testimonial";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Freeresources from "./components/Freeresources";
// import Pricingtable from "./components/Pricingtable";
import { Element } from "react-scroll";
import WhatsAppButton from "./components/WhatsAppButton";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 

const App = () => {
  return (
    <>
      <Navbar />
      <Element name="hero">
        <Hero />
      </Element>
      <Element name="about-services">
        <AboutServices />
      </Element>
      {/* <Element name="portfolio">
        <PortfolioSection />
      </Element> */}
      <Element name="free-resources">
        <Freeresources />
      </Element>
      <Element name="testimonials">
        <Testimonial />
      </Element>
      {/* <Element name="pricing">
        <Pricingtable />
      </Element> */}
      <Element name="contact">
        <ContactSection />
      </Element>
      <Footer />
      <WhatsAppButton />
      <ToastContainer position="top-center" autoClose={3000} />
    </>
  );
};

export default App;
