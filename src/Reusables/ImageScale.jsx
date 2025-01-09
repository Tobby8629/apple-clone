import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import PropTypes from 'prop-types'

const ImageScale = ({imag}) => {
  gsap.registerPlugin(ScrollTrigger)

  useGSAP(()=>{
    gsap.fromTo(".img",
    {
      scale: 1.6,
      ease: "power1",
      opacity: 0
    },   
    {
      scale: 1,
      opacity: 1,
      duration: 4,
      ease: 'power1',
      scrollTrigger: {
        trigger: ".img",
        start: "top 80%",
        end: "top 10%",
        scrub: 5.5,
        toggleActions: "play reverse play reverse"
      }
    })
  },[])

  return (
    <div className='bg-black overflow-hidden md:h-[50vh] md:w-1/2 max-sm:my-5'>
      <div className='img h-full w-full'>
        <img src={imag} alt="iphone" className='object-cover h-full w-full'/>
      </div>
    </div>
  )
}

ImageScale.propTypes = {
  imag: PropTypes.string.isRequired
}

export default ImageScale