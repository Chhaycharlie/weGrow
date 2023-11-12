import {
  Button,
  IconButton,
  MobileNav,
  Navbar,
  Typography
} from "@material-tailwind/react";
import { React, useEffect, useState } from "react";
import { Link } from 'react-router-dom';

function Header() {
  const [openNav, setOpenNav] = useState(false);
 
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 nav-link">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold  text-sm menufont"
      >
        <Link to ="/" className="flex items-center">
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold text-sm menufont"
      >
        <Link to ="/Community" className="flex items-center">
          Workshop
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold text-sm menufont"
      >
        <Link to ="/Recruitment" className="flex items-center">
          Opportunity
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 text-sm font-bold menufont"
      >
        <Link to ="" className="flex items-center">
          Contact us
        </Link>
      </Typography>
    </ul>
  );
 
  return (
    <Navbar className="mx-auto shadow-none max-w-screen-4xl py-2 px-4 lg:px-8 lg:py-4 rounded-none">
      <div className="mx-auto flex items-center justify-between text-blue-gray-900">
        <div className="hidden nav-link text-blue-gray-900 lg:block">{navList}</div>
        <a className="pr-48 cursor-pointer py-1.5 customfont hover:text-gray-600 text-xl duration-200">
          We<span className="text-2xl">Grow</span>
        </a>
        <div className="flex items-center justify-between">
            {/* profile avatar */}
          {/* <Avatar src="src/assets/icons/x.svg" alt="avatar" className="cursor-pointer hidden lg:flex w-10 h-10"/> */}
          {/* login btn */}
          <Link to="/Login" className="hidden font-semibold lg:ml-5 lg:inline-block">
            Login
          </Link>
          <Button size="lg" className="hidden lg:ml-5 lg:inline-block rounded-2xl hover:bg-indigo-600 bg-[#1400FF] duration-200">
            <Link to ="/Signup">Sign up</Link>
          </Button>
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container">
          {navList}
          <Button variant="gradient" size="sm" fullWidth className="mb-2">
            <Link to ="/Login">
            Login
            </Link>
          </Button>
        </div>
      </MobileNav>
    </Navbar>
  );
}
export default Header;
