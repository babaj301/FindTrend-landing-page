import React from 'react';
import Tag1 from '../assets/search-tags/tab1.svg';
import Tag2 from '../assets/search-tags/tab2.svg';
import Tag3 from '../assets/search-tags/tab3.svg';
import Tag4 from '../assets/search-tags/tab4.svg';
import Tag5 from '../assets/search-tags/tab5.svg';

const Hero = () => {
  return (
    <div className="w-full h-screen bg-black relative z-20 top-0">
      {/* <img
        className="top-0 left-0 w-full h-screen object-cover"
        src={Background}
        alt=""
      /> */}

      <div className="pt-12 text-center">
        <h1 className="text-white text-4xl md:text-6xl font-bold ">
          Minimize your tabs.
        </h1>
        <h1 className="text-white text-4xl md:text-6xl font-bold ">
          Find the trends!
        </h1>
        <div
          className="text-gray-400 mt-4 mb-4
        "
        >
          {/* Paragraphs */}
          <div>
            <p className="w-[80%] text-center m-auto">
              Don’t let your computer memories consumes all of those browser
              tabs.
            </p>
            <p className="w-[80%] text-center m-auto">
              Findtrend let you gathers all of your favorite website into one
              place.
            </p>
          </div>
        </div>

        {/*  CTA Button */}
        <div className="mb-4">
          <button className="text-black bg-lime-400 pl-4 pr-2 py-2 text-sm font-bold rounded-2xl hover:bg-lime-200">
            Get Started <span>🔥</span>
          </button>
        </div>

        {/* Search Tags */}
        <div className="flex flex-col justify-center items-center">
          <img className="w-80 -rotate-2 hover:-rotate-6 " src={Tag4} alt="" />
          <img className="w-80 rotate-3 hover:-rotate-6" src={Tag3} alt="" />
          <img className="w-80 -rotate-2 hover:-rotate-6" src={Tag2} alt="" />
          <img className="w-80 rotate-3 hover:-rotate-6 " src={Tag1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
