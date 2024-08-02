import React from 'react';
import Brand1 from '../assets/companies/brand1.svg';
import Brand2 from '../assets/companies/brand2.svg';
import Brand3 from '../assets/companies/brand3.svg';
import Brand4 from '../assets/companies/brand4.svg';
import Brand5 from '../assets/companies/brand5.svg';
import Brand6 from '../assets/companies/brand6.svg';
import Brand7 from '../assets/companies/brand7.svg';
import Brand8 from '../assets/companies/brand8.svg';
import Brand9 from '../assets/companies/brand9.svg';
import Brand10 from '../assets/companies/brand10.svg';
import Brand11 from '../assets/companies/brand11.svg';
import Brand12 from '../assets/companies/brand12.svg';
import Brand13 from '../assets/companies/brand13.svg';
import Brand14 from '../assets/companies/brand14.svg';
import Brand15 from '../assets/companies/brand15.svg';
import Brand16 from '../assets/companies/brand16.svg';

const Companies = () => {
  return (
    <div className="flex flex-col justify-center h-full gap-12 md:pt-24">
      <h1 className="text-4xl font-bold w-[90%] text-center ml-8 md:text-6xl">
        Findtrend made +1000 Startup grow
      </h1>
      <div className="grid grid-cols-2 m-12 gap-12 md:grid-cols-4 ">
        <div className="h-24 w-[40vw] bg-gray-100 flex px-8 rounded-xl md:w-[20vw]">
          <img className="align-middle" src={Brand1} alt="" />
        </div>
        <div className="h-24 w-[40vw] bg-gray-100 flex px-8 rounded-xl md:w-[20vw]">
          <img className="align-middle" src={Brand2} alt="" />
        </div>
        <div className="h-24 w-[40vw] bg-gray-100 flex px-8 rounded-xl md:w-[20vw]">
          <img className="align-middle" src={Brand3} alt="" />
        </div>
        <div className="h-24 w-[40vw] bg-gray-100 flex px-8 rounded-xl md:w-[20vw]">
          <img className="align-middle" src={Brand4} alt="" />
        </div>
        <div className="h-24 w-[40vw] bg-gray-100 flex px-8 rounded-xl md:w-[20vw]">
          <img className="align-middle" src={Brand5} alt="" />
        </div>
        <div className="h-24 w-[40vw] bg-gray-100 flex px-8 rounded-xl md:w-[20vw]">
          <img className="align-middle" src={Brand6} alt="" />
        </div>
        <div className="h-24 w-[40vw] bg-gray-100 flex px-8 rounded-xl md:w-[20vw]">
          <img className="align-middle" src={Brand7} alt="" />
        </div>
        <div className="h-24 w-[40vw] bg-gray-100 flex px-8 rounded-xl md:w-[20vw]">
          <img className="align-middle" src={Brand8} alt="" />
        </div>
        <div className="h-24 w-[40vw] bg-gray-100 flex px-8 rounded-xl md:w-[20vw]">
          <img className="align-middle" src={Brand9} alt="" />
        </div>
        <div className="h-24 w-[40vw] bg-gray-100 flex px-8 rounded-xl md:w-[20vw]">
          <img className="align-middle" src={Brand10} alt="" />
        </div>
        <div className="h-24 w-[40vw] bg-gray-100 flex px-8 rounded-xl md:w-[20vw]">
          <img className="align-middle" src={Brand11} alt="" />
        </div>
        <div className="h-24 w-[40vw] bg-gray-100 flex px-8 rounded-xl md:w-[20vw]">
          <img className="align-middle" src={Brand12} alt="" />
        </div>
        <div className="h-24 w-[40vw] bg-gray-100 flex px-8 rounded-xl md:w-[20vw]">
          <img className="align-middle" src={Brand13} alt="" />
        </div>
        <div className="h-24 w-[40vw] bg-gray-100 flex px-8 rounded-xl md:w-[20vw]">
          <img className="align-middle" src={Brand14} alt="" />
        </div>
        <div className="h-24 w-[40vw] bg-gray-100 flex px-8 rounded-xl md:w-[20vw]">
          <img className="align-middle" src={Brand15} alt="" />
        </div>
        <div className="h-24 w-[40vw] bg-gray-100 flex px-8 rounded-xl md:w-[20vw]">
          <img className="align-middle" src={Brand16} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Companies;
