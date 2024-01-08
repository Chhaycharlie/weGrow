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
import InspirationDetail from "./components/inspiration/InspirationDetail";
import ProtectedRoute from "./components/routes/ProtectedRoute";
import ScrollToTop from "./components/shared/ScrollToTop";
import Dashboard from "./pages/admin/Home";
import User from "./pages/admin/User";
import AdminContact from "./pages/admin/Contact";
import Post from "./pages/admin/Post";
import Apply from "./pages/admin/Apply";
import AdminInspiration from "./pages/admin/Inspiration";
import UpdatedForm from "./components/Form/UpdatedForm";
import ViewApplication from "./components/post-recruitment/ViewApplication";
import EditUsers from "./pages/admin/EditUsers";
import ViewPostDetial from "./pages/admin/view/PostDetial";
import AddPost from "./pages/admin/view/AddPost";
import ContactDetial from "./pages/admin/view/ContactDetial";
import ViewUserDetial from "./pages/admin/view/UserDetial";
import ProfileLayout from "./components/profiles/ProfileLayout";
import ProtectLoginRoute from "./components/routes/ProtectLoginRoute";

import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { getRole } from "./api/user.api";
import { auth } from "./firebase";

function App() {
  const userInfo = useSelector((state) => state.user);
  const [isAdmin, setIsAdmin] = useState(false);
  const user = auth.currentUser;

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
          path="/inspirations"
          element={
            <ProtectedRoute>
              <Inspiration />
            </ProtectedRoute>
          }
        />

        <Route path="/test" element={<EditUsers />} />

        {isAdmin && (
          <>
            <Route path="/dashboards" element={<Dashboard />} />
            <Route path="/dashboard/users" element={<User />} />
            <Route path="/dashboard/posts" element={<Post />} />
            <Route
              path="/dashboard/inspirations"
              element={<AdminInspiration />}
            />
            <Route path="/dashboard/contacts" element={<AdminContact />} />
            <Route
              path="/dashboard/contacts/view-detial/:feedbackId"
              element={<ContactDetial />}
            />
            <Route
              path="/dashboard/users/view-details/:userId"
              element={<ViewUserDetial />}
            />
            <Route
              path="/dashboard/posts/view-details/:postId"
              element={<ViewPostDetial />}
            />
            <Route path="/dashboard/posts/add-post" element={<AddPost />} />
            <Route path="/dashboard/applies" element={<Apply />} />
          </>
        )}

        <Route
          path="/inspirations/:formId"
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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
