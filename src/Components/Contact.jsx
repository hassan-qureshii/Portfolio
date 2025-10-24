import React, { useState } from "react";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";
import { WhatsApp, Send, Person, Email, Message } from "@mui/icons-material";

const Contact = () => {
  const whatsappNumber = "923068868886"; // your WhatsApp number (without +)
  const mailLink =
    "mailto:hassanqureshi8886@gmail.com?subject=Let's%20Work%20Together&body=Hi%20Hassan,";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (!name || !email || !message) {
      alert("⚠️ Please fill out all fields");
      return;
    }

    const whatsappText = `Hello Hassan! 👋%0A%0AYou have a new message:%0A%0A🧑 Name: ${encodeURIComponent(
      name
    )}%0A📩 Email: ${encodeURIComponent(
      email
    )}%0A💬 Message: ${encodeURIComponent(message)}`;

    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappText}`;
    window.open(whatsappLink, "_blank");

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div
      id="contact"
      className="px-6 md:px-16 py-20 flex flex-col items-center text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-2xl md:text-3xl font-bold text-heading mb-4 text-center"
      >
        Let’s Work Together
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="max-w-2xl text-para text-lg leading-relaxed mb-10 text-center"
      >
        I’m open to freelance projects, creative collaborations, and exciting full-time
        roles. Got an idea, a challenge, or just want to say hi? Let’s make something
        amazing together!
      </motion.p>

      <div className="grid md:grid-cols-2 gap-10 w-full max-w-5xl">
        <div className="space-y-6 flex flex-col items-center justify-center text-center md:justify-center h-full">
          <motion.a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact via WhatsApp"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-4 p-4 border-b border-gray-600 rounded-lg transition-all duration-300 hover:border-[#21C063]"
          >
            <WhatsApp className="text-[#21C063] text-4xl" />
            <div className="flex flex-col items-center">
              <span className="text-lg text-[#21C063] font-semibold hover:underline">
                +92 306 8868886
              </span>
              <p className="text-gray-400 text-sm">Chat instantly on WhatsApp</p>
            </div>
          </motion.a>

          <motion.a
            href={mailLink}
            aria-label="Send email to Hassan"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-4 p-4 border-b border-gray-600 rounded-lg transition-all duration-300 hover:border-[#1C398E]"
          >
            <Mail className="text-[#1C398E] text-4xl" />
            <div className="flex flex-col items-center">
              <span className="text-lg font-semibold hover:underline text-heading">
                hassanqureshi8886@gmail.com
              </span>
              <p className="text-gray-400 text-sm">Send me a detailed message</p>
            </div>
          </motion.a>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col gap-5 w-full"
        >
          {/* Name */}
          <div className="flex flex-col gap-2 relative">
            <label className="text-sm font-semibold text-heading text-left">Name</label>
            <div className="relative">
              <Person className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="p-3 pl-10 border-b border-gray-800 rounded-xl text-para focus:outline-none w-full"
              />
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2 relative">
            <label className="text-sm font-semibold text-heading text-left">Email</label>
            <div className="relative">
              <Email className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="p-3 pl-10 border-b border-gray-800 rounded-xl text-para focus:outline-none w-full"
              />
            </div>
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2 relative">
            <label className="text-sm font-semibold text-heading text-left">Message</label>
            <div className="relative">
              <Message className="absolute left-3 top-3 text-gray-400" />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                required
                rows="3"
                className="p-3 pl-10 border-b border-gray-800 rounded-xl text-para focus:outline-none w-full"
              ></textarea>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              aria-label="Send message"
              className="flex items-center justify-center bg-heading hover:bg-para text-white p-3 rounded-full transition-all duration-300 shadow-md"
            >
              <Send />
            </button>
          </div>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
