import {
  IconButton,
  MobileNav,
  Navbar,
  Typography,
  Avatar,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { React, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Logo from "../../assets/logos/logo6.png";
import X from "../../assets/icons/x.svg";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/userSlice";

export default function Header() {
  const [openNav, setOpenNav] = useState(false);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-2 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 nav-link">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold  text-sm menufont"
      >
        <Link to="/" className="flex items-center">
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold text-sm menufont"
      >
        <Link to="/Course" className="flex items-center">
          Inspiration
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold text-sm menufont"
      >
        <Link to="/Recruitment" className="flex items-center">
          Opportunity
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 text-sm font-bold menufont"
      >
        <Link to="/Contact" className="flex items-center">
          Contact us
        </Link>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="mx-auto shadow-none max-w-screen-4xl py-1 px-4 lg:px-8 lg:py-1 rounded-none">
      <div className="mx-auto flex items-center justify-between text-blue-gray-900">
        <div className="hidden nav-link text-blue-gray-900 lg:block">
          {navList}
        </div>
        <Link to={"/"} className="pr-48 ">
          <img src={Logo} alt="logo" className="w-20 h-20" />
        </Link>
        <div className="flex items-center justify-between">
          {user ? (
            <Menu>
              <MenuHandler>
                <Avatar
                  src={X}
                  alt="avatar"
                  className="cursor-pointer hidden lg:flex w-10 h-10 shadow-sm hover:shadow-lg"
                />
              </MenuHandler>
              <MenuList>
                <Link to={"/profile/general"}>
                  <MenuItem>My profiles</MenuItem>
                </Link>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </MenuList>
            </Menu>
          ) : null}
          {/* login btn */}
          {!user ? (
            <>
              <Link
                to="/Login"
                className="hidden font-semibold lg:ml-5 lg:inline-block"
              >
                Login
              </Link>
              <Button
                size="lg"
                className="hidden lg:ml-5 lg:inline-block rounded-2xl hover:bg-indigo-600 bg-[#1400FF] duration-200"
              >
                <Link to="/Signup">Sign up</Link>
              </Button>
            </>
          ) : null}
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
          {!user && (
            <Button variant="gradient" size="sm" fullWidth className="mb-2">
              <Link to="/Login">Login</Link>
            </Button>
          )}
        </div>
      </MobileNav>
    </Navbar>
  );
}
