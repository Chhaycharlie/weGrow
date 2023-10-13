import React from 'react'

import WorkImg from '../../assets/home/worktgt.svg'
import ConvenienceImg from '../../assets/home/convenience.svg'
import VarietyImg from '../../assets/home/variety.svg'
import ReliaImg from '../../assets/home/reliability.svg'

const why = () => {
  return (
    <section className='w-full h-auto  bg-gray-50'>
        <div className='container mx-auto mt-10 pt-10 pb-24'>
          <h1 className='flex w-[70%] mx-auto justify-center text-5xl font-extrabold text-center'>Why people choose weGrow to find volunteer work</h1>
            <div className="grid grid-cols-3 lg:grid-cols-4 md:grid-template-columns-3 gap-4 place-items-center mt-20 pl-[26%] lg:pl-0 ">
              {/* left side  */}
              <div className="col-span-2">
                <img src={WorkImg} width={400} alt="Why people choose weGrow to find volunteer work" />
              </div>
              {/* right side  */}
              <div className='col-span-2 lg:mr-24 bg-red-300'>
                <div className="col-span-1 lg:pb-16 pb-4 flex items-start">              
                  <img src={ConvenienceImg} alt="convenience" />
                  <div>
                    <h1 className='text-base lg:text-lg ml-4'>Convenience</h1>
                    <p className='text-sm lg:text-base  ml-4'>is a convenient way to find volunteer opportunities. Users can search for opportunities at any time and from any location.</p>
                  </div>
                </div>

                <div className="col-span-1 lg:pb-16 pb-4 flex items-start">              
                  <img src={VarietyImg} alt="variety" />
                  <div>
                    <h1 className='text-base lg:text-lg ml-4'>Variety</h1>
                    <p className='text-sm lg:text-base  ml-4'>offers a wide variety of volunteer opportunities, so users can find the perfect opportunity for their interests and skills.</p>
                  </div>
                </div>

                <div className="col-span-1 flex items-start">              
                  <img src={ReliaImg} alt="reliability" />
                  <div>
                    <h1 className='text-base lg:text-lg ml-4'>Reliability</h1>
                    <p className='text-sm lg:text-base ml-4'>is a reliable source of volunteer opportunities. All organizations listed on the website have been vetted to ensure that they are legitimate and trustworthy.</p>
                  </div>
                </div>
              </div>
          </div>
        </div>
    </section>
  )
}

export default why