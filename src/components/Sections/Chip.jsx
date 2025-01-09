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
        
        
        <div className="relative w-full min-h-[50vh] max-sm:max-h-[20vh] mt-10">
          <img src={frameImg} alt="frame" className="w-full h-full object-contain"/>
          <video 
            autoPlay 
            muted 
            playsInline 
            className=" absolute top-0 md:rounded-3xl max-sm:top-[8%] left-0 w-full max-sm:h-5/6 my-auto object-contain">
            <source src={frameVideo} type="video/mp4"/>
          </video>
        </div>
      </div>
    </section>
  )
}
// top-[1.5%] left-[13%] 
export default Chip