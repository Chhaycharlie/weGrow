import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";

const ProtectedRoute = ({ children }) => {
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
  return userState ? children : <Navigate to={"/login"} />;
};

export default ProtectedRoute;
