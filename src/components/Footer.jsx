import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col lg:flex-row items-center justify-evenly text-white gap-3'>
        <div className='text-lg'>Copyright &copy; 2024 DecodeBlock</div>
        <div className='text-xs lg:text-lg flex items-center gap-4'>
            <a href=''>Help Center</a>
            <span>|</span>
            <a href=''>Terms and Conditions</a>
            <span>|</span>
            <a href=''>Privacy Policy</a>
        </div>
    </div>
  )
}

export default Footer