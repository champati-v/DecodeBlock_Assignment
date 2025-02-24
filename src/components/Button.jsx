import React from 'react'
import buttonBg from '../assets/buttonBg.png'
import buttonBgHover from '../assets/buttonBgHover.png'

const Button = ({title, className}) => {
return (
    <div
        className={`lg:h-[53px] lg:w-[153px] h-[65px] w-[230px] flex items-center justify-center bg-cover bg-center transition-all duration-300 cursor-pointer ${className}`}
        style={{
            backgroundImage: `url(${buttonBg})`,
            backgroundSize: '80%', // Reduce the size of the background image
            backgroundRepeat: 'no-repeat',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundImage = `url(${buttonBgHover})`)}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundImage = `url(${buttonBg})`)}
    >
        <span className='text-white'>{title}</span>
    </div>
)
}

export default Button