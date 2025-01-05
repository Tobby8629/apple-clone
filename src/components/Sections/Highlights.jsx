import React from 'react'
import { playImg, rightImg, watchImg } from '../../utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Highlights = () => {
  useGSAP(()=>{
    gsap.to('.links', {opacity: 1, stagger: 0.4})
  },[])
  return (
    <section className='bg-zinc common-padding w-screen overflow-hidden'>
      <div className='screen-max-width flex flex-wrap justify-between '>
        <h3 className='links section-heading font-normal'>Get the highlights.</h3>
        <div className='flex gap-7 items-end'>
          <a href='#' className='link links'>
            <span className='mr-2'>Watch the film</span>
            <img src={watchImg} alt="play"/>
          </a>
          <a href='#' className='link links'>
            <span className='mr-2'>Watch the event</span>
            <img src={rightImg} alt="play"/>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Highlights