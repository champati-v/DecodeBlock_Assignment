import React from 'react'
import ReactPlayer from 'react-player'
import light from '../assets/light.png'

const VideoPlayer = () => {
  return (
    <>
   {/* video player -*/}
   <div className="relative w-full flex flex-col-reverse lg:flex-row items-center justify-evenly py-16 tracking-wider">
   <div className="text-white font-customFont1">
     <img src={light} alt="" className="absolute left-0 top-3 lg:top-10" />
     <h1 className="mt-4 lg:mt-0 text-4xl lg:text-6xl font-semibold " style={{ textShadow: '2px 2px 4px #fff' }}>150+</h1>
     <span className="text-xl lg:text-2xl" style={{ textShadow: '2px 2px 4px #fff' }}>Universities Participating</span>

      <div className="mt-6 flex gap-8 ">
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
   </div>
   <div className='mt-8 lg:mt-0 flex items-center justify-center max-w-sm lg:max-w-full'>
        <ReactPlayer url='https://www.youtube.com/watch?v=gi1kkMbfNAE' /> 
   </div>
 </div>
 </>
  )
}

export default VideoPlayer