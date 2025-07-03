import React from "react";
import Brand1 from "../assets/companies/brand1.svg";
import Brand2 from "../assets/companies/brand2.svg";
import Brand3 from "../assets/companies/brand3.svg";
import Brand4 from "../assets/companies/brand4.svg";
import Brand5 from "../assets/companies/brand5.svg";
import Brand6 from "../assets/companies/brand6.svg";
import Brand7 from "../assets/companies/brand7.svg";
import Brand8 from "../assets/companies/brand8.svg";
import Brand9 from "../assets/companies/brand9.svg";
import Brand10 from "../assets/companies/brand10.svg";
import Brand11 from "../assets/companies/brand11.svg";
import Brand12 from "../assets/companies/brand12.svg";
import Brand13 from "../assets/companies/brand13.svg";
import Brand14 from "../assets/companies/brand14.svg";
import Brand15 from "../assets/companies/brand15.svg";
import Brand16 from "../assets/companies/brand16.svg";
import { motion } from "framer-motion";

const Companies = () => {
  const brands = [
    Brand1,
    Brand2,
    Brand3,
    Brand4,
    Brand5,
    Brand6,
    Brand7,
    Brand8,
    Brand9,
    Brand10,
    Brand11,
    Brand12,
    Brand13,
    Brand14,
    Brand15,
    Brand16,
  ];

  return (
    <div className="flex flex-col justify-center h-full gap-12 md:pt-24">
      <h1 className="text-4xl font-bold w-[90%] text-center ml-8 md:text-6xl">
        Findtrend made +1000 Startup grow
      </h1>

      <div className="grid grid-cols-2 m-12 gap-12 md:grid-cols-4">
        {brands.map((brand, index) => (
          <motion.div
            key={index}
            className="h-24 w-[40vw] bg-gray-100 flex px-8 rounded-xl md:w-[20vw]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: index * 0.1,
            }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <img
              className="align-middle m-auto"
              src={brand}
              alt={`brand-${index}`}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Companies;
