import React from 'react'
import { HiArrowNarrowDown } from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f] '>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6fc]'>Shahan Ahmad</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Full Stack Developer.</h2>
        <p className='text-[#ccd6fc] py-4 max-w-[700px]'>I'm a full-stack developer specialized in building (and occasionally designing) 
          exceptional digital experiences. Currently I'm focused on building responsive full-stack web applications.</p>
        <div className="flex justify-centre gap-2 items-center">
          <button className='text-white group border-2 px-6 py-3 my-2 hover:bg-pink-600 hover:border-pink-600'>
            <Link to='work' smooth={true} duration={500}>
              View Work <HiArrowNarrowDown className='ml-3'/>
            </Link>
          </button>
          <div className='text-white group border-2 px-6 py-3 my-2 hover:bg-pink-600 hover:border-pink-600'>
            <a href='https://drive.google.com/file/d/1vZUp_3EGhhyKoZudt57nJxynMSMbd79s/view?usp=drive_link' target="_blank" rel="noopener noreferrer">Resume <span><BsFillPersonLinesFill /></span></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
