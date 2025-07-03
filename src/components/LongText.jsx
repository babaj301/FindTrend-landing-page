import React from "react";
import { motion } from "framer-motion";

const LongText = () => {
  return (
    <div className="bg-white h-[70vh] flex flex-row justify-center items-center md:mt-24">
      <h1 className="text-black text-4xl md:text-6xl font-bold mt-2 ml-16 mr-12 md:m-16 md:w-[50%]">
        Findtrend helps you to increase your productivity and reduce your
        computer's memory load, 
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeIn", delay: 0.3 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <span className="text-gray-400">
          an application that can fulfill your daily browsing needs.
          </span>
        </motion.div>
      </h1>
    </div>
  );
};

export default LongText;
