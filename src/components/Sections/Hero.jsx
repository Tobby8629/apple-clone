import React from 'react'
import useResize from '../../Reusables/useResize'
import { heroVideo, smallHeroVideo } from '../../utils'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  const {mobile} = useResize()
  useGSAP(()=>{
    gsap.to("#title", {opacity: 1, delay: 2.8})
    gsap.to("#btn", {opacity: 1, delay: 2.8, translateY: mobile ? -20 : 40})
  },[])

  return (
    <header className='nav-height bg-black screen-max-width flex flex-col items-center justify-center'>
       <p id="title" className='hero-title'>iPhone 15</p>
       <video 
       autoPlay 
       playsInline={true} 
       muted 
       key={mobile ? smallHeroVideo : heroVideo}
       className='pointer-events-none max-md:h-4/6 w-10/12 md:9/12'
       >
         <source 
          src={mobile ? smallHeroVideo : heroVideo}
          type= "video/mp4"
         />
       </video>
       <div id='btn' className=' translate-y-20 opacity-0 flex flex-col items-center'>
        <button className='btn'>Buy</button>
        <p className="font-normal text-xl">From $199/month or $999</p>
       </div>
    </header>
  )
}

export default Hero