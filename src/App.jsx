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
import InspirationDetail from "./components/inspiration/InspirationDetail";
import ProtectedRoute from "./components/routes/ProtectedRoute";
import ScrollToTop from "./components/shared/ScrollToTop";
import Dashboard from "./pages/admin/Home";
import User from "./pages/admin/User";
import AdminContact from "./pages/admin/Contact";
import Post from "./pages/admin/Post";
import Approvement from "./pages/admin/Approvement";
import AdminInspiration from "./pages/admin/Inspiration";
import UpdatedForm from "./components/Form/UpdatedForm";
import ViewApplication from "./components/post-recruitment/ViewApplication";

import { Route, Routes } from "react-router-dom";
import ProfileLayout from "./components/profiles/ProfileLayout";
import ProtectLoginRoute from "./components/routes/ProtectLoginRoute";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import EditUser from "./pages/admin/EditUser";

function App() {
  const userInfo = useSelector((state) => state.user);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (userInfo && userInfo.user) {
      setIsAdmin(userInfo.user.isAdmin);
    }
  }, [userInfo]); // Only re-run the effect if userInfo changes

  return (
    <>
      <ScrollToTop />
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
          path="/recruitment/:formId/application"
          element={
            <ProtectedRoute>
              <ViewApplication />
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
          path="/apply-forms/:formId"
          element={
            <ProtectedRoute>
              <VolunteerForm />
            </ProtectedRoute>
          }
        />

        <Route
          path="/apply-form/:formId"
          element={
            <ProtectedRoute>
              <UpdatedForm />
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
          path="/recruitmentForm/:formId"
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

        {isAdmin && (
          <>
            <Route path="/dashboards" element={<Dashboard />} />
            <Route path="/dashboard/users" element={<User />} />
            <Route path="/dashboard/posts" element={<Post />} />
            <Route path="/dashboard/approvement" element={<Approvement />} />
            <Route
              path="/dashboard/inspirations"
              element={<AdminInspiration />}
            />
            <Route path="/dashboard/contact" element={<AdminContact />} />
            <Route path="/test" element={<EditUser />} />
          </>
        )}

        <Route
          path="/inspiration/:formId"
          element={
            <ProtectedRoute>
              <InspirationDetail />
            </ProtectedRoute>
          }
        />

        <Route
          index
          path="/profile/edit-profile"
          element={
            <ProtectedRoute>
              <ProfileLayout>
                <AccountPage />
              </ProfileLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile/general"
          element={
            <ProtectedRoute>
              <ProfileLayout>
                <GeneralPage />
              </ProfileLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile/password"
          element={
            <ProtectedRoute>
              <ProfileLayout>
                <PasswordPage />
              </ProfileLayout>
            </ProtectedRoute>
          }
        />
        {/* </Route> */}
        <Route
          path="/profile/user-detail"
          element={
            <ProtectedRoute>
              <UserDetial />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
