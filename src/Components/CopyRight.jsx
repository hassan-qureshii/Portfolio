import React from "react";
import { CopyrightIcon } from "lucide-react";
import { motion } from "framer-motion";

const Copyright = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-3 px-4 "
    >
      <div className="flex justify-between items-center text-sm text-para">
        {/* Left Section */}
        <motion.div
          whileHover={{ scale: 1.05, x: 5 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="flex items-center gap-2 cursor-pointer"
        >
          <CopyrightIcon className="w-4 h-4" />
          <span className="font-medium">Akbar Qureshi</span>
        </motion.div>

        {/* Right Section */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="cursor-pointer"
        >
          © {new Date().getFullYear()}
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Copyright;
