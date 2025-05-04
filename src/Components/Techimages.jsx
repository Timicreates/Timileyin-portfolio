import React from 'react'
import Jscript from "../assets/javascript.png";
import react from "../assets/react.jpeg";
import tail from "../assets/tailwind.png"

const Techimages = () => {
    const logos= [Jscript,react,tail]
  return (
    <section className='w-11/12 mx-auto px-2 h-44 md:py-4 py-2 mb-16'>
<div className="w-full overflow-hidden container gap-8 mx-auto py-20  flex sm:flex-row flex-col 
    sm:items-center items-start">
        <div className="w-[300px] shrink-0 px-4 text-gray-600 border-l-4 border-blue-500 bg-white 
        z-10 sm:text-base text-xl font-semibold text-left"> 
            Proud Frontend developer <br /> With knowldege of the following 
        </div>
        <div className="flex animate-marquee whitespace-nowrap">
            {
                logos.map((logo,index)=>(
                    <img key={index} src={logo} alt="company logo"
    className="mx-12 h-12 w-40 object-contain grayscale opacity-70 hover:grayscale-0 
    hover:opacity-100 transition-all"                 />
                ))
            }
            {/* duplicate  */}
            {
                logos.map((logo,index)=>(
                    <img key={`duplicate-${index}`} src={logo} alt="company logo"
    className="mx-12 h-12 w-40 object-contain grayscale opacity-70 hover:grayscale-0 
    hover:opacity-100 transition-all"                 />
                ))
            }
               {
                logos.map((logo,index)=>(
                    <img key={`duplicate-${index}`} src={logo} alt="company logo"
    className="mx-12 h-12 w-40 object-contain grayscale opacity-70 hover:grayscale-0 
    hover:opacity-100 transition-all"                 />
                ))
            }
        </div>
    </div>
    </section>
  )
}

export default Techimages