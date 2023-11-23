import React from 'react'

import AffordImg from '../../assets/home/affordability.svg'
import EasyImg from '../../assets/home/easy_to_use.svg'
import FlexImg from '../../assets/home/flexibility.svg'
import OpporImg from '../../assets/home/opportunities.svg'

const WhyOrganization = () => {
  return (
    <section className='w-full h-auto bg-gray-50'>
        <div className='container mx-auto py-20'>
          <h1 className='flex w-[70%] mx-auto justify-center md:text-5xl text-3xl font-extrabold text-center'>Why organization choose weGrow to post volunteer opportunities</h1>
          <div className="grid grid-cols-3 lg:grid-cols-4 md:grid-template-columns-3 gap-4 md:place-items-center mt-10 pl-[26%] lg:pl-[10%] ">
              {/* left side  */}
              <div className='col-span-2'>
                <div className="col-span-1 lg:pb-16 flex items-start lg:pt-12 pb-6">              
                  <img src={EasyImg} alt="easy_to_use" />
                  <div>
                    <h1 className='text-2xl ml-4 pb-2 font-medium'>Ease of use</h1>
                    <p className='text-base  ml-4'>is easy to use for organizations to post volunteer opportunities. Organizations can create an account and post opportunities in minutes.</p>
                  </div>
                </div>

                <div className="col-span-1 lg:pb-16 pb-6 flex items-start">              
                  <img src={FlexImg} alt="flexibilities" />
                  <div>
                    <h1 className='text-2xl ml-4 pb-2 font-medium'>Flexibility</h1>
                    <p className='text-base  ml-4'>Your website offers organizations a flexible way to post volunteer opportunities. Organizations can post opportunities for specific dates and times, or they can post ongoing opportunities.</p>
                  </div>
                </div>

                <div className="col-span-1 flex items-start">              
                  <img src={AffordImg} alt="affordability" />
                  <div>
                    <h1 className='text-2xl ml-4 pb-2 font-medium'>Affordability</h1>
                    <p className='text-base ml-4'>Your website is affordable for organizations to use. Organizations can post volunteer opportunities for free, or they can choose to pay for a premium listing.</p>
                  </div>
                </div>
              </div>
              
              {/* right side  */}
              <div className="col-span-2 lg:ml-12 lg:mr-16 mt-10">
                <img src={OpporImg} width={350} alt="Why people choose weGrow to find volunteer work" />
              </div>
          </div>
        </div>
    </section>
  )
}

export default WhyOrganization