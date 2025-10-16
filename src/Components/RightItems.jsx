import React from "react";

import Html_logo from "../assets/Html_logo.png";
import Css_logo from "../assets/Css_logo.png";
import Boostrap_logo from "../assets/Boostrap_logo.png";
import JavaScript_logo from "../assets/JavaScript_logo.png";
import react_logo from "../assets/react_logo.png";
import TailwindCss_logo from "../assets/TailwindCss_logo.png";
import AntDesign_logo from "../assets/AntDesign_logo.png";
import MaterialUI_logo from "../assets/MaterialUI_logo.png";
import Framer_logo from "../assets/Framer_logo.png";
import NodeJs_logo from "../assets/NodeJs_logo.png";
import ExpressJs_logo from "../assets/ExpressJs_logo.png";
import MongoDB_logo from "../assets/MongoDB_logo.png";
import Vue from "../assets/Vue.png";
import NextJs_logo from "../assets/NextJs_logo.png";

import { motion } from "framer-motion";
import Technology from "./Technology";
import Project from "./Project";
import Contact from "./Contact";
import Copyright from "./Copyright";
import UpButton from "./UpButton";

// Skills array
const skills = [
  { name: "HTML", img: Html_logo },
  { name: "CSS", img: Css_logo },
  { name: "Bootstrap", img: Boostrap_logo },
  { name: "JavaScript", img: JavaScript_logo },
  { name: "React", img: react_logo },
  { name: "Tailwind CSS", img: TailwindCss_logo },
  { name: "Next JS", img: NextJs_logo },
  { name: "Ant Design", img: AntDesign_logo },
  { name: "Material UI", img: MaterialUI_logo },
  { name: "Vue", img: Vue },
  { name: "Framer Motion", img: Framer_logo },
  { name: "Node.js", img: NodeJs_logo },
  { name: "Express.js", img: ExpressJs_logo },
  { name: "MongoDB", img: MongoDB_logo },
];

const RightItems = () => {
  return (
    <div
      id="right-container" 
      className="w-full h-screen import { MoveUp } from 'lucide-react';
flex flex-col justify-between overflow-y-auto overflow-x-hidden scroll-smooth"
    >
      {/* About Section */}
      <div id="about" className="pt-10 pr-5 ">
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
         Hello! My name is Akbar Qureshi, and I hope this message finds you well. I have completed my Diploma of Associate Engineering (DAE) in Information & Communication Technology (ICT) from CTTI College Islamabad. I am a passionate Software Developer specializing in Frontend and MERN Stack development since March 2024. I focus on building interactive and user-friendly web interfaces using modern frontend technologies. My toolkit includes VS Code Editor and GitHub for efficient development and version control. I deploy and host websites on platforms like Vercel and Netlify to ensure fast and reliable access. On the frontend, I am proficient in HTML, CSS, JavaScript, and React.js, creating dynamic and responsive user experiences. I also utilize Tailwind CSS, Bootstrap, and Framer Motion to design visually appealing and animated websites. To make my designs look consistent and work well, I use popular libraries like Ant Design, Material UI, and Shadcn UI. Besides frontend work, I also have experience with backend development. I create web applications and APIs using Node.js and Express.js, and I use MongoDB to store and manage data efficiently. This helps me build complete full-stack projects that are reliable and fast. I am excited to use my skills to build smooth and creative web applications that offer great experiences for users.
        </motion.p>
      </div>

      {/* Technology Section */}
      <div id="technologies">
        <Technology skills={skills} />
      </div>

      {/* Project Section */}
      <div id="projects">
        <Project />
      </div>

      {/* Contact Section */}
      <div id="contact">
        <Contact />
      </div>

      {/* UpButton Section */}
       <div id="about">
        <UpButton/>
       </div>

      {/* CopyRight Section */}
      <Copyright />
    </div>
  );
};

export default RightItems;