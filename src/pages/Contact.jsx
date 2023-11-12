import React from 'react'

function Contact() {
  return (
    <>
    <div className='relative'>
        <img src="src/assets/icons/background.jpeg" alt="background photo"/>
        <div className='absolute text-5xl text-white font-bold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Contact Us</div>
        <div className='absolute bottom-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-normal text-base'>We use an agile approach to test assumptions and connect with the needs of your audience early.</div>
        <div className='absolute bottom-1/5 left-1/2 border-solid border-2 border-grey-600 rounded-lg shadow-2xl h-3/5 my-32 mx-12 bg-green-600 -translate-x-1/2 -translate-y-1/2  '></div>
    </div>
    </>
  )
}

export default Contact