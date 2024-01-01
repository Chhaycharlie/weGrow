import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../features/userSlice";

const Settings = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div>
      <ul className="text-2xl font-thin space-y-1">
        <li>
          <Link to={"/profile/general"}>General</Link>
        </li>
        <li>
          <Link to={"/profile/edit-profile"}>Edit Profile</Link>
        </li>
        <li>
          <Link to={"/profile/password"}>Password</Link>
        </li>
        <li className="pb-6">
          <Link to={"/profile/user-detail"}>My Profile History</Link>
        </li>
        <hr className="w-56 h-[2px] bg-gray-300" />
        <li
          onClick={handleClick}
          className="text-red-500 cursor-pointer hover:text-gray-800 pt-1"
        >
          Sign Out
        </li>
      </ul>
    </div>
  );
};

export default Settings;
