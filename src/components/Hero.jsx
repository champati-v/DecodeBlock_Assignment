import React from "react";
import Header from "./Header";
import { mobileMenuItems } from "../constants";
import Button from "./ui/Button";
import India from "../assets/India.svg";
import singular from '../assets/singularity.png'
import ScrollingDiv from "./ScrollingDiv";
import scroll5 from '../assets/scroll5.png'
import Footer from "./Footer";
import VideoPlayer from "./VideoPlayer";

const Hero = () => {
  return (
    <div className="min-h-screen w-full bg-cover bg-center bg-no-repeat bg-gradient-to-br from-[#100f13] via-[#150f19] to-[#352436]">
      <Header />

      {/* desktop  */}
      <div className="mt-[90px] hidden lg:flex justify-center items-center gap-5">
        {/* Logo on the left */}
        <div className="flex items-center gap-1">
          <img src={India} alt="India Logo" />
          <h1 className="uppercase text-white text-xl tracking-wide">HackIndia</h1>
        </div>

        {/* Center Block */}
        <div className="flex items-center">
          <div className="hidden lg:flex items-center justify-center bg-[#28083A] border border-purple-900 px-1 py-2 rounded-md">
            {mobileMenuItems.map((item, id) => (
              <Button
                key={id}
                title={item.title}
                className="text-[12px] w-[170px] h-[50px]"
              />
            ))}
          </div>
        </div>
      </div>

       {/* mobile */}
       <div className="lg:hidden mt-28 flex items-center justify-center">
        <div className="flex items-center gap-1 ml-4">
            <img src={India} alt="India Logo" />
            <h1 className="uppercase text-white text-2xl">HackIndia</h1>
        </div>
      </div>
      
      {/* content  */}
      <div className="mt-5 mb-10 lg:mt-5 w-7xl flex flex-col items-center justify-center gap-5">
            <img src={singular} alt="" />
            <h1 className="text-5xl lg:text-7xl font-semibold text-white"><span className="bg-orange-500 p-1 rounded-sm">Ha</span>ckIndia2025</h1>
            <p className="text-lg lg:text-2xl text-white font-semibold tracking-wider">India's Biggest Web3 & AI Hackathon</p>

            <button className="bg-gradient-to-tr from-[#6A1799] to-[#230833] hover:bg-gradient-to-tl transition-all duration-300 px-4 py-2 text-white rounded-md border border-purple-900">February 28 - September 28</button>

            <div className="text-white flex text-sm font-semibold lg:text-2xl gap-2 lg:gap-4">
              <h1><span className="text-orange-600">$150+</span> Prize Pool</h1>
              <h1>|</h1>
              <h1><span className="text-orange-600"> 150+ </span> University</h1>
              <h1>|</h1>
              <h1><span className="text-orange-600"> 25,000+ </span> Students</h1>
            </div>

           <Button title={'Register Now'} className={'w-[180px] h-[60px]'} />
      </div>
      
      {/* scrolling icons  */}
      <ScrollingDiv/>

      {/* video section  */}
      <VideoPlayer/>

      {/* icons */}
      <div className="px-1 flex items-center justify-center bg-white">
        <img src={scroll5} alt="" />
      </div>

      {/* footer  */}
      <div className="pt-8 lg:pt-16 pb-5">
        <Footer/>
      </div>

    </div>
  );
};

export default Hero;
