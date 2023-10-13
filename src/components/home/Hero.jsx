import React from 'react'
import '../../App.css'

const Hero = () => {
  return (
    <section className='w-full lg:h-[90vh] mt-[-4px] h-[60vh] '>
        <div className="bg-gray-100 h-full flex justify-center items-center bg-img ">
            <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
            <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-800 font-black leading-7 md:leading-10 ">
                    Volunteer&nbsp;now, Reap the&nbsp; 
                </h1>
                <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-800 font-black leading-7 md:leading-10'><span className="text-[#1400FF]">rewards&nbsp;</span>
                    tomorrow.
                </h1>
                <p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-800  font-bold text-center text-sm sm:text-lg">WeGrow is a free and easy-to-use platform that connects users with volunteer</p>
                <p className="lg:w-10/12 text-gray-800 font-bold text-center text-sm sm:text-lg">opportunities in their area and organizations with potential volunteers.</p>
            </div>
            <div className="flex justify-center items-center">
                <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-[#1400FF] transition duration-150 ease-in-out hover:bg-indigo-600 lg:text-xl lg:font-bold  rounded text-white px-4 sm:px-10 border border-indigo-700 py-2 sm:py-4 text-sm">Get Started</button>
                <button className="ml-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-transparent transition duration-150 ease-in-out hover:border-indigo-600 lg:text-xl lg:font-bold  hover:text-indigo-600 rounded border border-[#1400FF]  text-[#1400FF] px-4 sm:px-10 py-2 sm:py-4 text-sm">See more</button>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Hero