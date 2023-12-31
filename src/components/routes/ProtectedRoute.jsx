import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../features/userSlice";
import { getCurrentUser } from "../../api/user.api";
import { store } from "../../app/store";

const ProtectedRoute = ({ children }) => {
  const [userState, setUserState] = useState(null);
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
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
              phoneNumber: userInfo.phoneNumber,
              location: userInfo.location,
              userId: userInfo.userId,
            })
          );
          // Save Redux state to local storage
          localStorage.setItem(
            "reduxState",
            JSON.stringify(store.getState().user)
          );
        });
      }
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
