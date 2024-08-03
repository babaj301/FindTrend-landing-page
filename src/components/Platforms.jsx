import React from 'react';
import Social1 from '../assets/social-media/social media8.svg';
import Social2 from '../assets/social-media/social media7.svg';
import Social3 from '../assets/social-media/social media6.svg';
import Social4 from '../assets/social-media/social media5.svg';
import Social5 from '../assets/social-media/social media4.svg';
import Social6 from '../assets/social-media/social media3.svg';
import Social7 from '../assets/social-media/social media2.svg';
import Social8 from '../assets/social-media/social media1.svg';

import Tweet1 from '../assets/tweets/tweet 1.svg';
import Tweet2 from '../assets/tweets/tweet 2.svg';
import Tweet3 from '../assets/tweets/tweet 3.svg';

const Platforms = () => {
  return (
    <div className="bg-gray-100 h-full w-full">
      <h1 className="text-4xl text-center font-bold pb-12 md:text-6xl pt-8 ">
        All platforms connected to Findtrend
      </h1>

      <div className="w-full flex flex-row gap-8 md:justify-evenly overflow-scroll">
        <img src={Social1} alt="" />
        <img src={Social2} alt="" />
        <img src={Social3} alt="" />
        <img src={Social4} alt="" />
        <img src={Social5} alt="" />
        <img src={Social6} alt="" />
        <img src={Social7} alt="" />
        <img src={Social8} alt="" />
      </div>

      <div className="mt-12 flex flex-row  justify-center mb-8">
        <img className="w-[95%] md:w-[50%]" src={Tweet1} alt="" />
      </div>

      <div className="mt-8 flex flex-row  justify-center mb-8">
        <img className="w-[90%] md:w-[50%] mx-8" src={Tweet2} alt="" />
      </div>

      <div className="mt-8 flex flex-row  justify-center mb-8">
        <img className="w-[95%] md:w-[50%]" src={Tweet1} alt="" />
      </div>
      <div className="flex flex-row justify-center mt-12s">
        <button className="text-white mb-12 bg-black pl-4 pr-4 py-4 md:px-8 md:py-2 text-sm font-semibold rounded-full hover:bg-black/90 md:rounded-full md:h-10 ">
          View More Trends
        </button>
      </div>
    </div>
  );
};

export default Platforms;
