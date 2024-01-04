import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Wegrow from "../../assets/logos/logo6.png";

const DashboardLayout = ({ children, title }) => {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const currYear = new Date().getFullYear();

  return (
    <div
      id="dashboard"
      className="md:flex flex-col md:flex-row md:min-h-screen w-full"
    >
      <div className="flex flex-col w-full md:w-64 text-gray-700 bg-white flex-shrink-0">
        {/* logo */}
        <div className="flex-shrink-0 px-8 py-2 pb-3 flex flex-row items-center justify-between">
          <Link
            to={"/dashboards"}
            className="flex items-center text-xl font-openSans font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline"
          >
            <span>WeGrow</span>
            <img src={Wegrow} alt="logo" className="w-12 h-12" />
          </Link>
          <button
            className="rounded-lg md:hidden focus:outline-none focus:shadow-outline"
            onClick={() => setOpen(!open)}
          >
            <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
              <path
                style={{ display: !open ? "block" : "none" }}
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
              <path
                style={{ display: open ? "block" : "none" }}
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        {/* end logo  */}

        {/* sidebar menu  */}
        <nav
          className={`${
            open ? "block space-y-4" : "hidden"
          } flex-grow md:block px-4 pb-4 md:pb-0 md:overflow-y-auto`}
        >
          <NavLink
            className="flex justify-between items-center px-4 py-2 mt-2 text-lg text-gray-900 font-semibold hover:text-white bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-blue-600 dark-mode:focus:bg-blue-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-white focus:text-white hover:bg-[#66CCFF] focus:bg-[#66CCFF] focus:outline-none focus:shadow-outline"
            to={"/dashboards"}
          >
            Dashboard
            {/* dashboard icons */}
            <svg
              width="20px"
              height="20px"
              viewBox="0 -0.5 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#000000"
              strokeWidth="0.00025"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M12.5 11.75C12.9142 11.75 13.25 11.4142 13.25 11C13.25 10.5858 12.9142 10.25 12.5 10.25V11.75ZM5.5 10.25C5.08579 10.25 4.75 10.5858 4.75 11C4.75 11.4142 5.08579 11.75 5.5 11.75V10.25ZM12.5 10.25C12.0858 10.25 11.75 10.5858 11.75 11C11.75 11.4142 12.0858 11.75 12.5 11.75V10.25ZM19.5 11.75C19.9142 11.75 20.25 11.4142 20.25 11C20.25 10.5858 19.9142 10.25 19.5 10.25V11.75ZM11.75 11C11.75 11.4142 12.0858 11.75 12.5 11.75C12.9142 11.75 13.25 11.4142 13.25 11H11.75ZM13.25 5C13.25 4.58579 12.9142 4.25 12.5 4.25C12.0858 4.25 11.75 4.58579 11.75 5H13.25ZM6.25 11C6.25 10.5858 5.91421 10.25 5.5 10.25C5.08579 10.25 4.75 10.5858 4.75 11H6.25ZM20.25 11C20.25 10.5858 19.9142 10.25 19.5 10.25C19.0858 10.25 18.75 10.5858 18.75 11H20.25ZM4.75 11C4.75 11.4142 5.08579 11.75 5.5 11.75C5.91421 11.75 6.25 11.4142 6.25 11H4.75ZM12.5 5.75C12.9142 5.75 13.25 5.41421 13.25 5C13.25 4.58579 12.9142 4.25 12.5 4.25V5.75ZM18.75 11C18.75 11.4142 19.0858 11.75 19.5 11.75C19.9142 11.75 20.25 11.4142 20.25 11H18.75ZM12.5 4.25C12.0858 4.25 11.75 4.58579 11.75 5C11.75 5.41421 12.0858 5.75 12.5 5.75V4.25ZM12.5 10.25H5.5V11.75H12.5V10.25ZM12.5 11.75H19.5V10.25H12.5V11.75ZM13.25 11V5H11.75V11H13.25ZM4.75 11V15H6.25V11H4.75ZM4.75 15C4.75 17.6234 6.87665 19.75 9.5 19.75V18.25C7.70507 18.25 6.25 16.7949 6.25 15H4.75ZM9.5 19.75H15.5V18.25H9.5V19.75ZM15.5 19.75C18.1234 19.75 20.25 17.6234 20.25 15H18.75C18.75 16.7949 17.2949 18.25 15.5 18.25V19.75ZM20.25 15V11H18.75V15H20.25ZM6.25 11V9H4.75V11H6.25ZM6.25 9C6.25 7.20507 7.70507 5.75 9.5 5.75V4.25C6.87665 4.25 4.75 6.37665 4.75 9H6.25ZM9.5 5.75H12.5V4.25H9.5V5.75ZM20.25 11V9H18.75V11H20.25ZM20.25 9C20.25 6.37665 18.1234 4.25 15.5 4.25V5.75C17.2949 5.75 18.75 7.20507 18.75 9H20.25ZM15.5 4.25H12.5V5.75H15.5V4.25Z"
                  fill="#000000"
                ></path>{" "}
              </g>
            </svg>
          </NavLink>
          <NavLink
            className="flex justify-between items-center px-4 py-2 mt-2 text-lg text-gray-900 font-semibold hover:text-white bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-blue-600 dark-mode:focus:bg-blue-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-white focus:text-white hover:bg-[#66CCFF] focus:bg-[#66CCFF] focus:outline-none focus:shadow-outline"
            to={"/dashboard/users"}
          >
            User
            {/* user icon */}
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </NavLink>

          {/* approvement menu  */}
          <NavLink
            className="flex justify-between items-center px-4 py-2 mt-2 text-lg text-gray-900 font-semibold hover:text-white bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-blue-600 dark-mode:focus:bg-blue-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-white focus:text-white hover:bg-[#66CCFF] focus:bg-[#66CCFF] focus:outline-none focus:shadow-outline"
            to={"/dashboard/approvement"}
          >
            Approvement
            <svg
              fill="#000000"
              width="20px"
              height="20px"
              viewBox="0 0 32 32"
              enable-background="new 0 0 32 32"
              version="1.1"
              xml:space="preserve"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g id="Approved"></g> <g id="Approved_1_"></g>{" "}
                <g id="File_Approve">
                  {" "}
                  <g>
                    {" "}
                    <path d="M26,24c-0.553,0-1,0.448-1,1v4H7V3h10v7c0,0.552,0.447,1,1,1h7v4c0,0.552,0.447,1,1,1s1-0.448,1-1v-4.903 c0.003-0.033,0.02-0.063,0.02-0.097c0-0.337-0.166-0.635-0.421-0.816l-7.892-7.891c-0.086-0.085-0.187-0.147-0.292-0.195 c-0.031-0.015-0.063-0.023-0.097-0.034c-0.082-0.028-0.166-0.045-0.253-0.05C18.043,1.012,18.022,1,18,1H6C5.447,1,5,1.448,5,2v28 c0,0.552,0.447,1,1,1h20c0.553,0,1-0.448,1-1v-5C27,24.448,26.553,24,26,24z M19,9V4.414L23.586,9H19z"></path>{" "}
                    <path d="M30.73,15.317c-0.379-0.404-1.01-0.424-1.414-0.047l-10.004,9.36l-4.629-4.332c-0.404-0.378-1.036-0.357-1.414,0.047 c-0.377,0.403-0.356,1.036,0.047,1.413l5.313,4.971c0.192,0.18,0.438,0.27,0.684,0.27s0.491-0.09,0.684-0.27l10.688-10 C31.087,16.353,31.107,15.72,30.73,15.317z"></path>{" "}
                  </g>{" "}
                </g>{" "}
                <g id="Folder_Approved"></g> <g id="Security_Approved"></g>{" "}
                <g id="Certificate_Approved"></g> <g id="User_Approved"></g>{" "}
                <g id="ID_Card_Approved"></g> <g id="Android_Approved"></g>{" "}
                <g id="Privacy_Approved"></g> <g id="Approved_2_"></g>{" "}
                <g id="Message_Approved"></g> <g id="Upload_Approved"></g>{" "}
                <g id="Download_Approved"></g> <g id="Email_Approved"></g>{" "}
                <g id="Data_Approved"></g>{" "}
              </g>
            </svg>
          </NavLink>

          {/* management dropdown menu  */}
          <div onClick={() => setDropdown(!dropdown)} className="relative">
            <button
              onClick={() => setDropdown(!dropdown)}
              className="flex justify-between items-center px-4 py-2 mt-2 text-lg text-gray-900 font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-blue-600 dark-mode:focus:bg-blue-600  dark-mode:text-white hover:text-white hover:bg-[#66CCFF]  focus:outline-none focus:shadow-outline"
            >
              <span>Management</span>
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                className={`inline w-4 h-4 mt-1 ml-16 transition-transform duration-200 transform md:-mt-1 ${
                  dropdown ? "rotate-180" : "rotate-0"
                }`}
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <div
              style={{
                display: dropdown ? "block" : "none",
              }}
              className="absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg"
            >
              <div className="px-2 py-2 bg-white rounded-md shadow dark-mode:bg-gray-800">
                <NavLink
                  className="block px-4 py-2 mt-2 text-lg font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white hover:text-white dark-mode:text-gray-200 md:mt-0  focus:text-gray-900 hover:bg-[#66CCFF] focus:bg-[#66CCFF] focus:outline-none focus:shadow-outline"
                  to={"/dashboard/posts"}
                >
                  Post
                </NavLink>
                <NavLink
                  className="block px-4 py-2 mt-2 text-lg font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white  dark-mode:text-gray-200 md:mt-0 hover:text-white focus:text-gray-900 hover:bg-[#66CCFF] focus:bg-[#66CCFF] focus:outline-none focus:shadow-outline"
                  to={"/dashboard/contact"}
                >
                  Contact
                </NavLink>
                <NavLink
                  className="block px-4 py-2 mt-2 text-lg font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white  dark-mode:text-gray-200 md:mt-0 hover:text-white focus:text-gray-900 hover:bg-[#66CCFF] focus:bg-[#66CCFF] focus:outline-none focus:shadow-outline"
                  to={"/dashboard/inspiration"}
                >
                  Inspiration
                </NavLink>
              </div>
            </div>
          </div>

          {/* back to home page menu  */}
          <NavLink
            className="flex justify-between items-center px-4 py-2 mt-2 text-lg font-semibold text-gray-900 bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 hover:text-white hover:bg-[#66CCFF] focus:bg-[#66CCFF]  focus:outline-none focus:shadow-outline"
            to={"/"}
          >
            Back Homepage
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 1024 1024"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fill="#000000"
                  d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
                ></path>
                <path
                  fill="#000000"
                  d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                ></path>
              </g>
            </svg>
          </NavLink>

          {/* no show when small screen size  */}
          {/* sign out btn menu  */}
          <div
            className={` ${
              !open ? "block space-y-4" : "hidden"
            } flex justify-between items-center px-4 py-2 mt-2 text-lg font-semibold text-gray-900 bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200  hover:bg-[#66CCFF] focus:bg-[#66CCFF] hover:text-white focus:outline-none focus:shadow-outline`}
          >
            Sign out
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6 3C4.34315 3 3 4.34315 3 6V18C3 19.6569 4.34315 21 6 21H17C17.5523 21 18 20.5523 18 20C18 19.4477 17.5523 19 17 19H6C5.44772 19 5 18.5523 5 18V6C5 5.44772 5.44772 5 6 5H17C17.5523 5 18 4.55228 18 4C18 3.44772 17.5523 3 17 3H6ZM15.7071 7.29289C15.3166 6.90237 14.6834 6.90237 14.2929 7.29289C13.9024 7.68342 13.9024 8.31658 14.2929 8.70711L16.5858 11H8C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13H16.5858L14.2929 15.2929C13.9024 15.6834 13.9024 16.3166 14.2929 16.7071C14.6834 17.0976 15.3166 17.0976 15.7071 16.7071L19.7071 12.7071C20.0976 12.3166 20.0976 11.6834 19.7071 11.2929L15.7071 7.29289Z"
                  fill="#000000"
                ></path>{" "}
              </g>
            </svg>
          </div>
        </nav>

        {/* sign out menu  */}
        {/* show when small screen  */}
        <NavLink
          className={` ${
            open ? "block" : "hidden"
          } flex justify-between items-center px-4 py-2 mt-2 mb-1 mx-4 text-lg font-semibold text-gray-900 bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline`}
          to={"#3"}
        >
          Sign out
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6 3C4.34315 3 3 4.34315 3 6V18C3 19.6569 4.34315 21 6 21H17C17.5523 21 18 20.5523 18 20C18 19.4477 17.5523 19 17 19H6C5.44772 19 5 18.5523 5 18V6C5 5.44772 5.44772 5 6 5H17C17.5523 5 18 4.55228 18 4C18 3.44772 17.5523 3 17 3H6ZM15.7071 7.29289C15.3166 6.90237 14.6834 6.90237 14.2929 7.29289C13.9024 7.68342 13.9024 8.31658 14.2929 8.70711L16.5858 11H8C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13H16.5858L14.2929 15.2929C13.9024 15.6834 13.9024 16.3166 14.2929 16.7071C14.6834 17.0976 15.3166 17.0976 15.7071 16.7071L19.7071 12.7071C20.0976 12.3166 20.0976 11.6834 19.7071 11.2929L15.7071 7.29289Z"
                fill="#000000"
              ></path>{" "}
            </g>
          </svg>
        </NavLink>
      </div>
      <div className="flex flex-col w-full">
        {/* navbar header  */}
        <div className="md:h-10 w-full"></div>
        {/* dashboard body */}
        <div className="min-h-[90vh] p-[1px] w-full bg-gray-200">
          {title && <h1 className="p-10 text-2xl">{title}</h1>}
          {children}
        </div>
        <footer className="h-[5vh] w-full font-semibold text-sm flex items-center justify-center md:justify-start md:px-2">
          &#169;Copyright weGrow {currYear}
        </footer>
      </div>
    </div>
  );
};

export default DashboardLayout;
