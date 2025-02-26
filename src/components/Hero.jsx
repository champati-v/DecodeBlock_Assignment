import React from "react";
import Header from "./Header";
import Button from "./ui/Button";
import India from "../assets/India.svg";
import singular from '../assets/singularity.png'
import ScrollingDiv from "./ScrollingDiv";
import scroll5 from '../assets/scroll5.png' 
import Footer from "./Footer";
import VideoPlayer from "./VideoPlayer";
import DesktopNav from "./DesktopNav";
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const scaleOnHover = {
  whileHover: { scale: 1.1, transition: { duration: 0.3 } },
};

const Hero = () => {
  return (
    <motion.div 
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat bg-gradient-to-br from-[#100f13] via-[#150f19] to-[#352436]"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Header />

      {/* desktop */}
      <motion.div 
        className="mt-[90px] hidden lg:flex justify-center items-center gap-5"
        variants={fadeUp}
      >
        {/* Logo on the left */}
        <motion.div className="flex items-center gap-1" variants={fadeLeft}>
          <img src={India} alt="India Logo" />
          <h1 className="uppercase text-white text-xl tracking-wide font-customFont1">HackIndia</h1>
        </motion.div>
        <DesktopNav/>
      </motion.div>

      {/* mobile */}
      <motion.div className="lg:hidden mt-28 flex items-center justify-center font-customFont1" variants={fadeUp}>
        <div className="flex items-center gap-1 ml-4">
            <img src={India} alt="India Logo" />
            <h1 className="uppercase text-white text-2xl">HackIndia</h1>
        </div>
      </motion.div>
      
      {/* content */}
      <motion.div className="mt-5 mb-10 lg:mt-5 w-7xl flex flex-col items-center justify-center gap-5" variants={fadeUp}>
        <motion.img src={singular} alt="" variants={fadeRight} />
        <motion.h1 className="text-[40px] lg:text-7xl tracking-wider text-white font-customFont1" variants={fadeUp}>
          <span className="bg-orange-500 p-1 rounded-sm">Ha</span>ckIndia2025
        </motion.h1>
        <motion.p className="text-lg lg:text-2xl text-white tracking-wider font-customFont2" variants={fadeLeft}>
          India's Biggest Web3 & AI Hackathon
        </motion.p>
        <motion.button 
          className="bg-gradient-to-tr from-[#6A1799] to-[#230833] font-customFont2 hover:bg-gradient-to-tl transition-all duration-300 px-4 py-2 text-white rounded-md border border-purple-900"
          variants={fadeRight}
          whileHover={scaleOnHover.whileHover}
        >
          February 28 - September 28
        </motion.button>
        <motion.div className="text-white flex text-sm lg:text-2xl gap-2 lg:gap-4 font-customFont2" variants={fadeUp}>
          <h1><span className="text-orange-600">$150+</span> Prize Pool</h1>
          <h1>|</h1>
          <h1><span className="text-orange-600"> 150+ </span> University</h1>
          <h1>|</h1>
          <h1><span className="text-orange-600"> 25,000+ </span> Students</h1>
        </motion.div>
        <motion.div variants={fadeRight} whileHover={scaleOnHover.whileHover}>
          <Button title={'Register Now'} className={'w-[180px] h-[60px] font-customFont2'} />
        </motion.div>
      </motion.div>
      
      {/* scrolling icons */}
      <ScrollingDiv/>

      {/* video section */}
      <VideoPlayer/>

      {/* icons */}
      <motion.div className="px-1 flex items-center justify-center bg-white" variants={fadeUp}>
        <img src={scroll5} alt="" />
      </motion.div>

      {/* footer */}
      <motion.div className="pt-8 lg:pt-16 pb-5" variants={fadeUp}>
        <Footer/>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
