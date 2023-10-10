import React from 'react'
import '../App.css'

import XIcon from '../assets/icons/x.svg'
import InstaIcon from '../assets/icons/instagram.svg'
import FaceIcon from '../assets/icons/facebook.svg'
import TeleIcon from '../assets/icons/telegram.svg'
import LinkedIcon from '../assets/icons/linkedin.svg'

const Footer = () => {
  const currYear = new Date().getFullYear();

  return (
    <footer className='flex flex-col items-center w-full bg-gradient-to-b from-gray-400  to-blue-300'>

        {/* first line footer */}
        <div className='flex flex-row  flex-wrap justify-between w-full items-center pt-10'>
            <h1 className='customfont text-4xl flex justify-center md:pl-10 w-full lg:w-auto'>WeGrow</h1>
            {/* footer menu */}
            <div className="flex flex-row flex-wrap pt-5 mx-auto lg:mx-0 lg:mr-16 lg:pt-2 items-center lg:justify-center gap-y-6 gap-x-12 text-center text-lg md:justify-between">
                <ul className="flex flex-wrap items-center justify-center gap-y-2 gap-x-8">
                  <li>
                    <a
                      href="#"
                      color="blue-gray"
                      className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      color="blue-gray"
                      className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                    >
                      Workshop
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      color="blue-gray"
                      className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                    >
                      Opportunity
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      color="blue-gray"
                      className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                    >
                      Inspiration
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      color="blue-gray"
                      className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                    >
                      Chatbot
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      color="blue-gray"
                      className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                    >
                      Contact us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      color="blue-gray"
                      className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                    >
                      Support
                    </a>
                  </li>
                </ul>
            </div>
        </div>

        {/* middle line footer */}
        <div className='flex flex-row  flex-wrap justify-between w-full items-center pt-20'>

          {/* email and contact */}
            <div className='text-lg flex justify-center md:pl-10 w-full lg:w-auto flex-col items-center text-white'>
                <p>Contact: 012345678</p>
                <p>Email: WeGrow79@gmail.com</p>
            </div>
            {/* footer menu contact icon */}
            <div className="flex flex-row flex-wrap pt-5 mx-auto lg:mx-0 lg:mr-6 lg:pt-2 items-center lg:justify-center gap-y-6 gap-x-12 text-center text-lg md:justify-between">
                <ul className="flex flex-wrap items-center justify-center gap-y-2 gap-x-8 ">
                  <li>
                    <a
                      href="#"
                      color="blue-gray"
                      className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                    >
                      <img src={LinkedIcon} alt="linkedin icon" width={43}/>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      color="blue-gray"
                      className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                    >
                      <img src={InstaIcon} alt="instagram icon" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      color="blue-gray"
                      className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                    >
                      <img src={XIcon} alt="x icon" width={57} className='group-hover:fill-red' />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      color="blue-gray"
                      className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                    >
                      <img src={TeleIcon} alt="telegram icon" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      color="blue-gray"
                      className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                    >
                      <img src={FaceIcon} alt="facebook icon" />
                    </a>
                  </li>
                </ul>
            </div>
        </div>
      

      {/* last copyright footer */}
      <hr className="my-8 border-blue-gray-50" />
      <h3 color="blue-gray" className="text-center font-normal text-lg pb-6">
            &#169;Copyright weGrow {currYear}
      </h3>

    </footer>
  )
}

export default Footer