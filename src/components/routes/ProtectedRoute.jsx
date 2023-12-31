import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";
import { getCurrentUser } from "../../api/user.api";

const ProtectedRoute = ({ children }) => {
  const [userState, setUserState] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      getCurrentUser(user.uid).then((userInfo) => {
        dispatch(
          login({
            displayName: userInfo.displayName,
            email: userInfo.email,
            isAdmin: userInfo.isAdmin,
            organizationEmail: userInfo.organizationEmail,
            organizationName: userInfo.organizationName,
            photoUrl: userInfo.photoUrl,
            role: userInfo.role,
            phoneNumber:userInfo.phoneNumber,
            userId: userInfo.userId,
          })
        );
      });
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
