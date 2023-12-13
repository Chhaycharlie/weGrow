import React from "react";
import { Link } from "react-router-dom";

const Settings = () => {
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
          <Link to={"/profile/user_detail"}>Switch Account</Link>
        </li>
        <hr className="w-56 h-[2px] bg-gray-300" />
        <li className="text-red-500 cursor-pointer hover:text-gray-800 pt-1">
          Delete Account
        </li>
      </ul>
    </div>
  );
};

export default Settings;
