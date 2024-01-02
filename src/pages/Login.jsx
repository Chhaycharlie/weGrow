import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

import LoginImg from "../assets/Auth/login-img.svg";
import Logo from "../assets/logos/logo6.png";
import "../App.css";
import { auth } from "../firebase";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
import { toast } from "react-toastify";
import SmallSpinner from "../components/shared/SmallSpinner";
import { getCurrentUser } from "../api/user.api";

const Login = () => {
  const currYear = new Date().getFullYear();
  const [formErrors, setFormErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [forms, setForms] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setForms({ ...forms, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setFormErrors(validate(forms));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      //add login logic here
      setLoading(true);
      signInWithEmailAndPassword(auth, forms.email, forms.password)
        .then((user) => {
          getCurrentUser(user.user.uid).then((userInfo) => {
            setLoading(false),
              dispatch(
                login({
                  displayName: userInfo.displayName,
                  email: userInfo.email,
                  isAdmin: userInfo.isAdmin,
                  organizationEmail: userInfo.organizationEmail,
                  organizationName: userInfo.organizationName,
                  photoUrl: userInfo.photoUrl,
                  role: userInfo.role,
                  location: userInfo.location,
                  phoneNumber: userInfo.phoneNumber,
                  userId: userInfo.userId,
                })
              );
          });
          navigate("/");
          setForms({});
        })
        .catch((error) => {
          if (error.code === "auth/invalid-credential") {
            setLoading(false);
            setForms({
              email: "",
              password: "",
            });
            toast.error("Invalid Credential");
          } else {
            setLoading(false);
            console.log(error);
            setForms({
              email: "",
              password: "",
            });
          }
        });
    } else if (Object.keys(formErrors).length > 0) {
      setForms({});
      toast.error(Object.values(formErrors).join(", "), {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This email is invalid!!!";
    }

    if (!values.password) {
      errors.password = "Password is required!";
    }
    return errors;
  };

  return (
    <div>
      {/* logo wegrow */}
      <header className="flex items-center justify-center mr-9 mt-2 lg:justify-start lg:pl-20 w-full h-[8vh] customfont text-2xl">
        <Link to={"/"}>
          <img src={Logo} alt="logo" className="w-20 h-20" />
        </Link>
      </header>
      <div className="flex items-center justify-around w-full h-[84vh] bg-gray-50">
        {/* left pic */}
        <div className="hidden lg:flex">
          <img src={LoginImg} alt="login_image" width={450} />
        </div>

        {/* right form */}
        <div className="w-[300px] sm:w-[400px] h-[500px] flex flex-col justify-center border border-gray-400 rounded-2xl bg-white">
          {/* title */}
          <div className="pt-10">
            <h1 className="text-[20px] font-black font-openSans text-center sm:text-[30px]">
              Please Login
            </h1>
            <h4 className="text-center text-sm text-gray-500 font-bold">
              Doesn't have account yet?{" "}
              <Link to={"/Signup"} className="text-[#42ADFC] font-bold">
                Sign up
              </Link>
            </h4>
          </div>

          {/* form_login  */}
          <div className="h-full w-5/6 mx-auto mt-10">
            <form>
              {/* input email  */}
              <div className="flex items-center justify-center w-full h-[50px] mt-6 p-[20px] bg-gray-200 rounded-lg">
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
              <div className="flex items-center justify-center h-[50px] p-[20px] mt-6 bg-gray-200 rounded-lg">
                {/* icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20px"
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

              {/* login btn */}
              <button
                type="submit"
                onClick={handleLogin}
                disabled={loading}
                className={`flex justify-center items-center font-extrabold text-xl text-white w-full h-[50px] mt-6 rounded-lg ${
                  loading ? "bg-[#74c5ff]" : "hover:bg-[#33a6fed7] bg-[#42ADFC]"
                }`}
              >
                {loading ? <SmallSpinner /> : "Login"}
              </button>
            </form>
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

export default Login;
