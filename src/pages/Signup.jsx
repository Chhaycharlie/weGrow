<<<<<<< HEAD
import React from 'react';
import '../App.css';
import run2 from '../assets/image/run2.gif';
=======
import React, { useEffect, useState } from "react";

import CreateAccount from "../assets/Auth/create-account.svg";
import "../App.css";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
>>>>>>> origin/dana-merge

const Signup = () => {
  const currYear = new Date().getFullYear();
  const [forms, setForms] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();

  const register = (e) => {
    e.preventDefault();
    setFormErrors(validate(forms));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      createUserWithEmailAndPassword(auth, forms.email, forms.password)
        .then((userAuth) => {
          updateProfile(auth.currentUser, {
            displayName: forms.username,
          });
          navigate("/login");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          console.log(errorCode, errorMessage);
        });

      setForms({});
    }
  }, [formErrors]);

  const onChange = (e) => {
    setForms({ ...forms, [e.target.name]: e.target.value });
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This email is invalid!!!";
    }

    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length < 8) {
      errors.password = "Password must be more than 8 characters";
    } else if (values.password.length > 10) {
      errors.password = "Passeord cannot exceed more than 10 characters";
    }

    if (!values.confirmPassword) {
      errors.confirmPassword = "confirm password is required!";
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword =
        "Confirm Password and Password doesn't matched!!!";
    }
    return errors;
  };

  return (
    <div>
<<<<<<< HEAD
        {/* header logo wegrow */}
        <header className='flex items-center bg-white justify-center mr-9 mt-2 lg:justify-start lg:pl-20 w-full h-[8vh]'>
            <img src="src/assets/logos/logo6.png" alt="logo" className="w-20 h-20" />
        </header>

        {/* sign up page body */}
        <div className='flex items-center justify-around w-full h-[84vh] bg-white'>

            {/* left pic */}
            <div className='hidden lg:flex'>
                <img src={run2} alt="login_image" width={500}/>
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
=======
      {/* header logo wegrow */}
      <header className="flex items-center bg-white justify-center mr-9 mt-2 lg:justify-start lg:pl-20 w-full h-[8vh] customfont text-2xl">
        <Link to={"/"}>WeGrow</Link>
      </header>

      {/* sign up page body */}
      <div className="flex items-center justify-around w-full h-[84vh] bg-gray-50">
        {/* left pic */}
        <div className="hidden lg:flex">
          <img src={CreateAccount} alt="login_image" width={400} className="" />
>>>>>>> origin/dana-merge
        </div>

        {/* right form */}
        <div className="min-h-[550px] h-auto w-[300px] sm:w-[400px] flex flex-col justify-center border border-gray-400 rounded-2xl bg-white">
          {/* title */}
          <div>
            <h1 className="sm:text-[30px] font-black font-openSans text-center text-[20px] ">
              Create Account
            </h1>
          </div>

          {/* form_signup  */}
          <div className="h-full w-5/6 mx-auto mt-6">
            <form>
              {/* input username  */}
              <div className="flex items-center justify-center w-full h-[50px] pl-[10px] bg-gray-200 rounded-lg">
                {/* icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20px"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="gray"
                    d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
                  />
                </svg>
                {/* input field */}
                <input
                  type="text"
                  className=" outline-none w-full h-[50px] text-lg pl-5 bg-transparent"
                  placeholder="Username"
                  name="username"
                  value={forms["username"]}
                  onChange={onChange}
                />
              </div>

              {/* input email  */}
              <div className="flex items-center justify-center w-full h-[50px] pl-[10px] bg-gray-200 rounded-lg mt-6 ">
                {/* icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20px"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="gray"
                    d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
                  />
                </svg>
                {/* input field */}
                <input
                  type="text"
                  className=" outline-none w-full h-[50px] text-lg pl-5 bg-transparent"
                  placeholder="Email"
                  name="email"
                  value={forms["email"]}
                  onChange={onChange}
                />
              </div>

              {/* input password  */}
              <div className="flex items-center justify-center h-[50px] pl-[10px] mt-6 bg-gray-200 rounded-lg">
                {/* icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20px"
                  width="25px"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="gray"
                    d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"
                  />
                </svg>
                {/* input field */}
                <input
                  type="password"
                  className=" outline-none w-full h-[50px] text-lg pl-5 bg-none bg-transparent"
                  placeholder="Password"
                  name="password"
                  value={forms["password"]}
                  onChange={onChange}
                />
              </div>

              {/* input confirm password  */}
              <div className="flex items-center justify-center h-[50px] pl-[10px] mt-6 bg-gray-200 rounded-lg ">
                {/* icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20px"
                  width="25px"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="gray"
                    d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"
                  />
                </svg>
                {/* input field */}
                <input
                  type="password"
                  className=" outline-none w-full h-[50px] text-lg pl-5 bg-none bg-transparent"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  value={forms["confirmPassword"]}
                  onChange={onChange}
                />
              </div>

              {/* login btn */}
              <button
                type="submit"
                className="flex justify-center items-center font-extrabold text-xl text-white bg-[#42ADFC] w-full h-[50px] mt-6 rounded-lg hover:bg-[#33a6fed7]"
                onClick={register}
              >
                Create Account
              </button>
            </form>

            {/* already have account */}
            <h4 className="text-sm mt-6 sm:mt-6 flex justify-center  sm:text-sm text-gray-400 font-bold">
              Already have an account?{" "}
              <Link to={"/Login"} className="text-[#42ADFC] pl-2">
                Login
              </Link>
            </h4>
          </div>
        </div>
      </div>

      {/* footer */}
      <footer className="h-[8vh] flex justify-center items-center menufont text-lg">
        &#169;Copyright weGrow {currYear}
      </footer>
    </div>
  );
};

export default Signup;
