import React from 'react';

const Email = () => {
  return (
    <div className="bg-lime-400 flex flex-col justify-center">
      <div>
        <h1 className="text-4xl md:text-7xl font-bold text-center mt-16">
          Join us on email for
        </h1>
        <h1 className="text-gray-200/50 text-4xl md:text-7xl font-bold text-center mt-4 ">
          more trending topics
        </h1>
      </div>

      <div className="flex justify-center items-center align-middle mt-8 mb-16">
        <button className="text-white bg-black px-8 py-4 md:py-2 text-sm rounded-full hover:bg-black/90 md:rounded-full md:h-10 md:px-12   ">
          Join Now
        </button>
      </div>
    </div>
  );
};

export default Email;
