import React, { useState } from "react";
import { motion } from "framer-motion";
import { Modal, Button } from "antd";

// ✅ All images come from the public folder → use absolute paths like "/image.png"
const projects = [
  { name: "SkyCast Weather App", path: "https://sky-cast-weather-tawny.vercel.app/", image: "/skycast.png", description: "SkyCast Weather App is a sleek..." },
  { name: "Meal Metrics", path: "https://meal-metrics-six.vercel.app/", image: "/mealmetrics.png", description: "MealMetrics – A responsive..." },
  { name: "Microsoft Office UI Website", path: "https://website-9e404.web.app/", image: "/microsoft.png", description: "Clone of Microsoft official site..." },
  { name: "CODVerse", path: "https://co-dverse.vercel.app/", image: "/CodVerse.png", description: "Modern Call of Duty fan hub..." },
  { name: "DigitalEra Faculty", path: "https://digital-era-institute.vercel.app/", image: "/DigitalEra.png", description: "Faculty platform using React.js..." },
  { name: "Food Website", path: "https://burger-website-hq.netlify.app/", image: "/Burger.png", description: "Modern landing page for a burger restaurant." },
  { name: "3 Column Preview Card", path: "https://3-column-preview-card-hq.netlify.app/", image: "/3-column-preview-card.png", description: "A responsive 3-column preview card." },
  { name: "Single Price Grid Component", path: "https://single-price-grid-component-master-hq.netlify.app/", image: "/singleprice.png", description: "Single Price Grid Component." },
  { name: "ClipBoard Landing Page", path: "https://clipboard-landing-page-hq.netlify.app/", image: "/landingpage.png", description: "Clipboard Landing Page built using HTML, CSS." },
  { name: "Coza Store", path: "https://coza-store-hq.netlify.app/", image: "/Coza-store.png", description: "Modern fashion store landing page." },
  { name: "Cartify", path: "/projects/youtube", image: "/Cartify.png", description: "E-commerce cart project." },
  { name: "Blog Preview Card", path: "https://blog-preview-card-main-hq.netlify.app/", image: "/Blog-preview-card.png", description: "Clean, modern blog preview card." },
  { name: "Profile Component Main", path: "https://social-links-profile-main-hq.netlify.app/", image: "/Profile-main.png", description: "Responsive profile card." },
  { name: "QR Code Component Main", path: "https://qr-code-component-main-hq.netlify.app/", image: "/qrcode.png", description: "Elegant QR Code Component." },
  { name: "Text Length Analyzer App", path: "https://text-length-analyzer.netlify.app/", image: "/textanalyzer.png", description: "Analyze the length of text." },
  { name: "Payment Method UI", path: "https://payment-method-ui.netlify.app/", image: "/Payment.png", description: "Modern UI for payment gateway." },
  { name: "Conference Ticket Generator", path: "https://conference-ticket-generator-main-hq.netlify.app/", image: "/TicketGenerator.png", description: "Generates custom conference tickets." },
  { name: "Sigma Solver Calculator", path: "https://sigmasolver-calculator.netlify.app/", image: "/Calculator.png", description: "A calculator app." },
  { name: "Time Forage", path: "https://timeforge.netlify.app/", image: "/stopwatch.png", description: "Stopwatch and timer app." },
  { name: "Logic Whisper App", path: "https://logicwhisper-app.netlify.app/", image: "/logicwhisper.png", description: "App for logical problems." },
  { name: "Google Clone", path: "https://google-clone-hq.netlify.app/", image: "/googleclone.png", description: "Google Search clone." },
];

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
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
        <h1 className="text-4xl font-black font-mono text-heading">All Projects</h1>
        <p className="text-gray-600 mt-2">Click on a project to explore more 🚀</p>
      </motion.div>

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
            <motion.img
              src={project.image}
              alt={project.name}
              className="w-full h-80 object-contain bg-white"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <div className="p-4">
              <span className="text-xl font-semibold">{project.name}</span>
            </div>
          </motion.div>
        ))}
      </div>

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
              if (selectedProject?.path) window.open(selectedProject.path, "_blank");
            }}
          >
            See Live Project 🚀
          </Button>,
        ]}
      >
        {selectedProject?.image && (
          <img
            src={selectedProject.image}
            alt={selectedProject.name}
            className="w-full object-contain max-h-[500px] rounded-lg mb-4"
          />
        )}
        <p className="text-gray-700">{selectedProject?.description}</p>
      </Modal>
    </div>
  );
};

export default AllProjects;