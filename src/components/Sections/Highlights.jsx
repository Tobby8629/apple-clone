import React from 'react'
import { rightImg, watchImg } from '../../utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import VideoCarousel from './VideoCarousel';

gsap.registerPlugin(ScrollTrigger);

const Highlights = () => {
  useGSAP(() => {
    gsap.to(".links", { 
      opacity: 1, 
      translateY: 0,
      stagger: 0.3, 
      scrollTrigger: {
        trigger: ".links", 
        start: "top 80%", 
        end: "top 50%", 
        toggleActions: "play none none none",
      },
    });
  }, []);
  return (
    <section className='bg-zinc w-screen overflow-hidden'>
      <div className='screen-max-width common-padding'>
        <div className='md:flex mb-20 flex-wrap justify-between '>
          <h3 className='links translate-y-5 section-heading font-normal'>Get the highlights.</h3>
          <div className='flex gap-7 items-end'>
            <a href='#' className='link links translate-y-5'>
              <span className='mr-2'>Watch the film</span>
              <img src={watchImg} alt="play"/>
            </a>
            <a href='#' className='link links translate-y-5'>
              <span className='mr-2'>Watch the event</span>
              <img src={rightImg} alt="play"/>
            </a>
          </div>
        </div>
        <VideoCarousel />
      </div>
    </section>
  )
}

export default Highlights