import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../features/userSlice";
import { toast } from "react-toastify";

const Settings = () => {
  const dispatch = useDispatch();

  const handleClick = async () => {
    dispatch(logout());
    window.location.reload();
  };

  return (
    <div>
      <ul className="text-2xl font-thin space-y-1">
        <li>
          <Link to={"/profile/general"}>General</Link>
        </li>
        <li>
          <Link to={"/profile/account"}>Edit Profile</Link>
        </li>
        <li>
          <Link to={"/profile/password"}>Password</Link>
        </li>
        <li className="pb-6">
          <Link to={"/profile/user_detail"}>My Profile History</Link>
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
