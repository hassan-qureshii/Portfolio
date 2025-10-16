import React from "react";
import { Mail, Send } from "lucide-react";
import { motion } from "framer-motion";
import { WhatsApp } from "@mui/icons-material";

const Contact = () => {
  const whatsappLink =
    "https://wa.me/923068868886?text=Hello%20Hassan!%20I%20would%20like%20to%20get%20in%20touch.";
  const mailLink =
    "mailto:hassanqureshi8886@gmail.com?subject=Let's%20Work%20Together&body=Hi%20Hassan,";

  return (
  <div>
   <motion.h1
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.6, ease: "easeOut" }}
           viewport={{ once: true }}
           className="text-2xl font-black font-sans text-heading ml-5"
         >
           Contact
         </motion.h1>
    <section className="py-20 px-6 md:px-16 flex flex-col items-center text-center">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-2xl md:text-3xl font-bold text-heading mb-6"
      >
        Let’s Work Together
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="max-w-2xl text-para text-lg leading-relaxed mb-10"
      >
        I’m open to freelance projects, creative collaborations, and exciting full-time roles.
Got an idea, a challenge, or just want to say hi? Let’s make something amazing together!
      </motion.p>

      {/* Contact Cards */}
      <div className="grid md:grid-cols-2 gap-6 w-full max-w-2xl">
        {/* WhatsApp */}
        <motion.a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center justify-center p-6 border-b md:border-r border-gray-700 rounded-2xl shadow-lg hover:shadow-[#21C063] hover:border-[#21C063] bg-[#2A394E] transition-all duration-300"
        >
          <WhatsApp className="text-[#21C063] text-5xl mb-3" />
          <span className="text-xl text-[#21C063] font-semibold hover:underline">
            +92 306 8868886
          </span>
          <p className="text-gray-400  mt-2">Chat instantly on WhatsApp</p>
        </motion.a>

        {/* Email */}
        <motion.a
          href={mailLink}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center justify-center p-6 border-b border-gray-700 rounded-2xl shadow-lg hover:shadow-[#1C398E] hover:border-[#1C398E] bg-[#2A394E] transition-all duration-300"
        >
          <Mail className="text-[#1C398E] text-5xl mb-3" />
          <span className="text-xl font-semibold hover:underline text-heading">
            hassanqureshi8886@gmail.com
          </span>
          <p className="text-gray-400 mt-2">Send me a detailed message</p>
        </motion.a>
      </div>
    </section>
  </div>
  );
};

export default Contact;