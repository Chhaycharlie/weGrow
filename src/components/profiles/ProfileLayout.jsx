import React, { useEffect, useState } from "react";
import Profile from "./Profile";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const ProfileLayout = ({ children }) => {
  // const currentUser = auth.currentUser;
  const userInfo = useSelector((state) => state.user);
  const [title, setTitle] = useState("");
  const location = useLocation();

  useEffect(() => {
    const lastSlashIndex = location.pathname.lastIndexOf("/");
    const extractedTitle = location.pathname.substring(lastSlashIndex + 1);
    const capitalizedTitle =
      extractedTitle.charAt(0).toUpperCase() + extractedTitle.slice(1);
    setTitle(capitalizedTitle);
  }, [location.pathname]);

  return (
    <Profile
      title={title}
      quote={"Set up your weGrow present and hiring needs"}
    >
      {children}
    </Profile>
  );
};

export default ProfileLayout;
