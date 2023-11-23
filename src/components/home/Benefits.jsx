import React from 'react'

const Benefits = () => {
  return (
    <section className='h-auto w-full bg-white'>
        <div className='container mx-auto py-20'>
          <h1 className='flex w-[70%] mx-auto justify-center md:text-5xl text-4xl font-extrabold text-center pb-10'>Benefits You will Get</h1>
          <div className='flex flex-wrap items-start justify-evenly w-full'>
            <div className='w-[300px] h-auto pb-10 lg:w-[400px] lg:h-[400px] bg-gray-300 px-[62px] my-10 rounded-lg'>
              <h1 className='pt-10 pb-6 text-xl lg:text-2xl font-extrabold'>Volunteer :</h1>
                <ul className='list-disc list-outside text-lg lg:text-xl'>
                  <li className='py-2'>Find volunteer opportunities that match your skills.</li>
                  <li className='py-2'>Connect with organizations that are doing important work in your community.</li>
                  <li className='pt-2'>Learn about the benefits of volunteering.</li>
                </ul>
            </div>
            <div className='w-[300px] h-auto pb-10 lg:w-[400px] lg:h-[400px] bg-gray-300 px-[62px] my-10 rounded-lg'>
              <h1 className='pt-10 pb-6 text-xl lg:text-2xl font-extrabold'>Organizations :</h1>
                <ul className='list-disc list-outside text-lg lg:text-xl'>
                  <li className='py-2'>Reach a wider pool of potential volunteers.</li>
                  <li className='py-2'>Save time and resources by posting volunteer opportunities online.</li>
                  <li className='pt-2'>Build a strong volunteer base.</li>
                </ul>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Benefits