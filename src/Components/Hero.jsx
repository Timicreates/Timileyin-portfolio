import React from 'react'
import {motion} from "framer-motion"
import {fadeIn,textVariant} from "../utils/motion"

const Hero = () => {
  return (<>
    <div id='home' className='md:py-12 md:px-18 px-4 py-8 w-full   mx-auto mt-24'>
        <motion.h1 
        variants={textVariant(0.3)}
        initial="hidden"
        whileInView="show" className='font-display text-7xl md:text-9xl'>Hello...</motion.h1>
        <motion.p 
         variants={fadeIn('up',0.4)}
         initial="hidden"
         whileInView="show" className="font-display text-2xl md:text-4xl md:leading-14">I am <span className='text-blue-600'>Kehinde Timileyin</span> , a <span className='text-blue-700'>Frontend developer</span> with over 2 years of experience, 
            proficient in building software with the following frontend technologies, <span className="text-blue-600">Javascript, React.js, Redux, Bootstrap,
            Tailwind CSS </span>and others.
             I am constantly working on myself to improve my skills and
             I also love learning new technologies to add to my stack!</motion.p>
    </div>
    <motion.div 
     variants={fadeIn('right',0.5)}
     initial="hidden"
     whileInView="show"
      className='md:py-22 md:px-18 px-4 py-8    mx-auto'>
        <buttton className=" border-2 border-blue-800 md:text-3xl text-2xl py-2 px-6  mt-0 md:py-4 md:px-12
         hover:text-white hover:bg-blue-800 transition-all font-display rounded-full"><a href="https://drive.google.com/file/d/1ntMVV1P7qZoF8n4mZ4yQ5q_sCYdXT0IQ/view?usp=sharing">
            Résumé</a></buttton>
    </motion.div>
    </> 
  )
}

export default Hero