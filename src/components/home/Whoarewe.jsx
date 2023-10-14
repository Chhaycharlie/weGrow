import React from 'react'

import TeamworkImg from '../../assets/home/teamwork.svg'
import VolunteerImg from '../../assets/home/volunteer.svg'
import RecruitImg from '../../assets/home/recruit.svg'



const Whoarewe = () => {
  return (
    <section className='w-full h-auto flex justify-center bg-white'> 
        <div className='w-3/4'>
            {/* Who are we */}
            <div class="mx-auto grid max-w-4xl grid-cols-12 gap-4 bg-zinc-50 p-1 mt-10 lg:mt-4 w-full h-auto">
                <div class="col-span-12 pt-8">
                    <h1 className='text-5xl font-extrabold flex justify-center sm:justify-normal'>Who are we?</h1>
                </div>
                <div class="col-span-12 rounded-lg sm:col-span-8 lg:pt-10 text-sm sm:text-base lg:text-lg lg:pr-16">
                    <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We are university students. We want to help young people develop the skills and confidence they need to become leaders in their communities and the world. <br />
                        We hope that our website will be a resource for young people who are interested in becoming leaders, facing problems head-on, and loving to volunteer. We are here to support you on your journey!
                    </p>
                </div>
                <div class="col-span-9 rounded-lg sm:mx-0 sm:col-span-4 ml-20 sm:ml-0">
                    <img src={TeamworkImg} alt="volunteer teamwork" />
                </div>

                <div class="col-span-12 rounded-lg  sm:col-span-6 object-cover">
                    <img src={VolunteerImg} alt="volunteer work" />
                </div>
                <div class="col-span-12 rounded-lg sm:col-span-6">
                    <img src={RecruitImg} alt="recruit" />
                </div>  
            </div>
        </div>
    </section>
  )
}

export default Whoarewe