import React from "react";
import { motion } from "framer-motion";

// ✅ No need to import from assets if in public folder
// Just use `/htmllogo.png` etc. directly

// ✅ Component Imports
import Technology from "./Technology";
import Project from "./Project";
import Contact from "./Contact";
import Copyright from "./Copyright";
import UpButton from "./UpButton";

const skills = [
  { name: "HTML", img: "/Html_logo.png" },
  { name: "CSS", img: "/Css_logo.png" },
  { name: "Bootstrap", img: "/Boostrap_logo.png" },
  { name: "JavaScript", img: "/JavaScript_logo.png" },
  { name: "React", img: "/react_logo.png" },
  { name: "Tailwind CSS", img: "/TailwindCss_logo.png" },
  { name: "Next.js", img: "/NextJs_logo.png" },
  { name: "Ant Design", img: "/AntDesign_logo.png" },
  { name: "Material UI", img: "/MaterialUI_logo.png" },
  { name: "Vue", img: "/Vue.png" },
  { name: "Framer Motion", img: "/Framer_logo.png" },
  { name: "Node.js", img: "/NodeJs_logo.png" },
  { name: "Express.js", img: "/ExpressJs_logo.png" },
  { name: "MongoDB", img: "/MongoDB-logo.png" },
];

const RightItems = () => {
  return (
    <div
      id="right-container"
      className="w-full h-screen flex flex-col justify-between overflow-y-auto overflow-x-hidden scroll-smooth"
    >
      {/* 📝 About Section */}
      <div id="about" className="pt-10 pr-5">
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-2xl font-black font-sans text-heading"
        >
          About
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-2 text-para leading-loose"
        >
          Hello! My name is Akbar Qureshi, and I hope this message finds you well. 
          I have completed my Diploma of Associate Engineering (DAE) in Information & Communication Technology (ICT) 
          from CTTI College Islamabad. I am a passionate Software Developer specializing in Frontend and MERN Stack 
          development since March 2024...
        </motion.p>
      </div>

      {/* ⚡ Technology Section */}
      <div id="technologies">
        <Technology skills={skills} />
      </div>

      {/* 🚀 Project Section */}
      <div id="projects">
        <Project />
      </div>

      {/* 📞 Contact Section */}
      <div id="contact">
        <Contact />
      </div>

      {/* ⬆️ Up Button Section */}
      <div id="upbutton">
        <UpButton />
      </div>

      <Copyright />
    </div>
  );
};

export default RightItems;
