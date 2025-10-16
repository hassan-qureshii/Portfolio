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

// ✅ Corrected image imports
import Burger from "../assets/burger.png";
import CaffeineCove from "../assets/caffeinecove.png";
import CloudManagement from "../assets/cloudmanagement.png";
import Form from "../assets/form.png";
import Gym from "../assets/gym.png";
import Microsoft from "../assets/microsoft.png";
import SquidGame from "../assets/squidgame.png";
import YoutubeClone from "../assets/youtubeclone.png";

// Images Array
const Images = [
  {
    img: Burger,
    title: "Burger Website",
    description:
      "This Website is a modern landing page designed for a burger restaurant or fast-food business.",
    link: "https://burger-website-hq.netlify.app/",
  },
  {
    img: CaffeineCove,
    title: "Caffeine Cove",
    description:
      "Caffeine Cove is a sleek café/coffee-place website that delivers a clean and modern user experience.",
    link: "https://caffine-cove.vercel.app/",
  },
  {
    img: CloudManagement,
    title: "Cloud Sphere",
    description:
      "CloudSphere is a modern cloud management web app that simplifies multi-cloud infrastructure monitoring and control.",
    link: "https://cloud-sphere.vercel.app/",
  },
  {
    img: Form,
    title: "Payment method UI",
    description:
      "A responsive payment method UI designed to provide a smooth and user-friendly checkout experience.",
    link: "https://payment-method-ui.netlify.app/",
  },
  {
    img: Gym,
    title: "Gym Website",
    description:
      "This Gym Website is a engaging platform designed to promote fitness services and attract new members.",
    link: "https://gym-website-hq.netlify.app/",
  },
  {
    img: Microsoft,
    title: "Microsoft Website UI",
    description:
      "This website appears to be a cloned version of Microsoft's official site.",
    link: "https://website-9e404.web.app/",
  },
  {
    img: SquidGame,
    title: "Squid Game UI",
    description:
      "This web project immerses visitors in the dramatic thrill of the Squid Game universe.",
    link: "https://squid-game-hq-dkyv.vercel.app/",
  },
  {
    img: YoutubeClone,
    title: "Youtube Clone",
    description: "Video streaming clone project.",
    link: "https://youtube-clone.netlify.app",
  },
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
