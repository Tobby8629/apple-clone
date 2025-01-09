import { useGSAP } from '@gsap/react'
import HeaderText from '../../Reusables/HeaderText'
import ImageScale from '../../Reusables/ImageScale'
import { explore1Img, explore2Img, exploreVideo} from '../../utils'
import gsap from 'gsap'

const FullStory = () => {
  useGSAP(()=>{
    gsap.to(".text",{
      opacity: 1,
      translateY: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".text",
        start: "top 80%",
        ease: "power2.out",
        end: "top 30%",
        toggleActions: "play reverse play reverse"
      }
    })

  },[])
  return (
    <section className='common-padding bg-gray-300'>
      <div className='screen-max-width'>
        <HeaderText clas='story' title='Explore the Full Story'/>
        
          <h2 className='pl-20 mt-32 md:text-7xl mb-24 text-5xl font-extrabold'>
            iPhone. <br/>Forged in titanum.
          </h2>
          <div className='max-sm:h-[40vh]'>
            <video
              autoPlay
              muted
              playsInline={true}
              className='object-cover w-full h-full'
            >
              <source 
               src={exploreVideo}
               type= "video/mp4"
              />
            </video>
          </div>
          <div className='md:flex md:gap-5'>
            <ImageScale imag={explore1Img}/>
            <ImageScale imag={explore2Img}/>
          </div>
          <div className='text hiw-text translate-y-10 opacity-0 flex max-sm:flex-col md:gap-5 mt-10'>
            <p className='w-1/2'>
              iPhone 15 Pro is
              <span className="text-white"> the first iPhone to feature an aerospace‑grade titanium design,</span>
              using the same alloy that spacecraft use for missions to Mars.
            </p>
            <p className='w-1/2'>
              Titanium has one of the best strength‑to‑weight ratios of any metal, making these our
              <span className="text-white"> lightest Pro models ever</span>
              . You’ll notice the difference the moment you pick one up.
            </p>
          </div>
          
        
      </div>
    </section>
  )
}

export default FullStory