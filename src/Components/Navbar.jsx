import React from 'react'
import { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import {motion} from "framer-motion"
import {fadeIn} from "../utils/motion"


const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink,setActivelink] = useState("#home");
  // nav links
const navLinks = [
    { name: 'home', href: '#home' },
    { name: 'projects', href: '#projects' },
    { name: 'contact', href: '#contact' },
]
  return (
    <section>
       <motion.nav 
    variants={fadeIn('down',0.2)}
    initial="hidden"
    whileInView="show"
    viewport={{once:true}}
     className='flex md:mt-0 shadow-sm backdrop-blur-sm bg-white/90 justify-between items-center w-full h-20 px-4 text-black fixed top-0 left-0 z-50'>
            {/* name */}
            <div className="flex">
              <h2 className='md:text-2xl  font-display text-black md:ml-4 camelcase'>
                Timileyin kehinde
              </h2>
            </div>
            
            {/* links */}
      {/* mobile nav */}
      <button onClick={()=>setIsMenuOpen(!isMenuOpen)} className='  md:hidden'>
        {isMenuOpen? <HiX className=" absolute size-4  top-7 right-5" /> : <HiMenu  className=' mr-4 size-5 '/>}
      </button>
  
     {
      isMenuOpen&&(
        <div className=' bg-white border ml-30 mt-44 border-gray-50 px-3 py-6 md:hidden'>
          <div className="container flex flex-col  mx-auto px-4 space-y-4">
          {navLinks.map((link,index) => (
                <a  onClick={()=>{setActivelink(link.href);setIsMenuOpen(false)}} key={index} href={link.href} className={`text-black block md:text-lg   md:font-extralight uppercase font-display 
          ${activeLink===link.href?"text-blue-600 after:w-full":"hover:border-b-3 border-blue-600"}`}>
           
                {link.name}
                </a>
              ))}
          </div>
        </div>
      ) 
     }
            {/* desktop nav */}
            <div className="  md:gap-16 md:mr-4 md:flex  hidden">
              {navLinks.map((link,index) => (
                <a  onClick={()=>setActivelink(link.href)} key={index} href={link.href} className={`text-black md:text-lg  font-medium uppercase font-display 
          ${activeLink===link.href?"text-blue-600 after:w-full":"hover:border-b-3 border-blue-600"}`}>
           
                {link.name}
                </a>
              ))}
               </div>
        </motion.nav>
    </section>
  )
}

export default Navbar