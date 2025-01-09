import HeaderText from '../../Reusables/HeaderText'
import { exploreVideo} from '../../utils'

const FullStory = () => {
  return (
    <section className='common-padding bg-gray-300'>
      <div className='screen-max-width'>
        <HeaderText clas='story' title='Explore the Full Story'/>
        <div className=''>
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
        </div>
      </div>
    </section>
  )
}

export default FullStory