import { ChevronUp } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const UpButton = () => {
  // Smooth scroll to the top of right-container
  const scrollToTop = () => {
    const container = document.getElementById("right-container");
    if (container) {
      container.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="flex justify-end items-end m-5  ">
      <motion.div
        whileHover={{ scale: 1.2, rotate: -10 }}
        whileTap={{ scale: 0.9 }}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200 }}
        onClick={scrollToTop}
      >
        <ChevronUp
          size={32}
          className="bg-heading text-background rounded-full p-2 shadow-lg cursor-pointer shadow-lg hover:shadow-2xl hover:bg-para transition-all duration-300"
        />
      </motion.div>
    </div>
  );
};

export default UpButton;