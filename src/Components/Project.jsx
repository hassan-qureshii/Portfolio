import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRightToLine, X } from "lucide-react";
import { Link } from "react-router-dom";

// MUI Components
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Skeleton from "@mui/material/Skeleton"; // ✅ Skeleton import

// Images Array
const Images = [
  {
    img: "/Burger.png",
    title: "Burger Website",
    description:
      "This Website is a modern landing page designed for a burger restaurant or fast-food business.",
    link: "https://burger-website-hq.netlify.app/",
  },
  {
    img: "/Caffine_cove.png",
    title: "Caffeine Cove",
    description:
      "Caffeine Cove is a sleek café/coffee-place website that delivers a clean and modern user experience.",
    link: "https://caffine-cove.vercel.app/",
  },
  {
    img: "/skycast.png",
    title: "SkyCast Weather App",
    description:
      "SkyCast is a responsive weather forecasting app that provides real-time temperature, humidity, and location-based reports. Built with modern UI for a smooth user experience.",
    link: "https://sky-cast-weather-tawny.vercel.app/",
  },
  {
    img: "/mealmetrics.png",
    title: "MealMetrics",
    description:
      "Meal Metrics helps users discover and explore recipes with detailed nutritional information. A modern, mobile-friendly interface for food lovers.",
    link: "https://meal-metrics-six.vercel.app/",
  },
  {
    img: "/gym.png",
    title: "Gym Website",
    description:
      "This Gym Website is an engaging platform designed to promote fitness services and attract new members.",
    link: "https://gym-website-hq.netlify.app/",
  },
  {
    img: "/microsoft.png",
    title: "Microsoft Website UI",
    description:
      "This website appears to be a cloned version of Microsoft's official site.",
    link: "https://website-9e404.web.app/",
  },
  {
    img: "/squidgame.png",
    title: "Squid Game UI",
    description:
      "This web project immerses visitors in the dramatic thrill of the Squid Game universe.",
    link: "https://squid-game-hq-dkyv.vercel.app/",
  },
  {
    img: "/Youtube_clone.png",
    title: "Youtube Clone",
    description: "Video streaming clone project.",
    link: "https://youtube-clone.netlify.app",
  },
];

const Project = () => {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [loading, setLoading] = useState(true); // ✅ skeleton state

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // ✅ minimum 5 seconds skeleton
    return () => clearTimeout(timer);
  }, []);

  const handleOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="mt-15 px-4 md:px-10">
      <motion.h1
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-2xl font-black font-sans text-heading"
      >
        Projects
      </motion.h1>

      <div className="w-full h-full my-8">
        <div className="grid md:grid-cols-2 gap-6">
          {Images.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition-all"
              onClick={() => handleOpen(item)}
            >
              {loading ? (
                <Skeleton variant="rectangular" width="100%" height={208} />
              ) : (
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-52 object-cover"
                />
              )}
              <div className="p-4">
                <h2 className="text-lg font-bold">
                  {loading ? <Skeleton width="60%" /> : item.title}
                </h2>
              </div>
            </motion.div>
          ))}
        </div>

        <Link to="/projects">
          <h1 className="mt-8 font-bold text-lg ml-2 flex">
            View All Projects
            <ArrowRightToLine size={20} className="ml-3" />
          </h1>
        </Link>
      </div>

      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <div className="flex justify-between items-center px-6 pt-4">
          <DialogTitle>{selectedProject?.title}</DialogTitle>
          <button
            onClick={handleClose}
            className="p-1 hover:bg-gray-100 rounded-full"
          >
            <X size={22} />
          </button>
        </div>
        <DialogContent>
          <img
            src={selectedProject?.img}
            alt={selectedProject?.title}
            className="w-full rounded-md mb-3"
          />
          <DialogContentText>{selectedProject?.description}</DialogContentText>
        </DialogContent>
        <DialogActions>
          {selectedProject?.link && (
            <Button
              component="a"
              href={selectedProject.link}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                backgroundColor: "#1C398E",
                color: "#fff",
                "&:hover": { backgroundColor: "#162c6e" },
              }}
            >
              See Live Project
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Project;
