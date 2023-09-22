'useClient'
import useScrollPosition from '@/hooks/useScrollPosition';
import React, { useEffect, useState } from 'react';
import { motion as m } from "framer-motion"
import { Global } from 'iconsax-react';
import { Icon } from '@iconify/react';

const Hero = ({ handleGetStarted }) => {

  const scrollPosition = useScrollPosition();
  const [opacity, setOpacity] = useState(1)
  const [position, setPosition] = useState(0);
  


  useEffect(() => {
    setPosition(scrollPosition)
  }, [scrollPosition])

  useEffect(() => {
    setOpacity(200 - Math.max(scrollPosition * 2, 100))
  }, [scrollPosition])

  console.log("position", position)

  return (
    <m.div
      initial={{ opacity: 1, scale: 1, y: 0 }}
      animate={{
        opacity: parseFloat(opacity / 100).toFixed(2),
        scale: parseFloat(opacity / 100).toFixed(2),
      }}
      className={`fixed h-screen w-full top-0 left-0 flex items-center justify-center flex-col z-10`}
    >
      <p className="text-center text-xl md:text-3xl 2xl:text-4xl">
        Revolutionize your tasks with {parseFloat(opacity / 100).toFixed(2)}
      </p>
      <h1 className="text-center font-[600] text-appBlack text-[120px] md:text-[160px] 2xl:text-[280px]  grad-text  leading-[140px] md:leading-[180px] 2xl:leading-[280px]">
        {" "}
        Toodly<span className="text-appYellow">.</span>
      </h1>


      <div className="flex flex-col md:flex-row items-center mt-10 gap-4" >
        <a href='/signup' ><button
          onClick={handleGetStarted}
          className="yellow-btn text-center max-w-[300px] min-w-[200px]  flex items-center gap-2"
        >
          <Global size="26" color="#212529" variant='Bold' />
          Get for web
        </button></a>
        <button
          className="line-btn text-center max-w-[300px] min-w-[200px] flex items-center gap-2"
        >
          <Icon className='text-appBlack text-[24px]' icon="teenyicons:chrome-solid" />
          Chrome Extension
        </button>
      </div>

      <m.div
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 1.2,
          repeat: "Infinity",
          repeatType: "loop",
        }}
        className='mt-[4rem] border border-iconGray rounded-full px-4'
      >
        <p className='text-xs text-iconGray' >  {scrollPosition === 0 ? "scroll to continue" : "KEEP SCROLLING 😉"}</p>
      </m.div>
    </m.div>
  );
};

export default Hero; 