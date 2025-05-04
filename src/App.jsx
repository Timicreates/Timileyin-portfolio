import "./App.css"
import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Techimages from './Components/Techimages'
import Projects from "./Components/Projects"
import Footer from "./Components/Footer"

const App = () => {
  return (
    <>
  <div className="relative min-h-screen" >
  <Navbar />
  <Hero/>
  <Techimages/>
  <Projects/>
  <Footer/>
  </div>
    </>
  )
}

export default App