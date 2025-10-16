import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRightToLine } from "lucide-react";
import { Link } from "react-router-dom";

// MUI Components
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";

// Import images
import Burger from "../assets/Burger.png";
import Caffine_cove from "../assets/Caffine_cove.png";
import Cloud_management from "../assets/Cloud_management.png";
import Form from "../assets/Form.png";
import Gym from "../assets/Gym.png";
import Microsoft from "../assets/Microsoft.png";
import Squid_game from "../assets/Squid_game.png";
import Youtube_clone from "../assets/Youtube_clone.png";

// Images Array with names + live links
const Images = [
  { img: Burger, title: "Burger Website", description: "This Website is a modern landing page designed for a burger restaurant or fast-food business.", link: "https://burger-website-hq.netlify.app/" },
  { img: Caffine_cove, title: "Caffeine Cove", description: "Caffeine Cove is a sleek café/coffee-place website that delivers a clean and modern user experience. It features an inviting landing page with rich visuals, well-organized sections for menu items, about/about-us, contact info, and possibly responsive behavior for mobile and desktop. The design is polished, with smooth animations and intuitive navigation to give visitors a cozy, welcoming feel.", link: "https://caffine-cove.vercel.app/" },
  { img: Cloud_management, title: "Cloud Sphere", description: "CloudSphere is a modern cloud management web app that simplifies multi-cloud infrastructure monitoring and control. Built with React and Tailwind CSS, it offers a sleek, responsive, and intuitive UI for developers teams.", link: "https://cloud-sphere.vercel.app/" },
  { img: Form, title: "Payment method UI", description: "A responsive payment method UI designed to provide a smooth and user-friendly checkout experience. This project showcases a clean & interactive payment form that can be used for e-commerce websites, or any online transactions.", link: "https://payment-method-ui.netlify.app/" },
  { img: Gym, title: "Gym Website", description: "This Gym Website is a engaging platform designed to promote fitness services and attract new members.Built with a modern and responsive design.", link: "https://gym-website-hq.netlify.app/" },
  { img: Microsoft, title: "Microsoft Website UI", description: "This website appears to be a cloned version of Microsoft's official site, showcasing a variety of Microsoft products and services. It highlights tools like Microsoft 365, Windows 11, Microsoft Edge, OneDrive, and Outlook for mobile devices.", link: "https://website-9e404.web.app/" },
  { img: Squid_game, title: "Squid Game UI", description: "This web project immerses visitors in the dramatic thrill of the Squid Game universe via a sleek, interactive landing page built with modern web technologies.", link: "https://squid-game-hq-dkyv.vercel.app/" },
  { img: Youtube_clone, title: "Youtube Clone", description: "Video streaming clone project.", link: "https://youtube-clone.netlify.app" },
];

const Project = () => {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

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
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-bold">{item.title}</h2>
              </div>
            </motion.div>
          ))}
        </div>

        <Link to="Projects">
          <h1 className="mt-8 font-bold text-lg ml-2 flex">
            View All Projects
            <ArrowRightToLine size={20} className="ml-3" />
          </h1>
        </Link>
      </div>

      {/* Material UI Dialog */}
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>{selectedProject?.title}</DialogTitle>
        <DialogContent>
          <img
            src={selectedProject?.img}
            alt={selectedProject?.title}
            className="w-full rounded-md mb-3"
          />
          <DialogContentText>{selectedProject?.description}</DialogContentText>
        </DialogContent>
        <DialogActions>
          {/* Live project button */}
          {selectedProject?.link && (
            <Button
              component="a"
              href={selectedProject.link}
              target="_blank"
              rel="noopener noreferrer"
              color="primary"
            >
              See Live Project
            </Button>
          )}
          <Button onClick={handleClose} variant="contained" className="bg-heading">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Project;