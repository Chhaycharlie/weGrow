import React from "react";
import Profile from "./Profile";
import { Outlet } from "react-router-dom";
import { auth } from "../../firebase";

const ProfileLayout = ({ title }) => {
  const currentUser = auth.currentUser;

  return (
    <Profile
      title={title}
      name={currentUser.displayName}
      quote={"Set up your weGrow present and hiring needs"}
    >
      <Outlet />
    </Profile>
  );
};

export default ProfileLayout;
