import React from 'react'

function PostRecruitment() {
  return (
    <>
    <section className='w-full lg:h-[90vh] mt-[-4px] h-auto object-cover'>
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full flex justify-center items-center bg-no-repeat">
            <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
            <div className="w-11/12 sm:w-full lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
                <h1 className="text-4xl font-bold text-black sm:text-6xl text-center ">The Platform for Voluntary Work</h1>
                <p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-800  font-bold text-center text-sm sm:text-lg">is the heart of the change-maker community and the best resource to discover and connect with change-makers worldwide.</p>
            </div>
            <div className="flex justify-center items-center mt-2/3">
                <a href="/RecruitmentForm" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-[#1400FF] transition duration-150 ease-in-out hover:bg-indigo-600 lg:text-xl lg:font-bold  rounded-full text-white px-4 sm:px-6 border border-indigo-700 py-2 sm:py-3 text-sm">Post Recruitment Now +
                </a>
            </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default PostRecruitment