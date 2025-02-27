import React, { useState } from 'react'
import Button from './ui/Button';
import logo from '../assets/decode_logo.png'
import bar from '../assets/bar.png'
import { HiMenuAlt3 } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";
import { mobileMenuItems } from '../constants';
import {motion, AnimatePresence} from 'framer-motion'

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

return (
<> 
    <div className="fixed z-50 h-16 flex items-center justify-between px-5 lg:px-20 w-full bg-black font-customFont1">
        <img src={logo} alt="logo" className="ml-[-10px] w-44 h-11 lg:w-56 lg:h-10" />
        <Button title="Sign In" className="hidden lg:flex h-[53px] w-[153px]" />
        <HiMenuAlt3 onClick={toggleMenu} className={isOpen ? "hidden" : "lg:hidden text-white w-8 h-8 cursor-pointer"} />
        <IoCloseSharp onClick={toggleMenu} className={!isOpen ? "hidden" : "lg:hidden text-white w-8 h-8 cursor-pointer"} />
    </div>
    <div className='flex items-center justify-center'>
    <img src={bar} alt="" />
    </div>

    {isOpen && (
    <AnimatePresence>
        <motion.div 
            initial={{ y: "-100%", opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            exit={{ y: "-100%", opacity: 0 }} 
            transition={{ duration: 0.5, ease: "easeInOut" }} 
            className="fixed inset-0 top-[60px] flex flex-col gap-3 items-center justify-center bg-gradient-to-br from-[#100f13] via-[#150f19] to-[#352436] h-[calc(100vh-60px)] w-full z-50 font-customFont1"
        >
            {mobileMenuItems.map((item, index) => (
                <Button 
                    key={index} 
                    title={item.title} 
                    className="h-[75px] w-[250px]" 
                />
            ))}
        </motion.div>
    </AnimatePresence>
)}
</>
)
}

export default Header;