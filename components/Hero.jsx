import React from 'react'

const Hero = ({ handleGetStarted }) => {
  return (
    <div className="h-screen w-full flex items-center justify-center flex-col z-10">
      <p className="text-center text-xl md:text-3xl 2xl:text-4xl">
        Revolutionize your tasks with
      </p>
      <h1 className="text-center font-[600] text-appBlack text-[120px] md:text-[160px] 2xl:text-[280px]  grad-text  leading-[140px] md:leading-[180px] 2xl:leading-[280px]">
        {" "}
        Toodly<span className="text-appYellow">.</span>
      </h1>
      <button
        onClick={handleGetStarted}
        className="yellow-btn text-center  max-w-[200px] mt-8"
      >
        Get Started
      </button>
    </div>
  );
};

export default Hero