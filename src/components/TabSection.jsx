import Tag5 from '../assets/search-tags/tab5.svg';
import leftArrow from '../assets/logos-arrows/left-tab-arrow.svg';
import rightArrow from '../assets/logos-arrows/right-tab-arrow.svg';

const TabSection = () => {
  return (
    <div className="bg-lime-400/90 h-[60vh] w-full">
      <div className="flex flex-row justify-center">
        <h1 className="text-black text-4xl md:text-6xl font-bold mt-12 ">
          Open new tabs is sh*t
        </h1>
      </div>

      <div className=" flex md:flex md:flex-row md:justify-center justify-center mt-12">
        <img
          className="h-12 md:h-20 self-center hover:rotate-3 "
          src={leftArrow}
          alt=""
        />
        <div className="bg-white rounded-xl">
          <img
            className="my-4 ml-8 mr-8 w-60 md:my-12 md:w-80 md:mx-24 hover:rotate-6"
            src={Tag5}
            alt=""
          />
        </div>
        <img className="h-12 md:h-20 hover:-rotate-3" src={rightArrow} alt="" />
      </div>

      <div className="md:mt-10 mt-12">
        <p className="w-[80%] text-center m-auto md:text-xl md:w-[50%] md:mb-12 ">
          A solution for your browser tabs that doesn't make your device get
          slower over time. Gets easier and faster to discover a trend with just
          one tab.
        </p>
      </div>
    </div>
  );
};

export default TabSection;
