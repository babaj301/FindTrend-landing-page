import Tag1 from "../assets/search-tags/tab1.svg";
import Tag2 from "../assets/search-tags/tab2.svg";
import Tag3 from "../assets/search-tags/tab3.svg";
import Tag4 from "../assets/search-tags/tab4.svg";
import CtaPointer from "../assets/logos-arrows/cta-arrow.svg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="w-full h-screen bg-black ">
      {/* <img
        className="top-0 left-0 w-full h-screen object-cover"
        src={Background}
        alt=""
      /> */}

      <div className="pt-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20, scale: 0.7 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeIn", delay: 0.3 }}
          className="text-white text-4xl md:text-7xl font-bold md:mt-12  md:pb-2 "
        >
          Minimize your tabs.
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: -1, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 1.2,
            delay: 0.3,
            ease: "easeIn",
          }}
          className="text-white text-3xl md:text-7xl font-bold"
        >
          Find the trends!
        </motion.h1>
        <div
          className="text-gray-400 mt-4 mb-4
        "
        >
          {/* Paragraphs */}
          <div className="mt-8 md:mt-10">
            <p className="w-[80%] text-center text-sm m-auto md:text-xl">
              Don’t let your computer memories consumes all of those browser
              tabs.
            </p>
            <p className="w-[80%] text-center text-sm m-auto md:text-xl">
              Findtrend let you gathers all of your favorite website into one
              place.
            </p>
          </div>
        </div>

        {/*  CTA Button */}
        <div className="mb-10 mt-10 md:mt-8 md:mb-12 md:flex md:flex-row md:justify-center  ">
          <button className="text-black bg-lime-400 pl-4 pr-2 py-2 md:py-2 text-sm font-bold rounded-full hover:bg-lime-500 md:rounded-full md:h-10 md:ml-28 ">
            Get Started <span>🔥</span>
          </button>

          <motion.div
            initial={{ opacity: 1, y: -20 }}
            animate={{ opacity: 1, y: [0, 20, 0] }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
            }}
            className="text-white text-sm font-bold md:text-lg md:flex md:flex-row md:items-center md:ml-4 mt-4 md:mt-0"
          >
            <img
              className="hidden md:inline-block md:align-text-top md:ml-2 "
              src={CtaPointer}
              alt=""
            />
          </motion.div>
        </div>

        {/* Search Tags */}
        <div className="flex flex-col justify-center items-center lg:flex-row lg:mt-14 z-10 ">
          <img
            className="w-72 -rotate-2 hover:-rotate-6 md:-rotate-6 md:hover:-rotate-12 hover:transition-transform duration-200 shadow-xl"
            src={Tag4}
            alt=""
          />
          <img
            className="w-72 rotate-3 hover:-rotate-6 md:rotate-6 hover:transition-transform duration-200 shadow-xl"
            src={Tag3}
            alt=""
          />
          <img
            className="w-72 -rotate-2 hover:-rotate-6 md:-rotate-6 md:hover:-rotate-12 hover:transition-transform duration-200 shadow-xl"
            src={Tag2}
            alt=""
          />
          <img
            className="w-72 rotate-3 hover:-rotate-6 md:rotate-6 hover:transition-transform duration-200 shadow-xl"
            src={Tag1}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
