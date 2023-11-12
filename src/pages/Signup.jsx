import React from 'react';

import '../App.css';
import CreateAccount from '../assets/Auth/create-account.svg';

const Signup = () => {
    const currYear = new Date().getFullYear();

  return (
    <div>
        {/* header logo wegrow */}
        <header className='flex items-center bg-white justify-center mr-9 mt-2 lg:justify-start lg:pl-20 w-full h-[8vh] customfont text-2xl'>
            <h1>WeGrow</h1>
        </header>

        {/* sign up page body */}
        <div className='flex items-center justify-around w-full h-[84vh] bg-gray-50'>

            {/* left pic */}
            <div className='hidden lg:flex'>
                <img src={CreateAccount} alt="login_image" width={400} className=''/>
            </div>

            {/* right form */}
            <div className='w-[300px] sm:w-[400px] h-[550px] flex flex-col justify-center border border-gray-400 rounded-2xl bg-white'>
                {/* title */}
                <div className='pt-10'>
                    <h1 className='sm:text-[30px] font-black font-openSans text-center text-[20px] '>Create Account</h1>
                </div>

                {/* form_signup  */}
                <div className='h-full w-5/6 mx-auto mt-6'>
                    <form>

                        {/* input username  */}
                        <div className='flex items-center justify-center w-full h-[50px] p-[10px] bg-gray-200 rounded-lg'>
                            {/* icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 448 512">
                                <path fill='gray' d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/>
                            </svg>
                            {/* input field */}
                            <input type="text" 
                                className=' outline-none w-full h-[50px] text-lg pl-5 bg-transparent'
                                placeholder='Username'
                            />
                        </div>
                        
                        {/* input email  */}
                        <div className='flex items-center justify-center w-full h-[50px] p-[10px] bg-gray-200 rounded-lg mt-6'>
                            {/* icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 512 512">
                                <path fill='gray' d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
                            </svg>
                            {/* input field */}
                            <input type="text" 
                                className=' outline-none w-full h-[50px] text-lg pl-5 bg-transparent'
                                placeholder='Email'
                            />
                        </div>

                        {/* input password  */}
                        <div className='flex items-center justify-center h-[50px] p-[10px] mt-6 bg-gray-200 rounded-lg'>
                            {/* icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" width="25px" viewBox="0 0 448 512">
                                <path fill='gray' d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"/>
                            </svg>
                            {/* input field */}
                            <input type="password" 
                                className=' outline-none w-full h-[50px] text-lg pl-5 bg-none bg-transparent'
                                placeholder='Password'
                            />
                        </div>

                        {/* input confirm password  */}
                        <div className='flex items-center justify-center h-[50px] p-[10px] mt-6 bg-gray-200 rounded-lg'>
                            {/* icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" width="25px" viewBox="0 0 448 512">
                                <path fill='gray' d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"/>
                            </svg>
                            {/* input field */}
                            <input type="password" 
                                className=' outline-none w-full h-[50px] text-lg pl-5 bg-none bg-transparent'
                                placeholder='Confirm Password'
                            />
                        </div>

                        {/* login btn */}
                        <button type="submit" className='flex justify-center items-center font-extrabold text-xl text-white bg-[#42ADFC] w-full h-[50px] mt-6 rounded-lg hover:bg-[#33a6fed7]'>Create Account</button>
                    </form>

                    {/* already have account */}
                    <h4 className='text-sm mt-6 flex justify-center sm:mt-10 sm:text-sm text-gray-400 font-bold'>Already have an account? <a href='#' className='text-[#42ADFC] pl-2'>Login</a></h4>
                </div>
            </div>
        </div>

        {/* footer */}
        <footer className='h-[8vh] flex justify-center items-center menufont text-lg'>
                &#169;Copyright weGrow {currYear}
        </footer>

    </div>
  )
}

export default Signup