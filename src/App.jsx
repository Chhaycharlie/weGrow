import "./App.css";
import RecruitmentForm from "./components/Form/RecruitmentForm";
import VolunteerForm from "./components/Form/VolunteerForm";
import Inspiration from "./components/inspiration/Inspiration";
import ProtectedRoute from "./components/routes/ProtectedRoute";
import Contact from "./pages/Contact";
import Course from "./pages/Course";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Recruitment from "./pages/Recruitment";
import Signup from "./pages/Signup";
import AccountPage from "./pages/profiles/AccountPage";
import GeneralPage from "./pages/profiles/GeneralPage";
import PasswordPage from "./pages/profiles/PasswordPage";
import UserDetial from "./pages/profiles/UserDetails";

import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { login, logout } from "./features/userSlice";
import { auth } from "./firebase";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
            displayName: userAuth.displayName,
            photoURL: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  });

  return (
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/recruitment" element={<Recruitment />} />
          <Route path="/course" element={<Course />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/volunteerForm" element={<VolunteerForm />} />
          <Route path="/recruitmentForm" element={<RecruitmentForm />} />
          <Route path="/inspiration" element={<Inspiration />} />
          <Route path="/profile">
            <Route path="account" element={<AccountPage />} />
            <Route path="general" element={<GeneralPage />} />
            <Route path="password" element={<PasswordPage />} />
            <Route path="user_detail" element={<UserDetial />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
  );
}

export default App;
