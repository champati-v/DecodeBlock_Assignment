import React from 'react'
import { mobileMenuItems } from '../constants'
import Button from './ui/Button'
import { motion } from "framer-motion";

const menuVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const DesktopNav = () => {
  return (
    <div className="flex items-center font-customFont1">
    <motion.div
      className="hidden lg:flex items-center justify-center bg-[#28083A] border border-purple-900 px-1 py-2 rounded-md"
      initial="hidden"
      animate="visible"
      variants={menuVariants}
    >
      {mobileMenuItems.map((item, id) => (
        <Button
          key={id}
          title={item.title}
          className="text-[12px] w-[170px] h-[50px]"
        />
      ))}
    </motion.div>
  </div>
  )
}

export default DesktopNav