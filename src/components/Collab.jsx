import React from 'react';
import TELEGRAM from '../assets/Telegram.png';
import GMAIL from '../assets/Gmail.png';
import WHATSAPP from '../assets/Whatsapp.png';

const Collab = () => {    
    return (
        <div name="contact" className='w-full h-full p-6 flex flex-col bg-[#0a192f] md:py-6'>  
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full text-gray-300'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Contact</p>
                    <p className='py-4'>Shoot me an Email - onedevshahan@gmail.com</p>
                </div>
                
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center cursor-pointer py-6'>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <a href="mailto:onedevshahan@gmail.com"><img className='w-20 mx-auto' src={GMAIL} alt='GMAIL icon' /></a>
                        <p className='my-4'>Email</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <a href="https://wa.me/8299829048?text=Hello%20there!"><img className='w-20 mx-auto' src={WHATSAPP} alt='WHATSAPP icon' /></a>
                        <p className='my-4'>Whatsapp</p>
                    </div>   
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <a href="https://t.me/onedevshahan"><img className='w-20 mx-auto' src={TELEGRAM} alt='TELEGRAM icon' /></a>
                        <p className='my-4'>Telegram</p>
                    </div>           
                </div>
            </div>
        </div>
    )
}
export default Collab
