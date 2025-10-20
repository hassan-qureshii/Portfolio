import React, { useState } from "react";
import { motion } from "framer-motion";
import { Modal, Button, Skeleton } from "antd";

const projects = [
  { 
    name: "SkyCast Weather App", 
    path: "https://sky-cast-weather-tawny.vercel.app/", 
    image: "/skycast.png", 
    description: "SkyCast is a responsive weather forecasting app that provides real-time temperature, humidity, and location-based reports. Built with modern UI for a smooth user experience."
  },
  { 
    name: "Meal Metrics", 
    path: "https://meal-metrics-six.vercel.app/", 
    image: "/mealmetrics.png", 
    description: "Meal Metrics helps users discover and explore recipes with detailed nutritional information. A modern, mobile-friendly interface for food lovers."
  },
  { 
    name: "Microsoft Office UI Website", 
    path: "https://website-9e404.web.app/", 
    image: "/microsoft.png", 
    description: "A clean and modern clone of Microsoft’s official site. Showcases professional UI/UX design and smooth page transitions."
  },
  { 
    name: "CODVerse", 
    path: "https://co-dverse.vercel.app/", 
    image: "/CodVerse.png", 
    description: "CODVerse is a Call of Duty fan hub featuring game modes, news, and sleek animations. Built with responsive design for gamers."
  },
  { 
    name: "DigitalEra Faculty", 
    path: "https://digital-era-institute.vercel.app/", 
    image: "/DigitalEra.png", 
    description: "A React.js faculty platform for educational institutions. Includes clean navigation and modern UI for students and staff."
  },
  { 
    name: "Food Website", 
    path: "https://burger-website-hq.netlify.app/", 
    image: "/Burger.png", 
    description: "A stylish burger restaurant landing page with smooth animations. Designed to attract customers with a modern layout."
  },
  { 
    name: "3 Column Preview Card", 
    path: "https://3-column-preview-card-hq.netlify.app/", 
    image: "/3-column-preview-card.png", 
    description: "A responsive 3-column preview card component. Perfect for showcasing services in a minimal and elegant style."
  },
  { 
    name: "Single Price Grid Component", 
    path: "https://single-price-grid-component-master-hq.netlify.app/", 
    image: "/singleprice.png", 
    description: "A clean and simple pricing card layout. Ideal for presenting pricing plans in a modern way."
  },
  { 
    name: "ClipBoard Landing Page", 
    path: "https://clipboard-landing-page-hq.netlify.app/", 
    image: "/landingpage.png", 
    description: "A modern landing page built using HTML and CSS. Fully responsive with a clean and professional design."
  },
  { 
    name: "Coza Store", 
    path: "https://coza-store-hq.netlify.app/", 
    image: "/Coza-store.png", 
    description: "A stylish fashion store landing page. Designed with smooth sections and a modern e-commerce layout."
  },
  { 
    name: "Cartify", 
    path: "/projects/youtube", 
    image: "/Cartify.png", 
    description: "Cartify is an e-commerce cart project featuring add-to-cart and product management. Simple and efficient for learning full-stack."
  },
  { 
    name: "Blog Preview Card", 
    path: "https://blog-preview-card-main-hq.netlify.app/", 
    image: "/Blog-preview-card.png", 
    description: "A clean blog preview card design. Highlights titles, author info, and categories with a minimal touch."
  },
  { 
    name: "Profile Component Main", 
    path: "https://social-links-profile-main-hq.netlify.app/", 
    image: "/Profile-main.png", 
    description: "A modern responsive profile card with social links. Great for personal branding and portfolio use."
  },
  { 
    name: "QR Code Component Main", 
    path: "https://qr-code-component-main-hq.netlify.app/", 
    image: "/qrcode.png", 
    description: "An elegant and responsive QR Code component. Simple yet effective design for quick scanning."
  },
  { 
    name: "Text Length Analyzer App", 
    path: "https://text-length-analyzer.netlify.app/", 
    image: "/textanalyzer.png", 
    description: "A handy app that counts text length in real time. Useful for writers, developers, and students."
  },
  { 
    name: "Payment Method UI", 
    path: "https://payment-method-ui.netlify.app/", 
    image: "/Payment.png", 
    description: "A modern payment gateway UI design. Features secure and clean layout for better user trust."
  },
  { 
    name: "Conference Ticket Generator", 
    path: "https://conference-ticket-generator-main-hq.netlify.app/", 
    image: "/TicketGenerator.png", 
    description: "An interactive tool to generate digital conference tickets. Clean design and smooth functionality."
  },
  { 
    name: "Sigma Solver Calculator", 
    path: "https://sigmasolver-calculator.netlify.app/", 
    image: "/Calculator.png", 
    description: "A simple and modern calculator app. User-friendly interface with accurate calculations."
  },
  { 
    name: "Time Forage", 
    path: "https://timeforge.netlify.app/", 
    image: "/stopwatch.png", 
    description: "A stopwatch and timer app with a clean UI. Perfect for tracking tasks or workouts."
  },
  { 
    name: "Logic Whisper App", 
    path: "https://logicwhisper-app.netlify.app/", 
    image: "/logicwhisper.png", 
    description: "Logic Whisper helps users solve logical problems and puzzles. Built with a focus on simplicity."
  },
  { 
    name: "Google Clone", 
    path: "https://google-clone-hq.netlify.app/", 
    image: "/googleclone.png", 
    description: "A front-end clone of Google Search with a clean and minimal design. Shows modern web development skills."
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const AllProjects = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [loadedImages, setLoadedImages] = useState({});

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setSelectedProject(null);
  };

  const handleImageLoad = (index) => {
    setTimeout(() => {
      setLoadedImages((prev) => ({ ...prev, [index]: true }));
    }, 2000);
  };

  return (
    <div
      className="w-full min-h-screen mx-auto p-10"
      style={{ fontFamily: '"Poppins", "Inter", sans-serif' }}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-10"
      >
        <h1 className="text-4xl font-black text-heading">All Projects</h1>
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
            className="block bg-background rounded-2xl shadow-xl text-para cursor-pointer transition duration-300 hover:shadow-2xl overflow-hidden relative"
          >
            {!loadedImages[i] && (
              <div className="absolute inset-0 z-0 flex items-center justify-center bg-white">
                <Skeleton.Image active style={{ width: "100%", height: "100%" }} />
              </div>
            )}

            <motion.img
              src={project.image}
              alt={project.name}
              className={`w-full h-80 object-contain bg-white relative z-10 transition-opacity duration-500 ${
                loadedImages[i] ? "opacity-100" : "opacity-0"
              }`}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              onLoad={() => handleImageLoad(i)}
            />
            <div className="p-4 relative z-10 bg-background">
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
              fontFamily: '"Poppins", "Inter", sans-serif',
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
