import { useGSAP } from "@gsap/react"
import { chipImg, frameImg, frameVideo } from "../../utils"
import gsap from "gsap"


const Chip = () => {
  useGSAP(()=>{
    gsap.to(".chip",{
      opacity: 1,
      scale: 1,
      duration: 1,
      scrollTrigger: {
        trigger: ".chip",
        start: "top 80%",
        end: "top 30%",
        ease: "expo.out",
        toggleActions: "restart none none none"
      }
    })},[])
  return (
    <section className='bg-black common-padding'>
      <div className="screen-max-width">
        <div className='chip flex justify-center py-20 opacity-0 scale-[2]'>
          <img src={chipImg} alt="chip" className='w-52 h-52 object-cover'/>
        </div>
        <h2  className="hiw-title leading-10 text-white text-center mt-10">
          A17 Pro chip.<br/>
          A monster win for gaming
        </h2>
        <p className="hiw-subtitle">It’s here. The biggest redesign in the history of Apple GPUs.</p>
        
        
        <div className="relative w-full mt-10">
          <img src={frameImg} alt="frame" className="w-full h-full bg-transparent relative object-contain z-10"/>
          <div className="absolute overflow-hidden p-4 max-sm:p-1 top-[0.9%] max-md:top-[0.6%] max-lg:top-[.5%] left-[0%] w-full  my-auto">
            <video 
              autoPlay 
              muted 
              playsInline 
              className="w-full h-full rounded-[60px] max-lg:rounded-[49px] max-sm:rounded-[29px]  object-cover max-sm:object-contain">
              <source src={frameVideo} type="video/mp4"/>
            </video>
          </div>
        </div>
        <p className="hiw-text text-sm mt-3 text-center">Honka: Star Rali</p>
      </div>
      <div className="pt-10 ">
        <div>
          <p className="hiw-text text-gray leading-10 mb-5">
          A17 Pro is an entirely new class of iPhone chip that delivers our
          <span className="text-white">best graphics performance by far</span>.
          </p>
          <p className="hiw-text text-gray leading-10 mb-5">
            Mobile 
            <span className="text-white"> games will look and feel so immersive</span>
            , with incredibly detailed environments and more realistic characters. And with industry-leading speed and efficiency, A17 Pro takes fast and runs with it.
          </p>
        </div>
        <div>
          <p>
            New<br/>
            <span> Pro-class GPU </span> <br/>
            with 6 cores
          </p>
        </div>
      </div>
    </section>
  )
}
// top-[1.5%] left-[13%] 
export default Chip