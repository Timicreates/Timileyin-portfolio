import React from 'react'
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone, FaTwitter } from 'react-icons/fa'
import { FaLetterboxd, FaX } from 'react-icons/fa6'
import {motion} from "framer-motion"
import {fadeIn} from "../utils/motion"

const Footer = () => {
  return (
   <motion.footer 
   variants={fadeIn('up',0.7)}
   initial="hidden"
   whileInView="show"
   viewport={{once:true}} id='contact' className='md:h-60 h-43 flex flex-col items-center text-white text-center bg-blue-950 '>
    <h1 className='font-display md:text-3xl text-2xl  pt-4 ' >Contact Info</h1>
    <div className="md:flex  space-y-2 mt-2 font-display items-center flex-col">
<a href="tel:+" className='hover:underline hover:text-red-300'>        <p className='flex gap-4 md:ml-2 ml-6' >< FaPhone className='md:size-5 size-4'/><span className='md:text-xl'>: +2348144695698</span></p></a>
       <a href="mailto:ktmijohn123@gmail.com" className='hover:underline hover:text-red-400' > <p className=' flex gap-4'> <FaEnvelope className='md:size-5'/> <span className='md:text-xl'>- ktimijohn123@gmail.com</span></p></a>
    </div>
    <div className='flex items-center  mt-3 gap-4  justify-around'>
       <a href="https://www.linkedin.com/in/timileyin-kehinde-240796367/"> <FaLinkedin className='size-5  hover:animate-bounce md:size-7'/></a>  <a href="https://github.com/Timicreates"> <FaGithub className='hover:animate-bounce size-5 md:size-7'/></a><a href="https://x.com/forlife_timi"> <FaTwitter className='hover:animate-bounce size-5 md:size-7'/></a>
    </div>

   </motion.footer>
  )
}

export default Footer
