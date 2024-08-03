import React from 'react';
import Logo from '../assets/logos-arrows/Vector-3.svg';

const Footer = () => {
  return (
    <div className=" justify-center md:flex md:justify-around h-[50vh] md:h-[20vh] gap-8 mt-12 ">
      <div className="flex  gap-2 justify-center items-center  ">
        <img className="h-12" src={Logo} alt="" />
        <h1 className="font-bold text-2xl">Findtrend</h1>
      </div>

      <div className="flex-row md:flex text-lg font-semibold md:font-semibold text-center ">
        <div className="mt-8 md:mt-14 md:mr-4 text-center ">
          <p>Privacy Policy</p>
        </div>
        <div className="mt-8 md:mt-14 md:mr-4 ">
          <p>Terms and Conditions</p>
        </div>
        <div className="mt-8 md:mt-14 md:mr-4">
          <p>Contact Us</p>
        </div>

        <div className="mt-8 md:mt-14 md:mr-4 ">
          <p>Careers</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
