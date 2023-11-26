import { Checkbox } from "@material-tailwind/react";
import React from 'react';
import '../App.css';
import run2 from '../assets/image/run2.gif';


const Login = () => {
    const currYear = new Date().getFullYear();

  return (
    <div>
        {/* logo wegrow */}
        <header className='flex items-center justify-center mr-9 mt-2 lg:justify-start lg:pl-20 w-full h-[8vh]'>
        <img src="src/assets/logos/logo6.png" alt="logo" className="w-20 h-20" />
        </header>
        <div className='flex items-center justify-around w-full h-[84vh] bg-white'>

            {/* left pic */}
            <div className='hidden lg:flex'>
                <img src={run2} alt="login_image" width={500} />
            </div>

            {/* right form */}
            <div className='w-[300px] sm:w-[400px] h-[500px] flex flex-col justify-center border border-gray-400 rounded-2xl bg-white'>
                {/* title */}
                <div className='pt-10'>
                    <h1 className='text-[20px] font-black font-openSans text-center sm:text-[30px]'>Login</h1>
                    <h4 className='text-center text-sm text-gray-500 font-bold'>Doesn't have account yet? <a href='#' className='text-[#42ADFC] font-bold'>Sign up</a></h4>
                </div>

                {/* form_login  */}
                <div className='h-full w-5/6 mx-auto mt-10'>
                    <form>
                        {/* input email  */}
                        <div className='flex items-center justify-center w-full h-[50px] p-[20px] bg-gray-200 rounded-lg'>
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
                        <div className='flex items-center justify-center h-[50px] p-[20px] mt-6 bg-gray-200 rounded-lg'>
                            {/* icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 448 512">
                                <path fill='gray' d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"/>
                            </svg>
                            {/* input field */}
                            <input type="password" 
                                className=' outline-none w-full h-[50px] text-lg pl-5 bg-none bg-transparent'
                                placeholder='Password'
                            />
                        </div>

                        {/* remember me */}
                        <div className='mt-2 mr-10 flex justify-center items-center font-bold text-gray-500'>
                            <Checkbox className='w-4 h-4'/>
                            <p className='text-sm'>Remember me</p>
                        </div>

                        {/* login btn */}
                        <button type="submit" className='flex justify-center items-center font-extrabold text-xl text-white bg-[#42ADFC] w-full h-[50px] mt-6 rounded-lg hover:bg-[#33a6fed7]'>Login</button>
                    </form>

                    {/* forget password */}
                    <a href="#" className='flex justify-center mt-6 text-gray-400 font-bold text-sm underline hover:text-red-400'>Forgot Password?</a>
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

export default Login