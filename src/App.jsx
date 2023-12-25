import "./App.css";
import RecruitmentForm from "./components/Form/RecruitmentForm";
import VolunteerForm from "./components/Form/VolunteerForm";
import Inspiration from "./components/inspiration/Inspiration";
import Contact from "./pages/Contact";
import Course from "./pages/Course";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Recruitment from "./pages/Recruitment";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";
import AccountPage from "./pages/profiles/AccountPage";
import GeneralPage from "./pages/profiles/GeneralPage";
import PasswordPage from "./pages/profiles/PasswordPage";
import UserDetial from "./pages/profiles/UserDetails";
import ProtectedRoute from "./components/routes/ProtectedRoute";

import { Route, Routes } from "react-router-dom";
import ProfileLayout from "./components/profiles/ProfileLayout";
import ProtectLoginRoute from "./components/routes/ProtectLoginRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/login"
        element={
          <ProtectLoginRoute>
            <Login />
          </ProtectLoginRoute>
        }
      />
      <Route
        path="/signup"
        element={
          <ProtectLoginRoute>
            <Signup />
          </ProtectLoginRoute>
        }
      />
      <Route
        path="/recruitment"
        element={
          <ProtectedRoute>
            <Recruitment />
          </ProtectedRoute>
        }
      />
      <Route
        path="/course"
        element={
          <ProtectedRoute>
            <Course />
          </ProtectedRoute>
        }
      />
      <Route
        path="/contact"
        element={
          <ProtectedRoute>
            <Contact />
          </ProtectedRoute>
        }
      />
      <Route
        path="/volunteerForm"
        element={
          <ProtectedRoute>
            <VolunteerForm />
          </ProtectedRoute>
        }
      />
      <Route
        path="/recruitmentForm"
        element={
          <ProtectedRoute>
            <RecruitmentForm />
          </ProtectedRoute>
        }
      />
      <Route
        path="/inspiration"
        element={
          <ProtectedRoute>
            <Inspiration />
          </ProtectedRoute>
        }
      />

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <ProfileLayout />
          </ProtectedRoute>
        }
      >
        <Route index path="account" element={<AccountPage />} />
        <Route path="general" element={<GeneralPage />} />
        <Route path="password" element={<PasswordPage />} />
      </Route>
      <Route
        path="/profile/user_details"
        element={
          <ProtectedRoute>
            <UserDetial />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
