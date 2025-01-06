import React from 'react'
import { hightlightsSlides } from '../../constants'
import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const VideoCarousel = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRefs = useRef([]);
  const handleVideoEnd = () => {
    const nextIndex = (currentVideoIndex + 1) % hightlightsSlides.length;
    setCurrentVideoIndex(nextIndex);
  };

  useEffect(() => {
    if (videoRefs.current[currentVideoIndex]) {
      videoRefs.current[currentVideoIndex].play();
    }
  }, [currentVideoIndex]);

  useEffect(() => {
    gsap.to('#each', {
      x: `-${currentVideoIndex * 100}%`,
      duration: 1,
      ease: 'power2.inOut',
    });
  }, [currentVideoIndex]);

  return (
    <div className="wrap flex justify-between">
      {hightlightsSlides.map((list, index) => (
        <div key={list.id} id="each">
          <div className={`video-carousel_container w-full h-full flex items-center bg-black mr-10 sm:mr-20 rounded-3xl`}>
            <div className="rounded-3xl">
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                muted
                playsInline
                onEnded={handleVideoEnd}
              >
                <source src={list.video} type="video/mp4" />
              </video>
            </div>
            <div className="absolute top-[10%] left-[5%]">
              {list.textLists.map((text, i) => (
                <p key={i} className="max-sm:text-base text-2xl mb-2">
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoCarousel;