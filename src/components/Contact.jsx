import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen  bg-[#0a192f] flex justify-center items-center p-80'>
        {/* Get the form action link from app.getform.io which is free*/}
      <form method='Post' action='https://getform.io/f/714db78f-6ae6-44ff-8a62-d1e6d00d5dbf' className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600  text-gray-300'>Contact</p>
            <p className='text-gray-300 py-4'>Submit the form below or shoot me an Email - shahan.work@gmail.com</p>
        </div>
        
        <input className='bg-[#ccd6f6] p-2' type='text' placeholder='Name' name='name'/>
        <input className='bg-[#ccd6f6] my-4 p-2' type='text' placeholder='Email' name='email'/>
        <textarea className='bg-[#ccd6f6] p-2' placeholder='Message' name='message' rows={10}/>
        <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
      </form>
    </div>
  )
}

export default Contact
