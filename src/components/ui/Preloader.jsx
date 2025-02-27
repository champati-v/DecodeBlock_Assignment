import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import India from "../../assets/India.svg";
import logo from "../../assets/decode_logo.png";

const Preloader = ({ setLoading }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
      setTimeout(() => setLoading(false), 3000);
    }, 3000);
  }, [setLoading]);

  return (
    <AnimatePresence>
  {visible && (
    <motion.div
      className="fixed top-0 left-0 w-full h-full bg-black flex flex-col items-center justify-center z-50"
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <motion.div className="flex flex-col items-center justify-center">
        <motion.img
          src={logo}
          alt="Decode Logo"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        />

        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 1 }}
          className="text-white text-xl font-bold font-customFont1"
        >
          Presents
        </motion.h1>
      </motion.div>

      <motion.div className="flex items-center mt-4">
        <motion.img
          src={India}
          alt="India Logo"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 2 }}
        />

        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 2 }}
          className="text-white text-3xl lg:text-5xl font-bold font-customFont1 ml-2"
        >
          HackIndia
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 2 }}
          className="text-white text-3xl lg:text-5xl font-bold ml-2 font-customFont1"
        >
          2025
        </motion.h1>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

  );
};

export default Preloader;
