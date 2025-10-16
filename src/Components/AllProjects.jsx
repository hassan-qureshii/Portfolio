import React, { useState } from "react";
import { motion } from "framer-motion";
import { Modal, Button } from "antd";

// 🖼️ Import all images at the top
import skyCast from "../assets/skyCast.png";
import MealMetrics from "../assets/MealMetrics.png";
import Microsoft from "../assets/Microsoft.png";
import CODverse from "../assets/CODverse.png";
import DigitalEra from "../assets/DigitalEra.png";
import Burger from "../assets/Burger.png";
import ThreeColumn from "../assets/3-column-preview-card.png";
import SinglePrice from "../assets/Single_Price.png";
import LandingPage from "../assets/Landing-page.png";
import CozaStore from "../assets/Coza-store.png";
import Cartify from "../assets/Cartify.png";
import BlogPreview from "../assets/Blog-preview-card.png";
import ProfileMain from "../assets/Profile-main.png";
import QrCode from "../assets/Qr-code.png";
import TextAnalyzer from "../assets/TextAnalyzer.png";
import Payment from "../assets/Payment.png";
import TicketGenerator from "../assets/TicketGenerator.png";
import Calculator from "../assets/Calculator.png";
import Stopwatch from "../assets/Stopwatch.png";
import LogicWhisper from "../assets/LogicWhisperApp.png";
import GoogleClone from "../assets/Google-clone.png";

// 📌 Project Data Array
const projects = [
  {
    name: "skyCast Weather App",
    path: "https://sky-cast-weather-tawny.vercel.app/",
    image: skyCast,
    description:
      "SkyCast Weather App is a sleek and responsive weather web application that provides real-time weather updates for any location worldwide.",
  },
  {
    name: "Meal Metrics",
    path: "https://meal-metrics-six.vercel.app/",
    image: MealMetrics,
    description:
      "MealMetrics – A responsive burger dashboard built with HTML, CSS, and JavaScript. Browse menu items, search, and manage a dynamic shopping cart with live totals.",
  },
  {
    name: "Microsoft Office UI Website",
    path: "https://website-9e404.web.app/",
    image: Microsoft,
    description:
      "This website is a clone of Microsoft's official site, showcasing Microsoft 365, Windows 11, Edge, OneDrive, and Outlook.",
  },
  {
    name: "CODverse",
    path: "https://co-dverse.vercel.app/",
    image: CODverse,
    description:
      "CODverse is a modern, responsive Call of Duty fan hub built with React.js, Ant Design, and Framer Motion.",
  },
  {
    name: "DigitalEra Faculty",
    path: "https://digital-era-institute.vercel.app/",
    image: DigitalEra,
    description:
      "📚 Digital Era Institute Website — A responsive faculty platform created with React.js, Tailwind CSS, and Framer Motion.",
  },
  {
    name: "Food Website",
    path: "https://burger-website-hq.netlify.app/",
    image: Burger,
    description:
      "A modern landing page designed for a burger restaurant or fast-food business.",
  },
  {
    name: "3-column-preview-card",
    path: "https://3-column-preview-card-hq.netlify.app/",
    image: ThreeColumn,
    description:
      "A responsive 3-column preview card designed for modern web layouts.",
  },
  {
    name: "Single-Price-Grid-Components",
    path: "https://single-price-grid-component-master-hq.netlify.app/",
    image: SinglePrice,
    description:
      "Single Price Grid Component with a clean and modern pricing grid layout.",
  },
  {
    name: "ClipBoard Landing Page",
    path: "https://clipboard-landing-page-hq.netlify.app/",
    image: LandingPage,
    description:
      "A clean and modern Clipboard Landing Page built using HTML, CSS, and Flexbox/Grid.",
  },
  {
    name: "Coza Store",
    path: "https://coza-store-hq.netlify.app/",
    image: CozaStore,
    description:
      "A sleek and modern e-commerce landing page designed for fashion stores.",
  },
  {
    name: "Cartify",
    path: "/projects/youtube",
    image: Cartify,
    description:
      "An e-commerce cart project built with modern UI and functionality.",
  },
  {
    name: "Blog Preview Card",
    path: "https://blog-preview-card-main-hq.netlify.app/",
    image: BlogPreview,
    description:
      "A clean, modern, and responsive blog preview card designed to display blog articles.",
  },
  {
    name: "Profile Component Main",
    path: "https://social-links-profile-main-hq.netlify.app/",
    image: ProfileMain,
    description:
      "A clean, responsive profile card showcasing social media links.",
  },
  {
    name: "QR-Code Component Main",
    path: "https://qr-code-component-main-hq.netlify.app/",
    image: QrCode,
    description:
      "A simple and elegant QR Code Component built using HTML and CSS.",
  },
  {
    name: "TextLength Analyzer App",
    path: "https://text-length-analyzer.netlify.app/",
    image: TextAnalyzer,
    description: "A simple tool to analyze the length of text in real-time.",
  },
  {
    name: "Payment Method UI",
    path: "https://payment-method-ui.netlify.app/",
    image: Payment,
    description: "A modern UI for payment gateway screens.",
  },
  {
    name: "Conference Ticket Generator",
    path: "https://conference-ticket-generator-main-hq.netlify.app/",
    image: TicketGenerator,
    description: "Generates custom conference tickets with user details.",
  },
  {
    name: "Sigma Solver Calculator",
    path: "https://sigmasolver-calculator.netlify.app/",
    image: Calculator,
    description: "A calculator app that solves equations quickly.",
  },
  {
    name: "Time Forage",
    path: "https://timeforge.netlify.app/",
    image: Stopwatch,
    description: "A stopwatch and timer app for productivity and tracking.",
  },
  {
    name: "Logic Whisper App",
    path: "https://logicwhisper-app.netlify.app/",
    image: LogicWhisper,
    description:
      "An app designed for practicing and testing logical problems.",
  },
  {
    name: "Google Clone",
    path: "https://google-clone-hq.netlify.app/",
    image: GoogleClone,
    description:
      "A responsive Google Search 🔍 clone that mimics the core functionality of Google's search engine.",
  },
];

// 🌀 Animation Variants
const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const AllProjects = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setSelectedProject(null);
  };

  return (
    <div className="w-full min-h-screen mx-auto p-10">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-10"
      >
        <h1 className="text-4xl font-black font-mono text-heading">
          All Projects
        </h1>
        <p className="text-gray-600 mt-2">Click on a project to explore more 🚀</p>
      </motion.div>

      {/* 🧩 Project Grid */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: i * 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => openModal(project)}
            className="block bg-background rounded-2xl shadow-xl text-para cursor-pointer transition duration-300 hover:shadow-2xl overflow-hidden"
          >
            {/* 🖼️ Project Image */}
            <motion.img
              src={project.image}
              alt={project.name}
              className="w-full h-80 object-contain bg-white"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />

            {/* 📝 Project Name */}
            <div className="p-4">
              <span className="text-xl font-semibold">{project.name}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 🪟 Ant Design Modal */}
      <Modal
        title={selectedProject?.name}
        open={isModalVisible}
        onCancel={closeModal}
        footer={[
          <Button
            key="live"
            style={{
              backgroundColor: "#1C398E",
              color: "#fff",
              border: "none",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#152b68";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#1C398E";
              e.currentTarget.style.transform = "scale(1)";
            }}
            onClick={() => {
              if (selectedProject?.path) {
                window.open(selectedProject.path, "_blank");
              }
            }}
          >
            See Live Project 🚀
          </Button>,
        ]}
      >
        {/* 🖼️ Project Image in Modal */}
        {selectedProject?.image && (
          <img
            src={selectedProject.image}
            alt={selectedProject.name}
            className="w-full object-contain max-h-[500px] rounded-lg mb-4"
          />
        )}

        {/* 📜 Project Description */}
        <p className="text-gray-700">{selectedProject?.description}</p>
      </Modal>
    </div>
  );
};

export default AllProjects;
