import React from 'react'

const Collab = () => {
    return (
        <div className='w-full h-full p-6 flex flex-col bg-[#0a192f] md:py-6'>            
            <div className='max-w-[1000px] mx-auto p-4  flex flex-col justify-center w-full h-full'>                         
                <div className='pb-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600  text-gray-300'>Contact</p>
                    <p className='text-gray-300 py-4'>Submit the form below or shoot me an Email - onedevshahan@gmail.com</p>
                </div>                
            </div>   
            <section className="max-w-[1000px] mx-auto p-4  flex flex-col justify-center w-full h-full">
                <form>
                    <p className='text-left text-xl mb-1 text-gray-300'>Name</p>
                    <div className="relative mb-5">
                        <input
                            type="text"
                            className="w-full border bg-transparent py-[0.5rem] px-10 transition-all duration-200 ease-linear dark:text-neutral-200"
                            id="name"
                            placeholder='Name'
                        />
                    </div>
                    <p className='text-left text-xl mb-1 text-gray-300'>Email</p>
                    <div className="relative mb-5">
                        <input
                            type="email"
                            className="w-full border bg-transparent py-[0.5rem] px-10 transition-all duration-200 ease-linear dark:text-neutral-200"
                            id="email"
                            placeholder="Email address"
                        />
                    </div>
                    <p className='text-left text-xl mb-1 text-gray-300'>Message</p>
                    <div className="relative mb-5">
                        <textarea
                            className="w-full border bg-transparent py-[0.5rem] px-10 transition-all duration-200 ease-linear dark:text-neutral-200"
                            id="message"
                            rows="8"
                            placeholder="Your message"
                        /> 
                    </div>
                    <button
                        type="submit"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                        className="w-full border hover:border-0 hover:bg-pink-600 bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white">
                        Send
                    </button>
                </form>
            </section>
        </div>
    )
}
export default Collab
