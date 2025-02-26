import React, { useState } from 'react'
import Button from './Button';
import logo from '../assets/decode_logo.png'
import bar from '../assets/bar.png'
import { HiMenuAlt3 } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";
import { mobileMenuItems } from '../constants';


const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

return (
<> 
    <div className="h-16 flex items-center justify-between px-5 lg:px-20 w-full bg-black">
        <img src={logo} alt="logo" className="ml-[-10px] w-44 h-11 lg:w-56 lg:h-10" />
        <Button title="Sign In" className="hidden lg:flex h-[53px] w-[153px]" />
        <HiMenuAlt3 onClick={toggleMenu} className={isOpen ? "hidden" : "lg:hidden text-white w-8 h-8 cursor-pointer"} />
        <IoCloseSharp onClick={toggleMenu} className={!isOpen ? "hidden" : "lg:hidden text-white w-8 h-8 cursor-pointer"} />
    </div>
    <div className='flex items-center justify-center'>
    <img src={bar} alt="" />
    </div>

    {isOpen && (
        <div className="relative flex flex-col gap-3 items-center justify-center bg-gradient-to-tr from-black to-purple-950 h-[80vh] w-4xl">
            {mobileMenuItems.map((item, index) => (
                <Button key={index} title={item.title} className={'h-[65px] w-[230px]'} />
            ))}
        </div>
    )}
</>
)
}

export default Header;