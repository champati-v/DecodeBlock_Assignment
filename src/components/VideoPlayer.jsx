import React from 'react';
import ReactPlayer from 'react-player';
import light from '../assets/light.png';
import { motion } from 'framer-motion';

const fadeLeft = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const fadeRight = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const VideoPlayer = () => {
  return (
    <motion.div 
      className="relative w-full flex flex-col-reverse lg:flex-row items-center justify-evenly py-16 tracking-wider"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div className="text-white font-customFont1" variants={fadeRight}>
        <img src={light} alt="" className="absolute left-0 top-3 lg:top-10" />
        <h1 className="mt-4 lg:mt-0 text-4xl lg:text-6xl font-semibold" style={{ textShadow: '2px 2px 4px #fff' }}>150+</h1>
        <span className="text-xl lg:text-2xl" style={{ textShadow: '2px 2px 4px #fff' }}>Universities Participating</span>

        <div className="mt-6 flex gap-8">
          <div>
            <h1 className="text-3xl lg:text-5xl">72+</h1>
            <span className="text-md lg:text-2xl">Judges</span>
          </div>
          <div>
            <h1 className="text-3xl lg:text-5xl">21</h1>
            <span className="text-md lg:text-2xl">Hackathons</span>
          </div>
          <div>
            <h1 className="text-3xl lg:text-5xl">36+</h1>
            <span className="text-md lg:text-2xl">Great Speakers</span>
          </div>
        </div>
      </motion.div>
      
      <motion.div 
        className='mt-8 lg:mt-0 flex items-center justify-center max-w-sm lg:max-w-full' 
        variants={fadeLeft}
      >
        <ReactPlayer url='https://www.youtube.com/watch?v=gi1kkMbfNAE' /> 
      </motion.div>
    </motion.div>
  );
};

export default VideoPlayer;