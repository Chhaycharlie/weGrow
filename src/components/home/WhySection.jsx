import React from 'react'

import WorkImg from '../../assets/home/worktgt.svg'
import ConvenienceImg from '../../assets/home/convenience.svg'

const why = () => {
  return (
    <section className='w-full h-auto lg:h-screen bg-gray-50'>
        <div className='container mx-auto mt-10 pt-10'>
          <h1 className='flex w-[70%] mx-auto justify-center text-5xl font-extrabold text-center'>Why people choose weGrow to find volunteer work</h1>
          <div className="grid grid-cols-3 lg:grid-cols-4 md:grid-template-columns-3 gap-4 place-items-center mt-20 pl-[26%] lg:pl-0">
            <div className="col-span-2">
              <img src={WorkImg} width={400} alt="Why people choose weGrow to find volunteer work" />
            </div>
            <div className='col-span-2'>
              <div className="col-span-1 lg:pb-20 pb-4">
                <h3>Convenience</h3>
                <p>is a convenient way to find volunteer opportunities. Users can search for opportunities at any time and from any location.</p>
              </div>
              <div className="col-span-1 lg:pb-20 pb-4">
                <h3>Variety</h3>
                <p>offers a wide variety of volunteer opportunities, so users can find the perfect opportunity for their interests and skills.</p>
              </div>
              <div className="col-span-1">
                <h3>Reliability</h3>
                <p>is a reliable source of volunteer opportunities. All organizations listed on the website have been vetted to ensure that they are legitimate and trustworthy.</p>
              </div>
            </div>
        </div>
        </div>
    </section>
  )
}

export default why