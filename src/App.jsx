import React from 'react'
import "./App.scss"
import { Heading, Text, Box, Section, Grid } from "@radix-ui/themes"
import '@radix-ui/themes/styles.css';
// import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/features';
import News from './components/News section/News';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Testimonial from './components/Testimonial';
import Logo from './components/Logo';
import Videoplayer from './components/Videoplayer';
import Contact from './components/Contact';
import Portfolio from './components/portfolio/Portfolio';
import Footer from './components/Footer';





function App() {


  return (
    <>
    
        <Hero/>
        <About/>
        <Portfolio/>
        <Features/>
          <Videoplayer/>
          <Logo/>
            <Testimonial/>
               <News/>
          <Contact/>
          <Footer/>
     
    </>
  )
}

export default App
