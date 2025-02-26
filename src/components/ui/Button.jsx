import React from 'react'
import buttonBg from '../../assets/ButtonBg.png'
import buttonBgHover from '../../assets/buttonBgHover.png'

const Button = ({title, className}) => {
return (
    <div
        className={`flex items-center justify-center bg-cover bg-center transition-all duration-300 cursor-pointer ${className}`}
        style={{
            backgroundImage: `url(${buttonBg})`,
            backgroundSize: '80%',
            backgroundRepeat: 'no-repeat',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundImage = `url(${buttonBgHover})`)}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundImage = `url(${buttonBg})`)}
    >
        <span className='text-white text-center'>{title}</span>
    </div>
)
}

export default Button