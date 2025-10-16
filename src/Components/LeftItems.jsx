import React from "react";
import { GitHub, Instagram, LinkedIn } from "@mui/icons-material";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const LeftItems = () => {
  const menuItems = [
    { name: "About", to: "about" },
    { name: "Technologies", to: "technologies" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full h-auto lg:h-screen flex flex-col lg:justify-between"
    >
      {/* Top Content */}
      <div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="pt-10 mx-5 md:mx-10"
        >
          <h1 className="text-4xl !font-Outfit !font-bold text-heading">
            Akbar Qureshi
          </h1>
          <p className="mt-2 text-para">
            Mern Stack | React | Next.js Developer
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mx-5 my-5 md:mx-10 text-para"
        >
          I design and build clean, accessible websites that look stunning on
          any device — crafting{" "}
          <span className="font-semibold text-blue-900">
            interactive user interfaces
          </span>{" "}
          tailored to your unique needs.
        </motion.p>

        {/* Menu Items */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="flex gap-5 md:block m-10 text-blue-900 font-mono"
        >
          {menuItems.map(({ name, to }) => (
            <Link
              key={to}
              to={to}
              smooth={true}
              duration={500}
              spy={true}
              offset={-50}
              activeClass="active"
              containerId="right-container" // 👈 target RightItems scroll container
            >
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="hover:text-para py-1 cursor-pointer duration-500"
                whileHover={{ scale: 1.1, x: 5 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                {name}
              </motion.p>
            </Link>
          ))}
        </motion.div>
      </div>

      {/* Bottom Social Icons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="flex justify-start space-x-4 mb-6 text-blue-900 ml-10"
      >
        {/* GitHub */}
        <motion.a
          href="https://github.com/hassan-qureshii"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: 10 }}
          transition={{ type: "spring" }}
        >
          <GitHub className="cursor-pointer hover:text-para" />
        </motion.a>

        {/* LinkedIn */}
        <motion.a
          href="https://www.linkedin.com/in/akbar-qureshi-8634b530b/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: 10 }}
          transition={{ type: "spring" }}
        >
          <LinkedIn className="cursor-pointer hover:text-para" />
        </motion.a>

        {/* Instagram */}
        <motion.a
          href="https://www.instagram.com/hassanq_shi"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: 10 }}
          transition={{ type: "spring" }}
        >
          <Instagram className="cursor-pointer hover:text-para" />
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default LeftItems;