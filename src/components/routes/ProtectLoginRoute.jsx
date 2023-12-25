import React from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../../firebase";
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";

const ProtectedLoginRoute = ({ children }) => {
  const [userState, setUserState] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUserState(!!user);
    });
    return () => unsubscribe();
  }, []);

  if (userState === null) {
    return null;
  }
  return userState ? <Navigate to={"/"} /> : children;
};

export default ProtectedLoginRoute;
