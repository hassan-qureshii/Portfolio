import React from "react";

// ✅ Fixed image imports for technologies
import HtmlLogo from "../assets/htmllogo.png";
import CssLogo from "../assets/csslogo.png";
import BootstrapLogo from "../assets/bootstraplogo.png";
import JavaScriptLogo from "../assets/jslogo.png";
import ReactLogo from "../assets/reactlogo.png";
import TailwindCssLogo from "../assets/tailwindcss_logo.png";
import AntDesignLogo from "../assets/antdesignlogo.png";
import MaterialUILogo from "../assets/materialuilogo.png";
import FramerLogo from "../assets/framerlogo.png";
import NodeJsLogo from "../assets/nodejslogo.png";
import ExpressJsLogo from "../assets/expressjslogo.png";
import MongoDBLogo from "../assets/mongodblogo.png";
import VueLogo from "../assets/vue.png";
import NextJsLogo from "../assets/nextjslogo.png";

import { motion } from "framer-motion";
import Technology from "./Technology";
import Project from "./Project";
import Contact from "./Contact";
import Copyright from "./Copyright";
import UpButton from "./UpButton";

// ✅ Skills array updated with consistent names
const skills = [
  { name: "HTML", img: HtmlLogo },
  { name: "CSS", img: CssLogo },
  { name: "Bootstrap", img: BootstrapLogo },
  { name: "JavaScript", img: JavaScriptLogo },
  { name: "React", img: ReactLogo },
  { name: "Tailwind CSS", img: TailwindCssLogo },
  { name: "Next JS", img: NextJsLogo },
  { name: "Ant Design", img: AntDesignLogo },
  { name: "Material UI", img: MaterialUILogo },
  { name: "Vue", img: VueLogo },
  { name: "Framer Motion", img: FramerLogo },
  { name: "Node.js", img: NodeJsLogo },
  { name: "Express.js", img: ExpressJsLogo },
  { name: "MongoDB", img: MongoDBLogo },
];

const RightItems = () => {
  return (
    <div
      id="right-container"
      className="w-full h-screen flex flex-col justify-between overflow-y-auto overflow-x-hidden scroll-smooth"
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