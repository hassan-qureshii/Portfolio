// ✅ RightItems.jsx
import React from "react";
import { motion } from "framer-motion";

// Component Imports
import Technology from "./Technology";
import Project from "./Project";
import Contact from "./Contact";
import CopyRight from "./CopyRight";
import UpButton from "./UpButton";

const skills = [
  { name: "HTML", img: "/Html_logo.png" },
  { name: "CSS", img: "/Css_logo.png" },
  { name: "Bootstrap", img: "/Boostrap_logo.png" },
  { name: "JavaScript", img: "/JavaScript_logo.png" },
  { name: "React", img: "/react_logo.png" },
  { name: "Tailwind CSS", img: "/TailwindCss_logo.png" },
  { name: "Next.js", img: "/NextJs_logo.png" },
  { name: "TypeScript", img: "/typescript_logo.png" },
  { name: "Ant Design", img: "/AntDesign_logo.png" },
  { name: "Material UI", img: "/MaterialUI_logo.png" },
  { name: "Vue", img: "/Vue.png" },
  { name: "Framer Motion", img: "/Framer_logo.png" },
  { name: "Node.js", img: "/NodeJs_logo.png" },
  { name: "Express.js", img: "/ExpressJs_logo.png" },
  { name: "MongoDB", img: "/MongoDB_logo.png" },
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
          Assalam o Alaikum! My name is Akbar Qureshi, and I hope this message finds you well.
          I have completed my Diploma of Associate Engineering (DAE) in Information & Communication Technology (ICT) from CTTI College Islamabad.
          I am a passionate Software Developer, specializing in Frontend and MERN Stack development since March 2024. I love building modern, responsive, and user-friendly interfaces using React.js, Framer Motion, and Tailwind CSS to create smooth and interactive user experiences.
          My development toolkit includes Visual Studio Code, GitHub, Canva, and other modern tools that make my workflow more efficient. I’m also currently learning Next.js and TypeScript to enhance my frontend development skills and build more scalable applications.
          Recently, I’ve been working with clients on real-world projects, including creating a modern institute website, which you can check out below. At the moment, I’m also developing a remote work software that allows users to access and manage their dashboards, as well as an e-commerce platform for a client.
          My focus is on writing clean, efficient code and building products that solve real problems and deliver a smooth user experience.
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

      {/* ✅ Footer Copyright */}
      <CopyRight />
    </div>
  );
};

export default RightItems;
