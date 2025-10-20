import React from "react";
import { motion } from "framer-motion";

const Technology = ({ skills }) => {
  const firstSet = skills.slice(0, 7);
  const secondSet = skills.slice(7, 14);
  const doubledFirstSet = [...firstSet, ...firstSet];
  const doubledSecondSet = [...secondSet, ...secondSet];

  const scrollLeft = {
    animate: {
      x: ["0%", "-100%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          duration: 30,
        },
      },
    },
  };

  const scrollRight = {
    animate: {
      x: ["-100%", "0%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          duration: 30,
        },
      },
    },
  };

  return (
    <div className="mt-16">
      <motion.h1
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-2xl font-black font-sans text-heading"
      >
        Technologies
      </motion.h1>

      <div className="relative overflow-hidden mt-5 px-5 cursor-pointer">
        <motion.div
          className="flex gap-6 px-6 py-4"
          variants={scrollLeft}
          animate="animate"
        >
          {doubledFirstSet.map((skill, index) => (
            <div
              key={index}
              className="bg-para/80 opacity-95 rounded-xl p-5 flex flex-col items-center shadow-md hover:shadow-blue-900/50 hover:scale-110 transition-transform min-w-[180px] md:min-w-[220px]"
            >
              <img
                src={skill.img}
                alt={skill.name}
                className="w-24 h-24 object-contain"
              />
              <h1 className="text-center font-sans pt-3 text-base text-background">
                {skill.name}
              </h1>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="relative overflow-hidden mt-5 cursor-pointer px-5">
        <motion.div
          className="flex gap-6 px-6 py-4"
          variants={scrollRight}
          animate="animate"
        >
          {doubledSecondSet.map((skill, index) => (
            <div
              key={index}
              className="bg-para/80 opacity-95 rounded-xl p-5 flex flex-col items-center shadow-md hover:shadow-blue-900/50 hover:scale-110 transition-transform min-w-[180px] md:min-w-[220px]"
            >
              <img
                src={skill.img}
                alt={skill.name}
                className="w-24 h-24 object-contain"
              />
              <h1 className="text-center font-sans pt-3 text-base text-background">
                {skill.name}
              </h1>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Technology;
