import { Route, Routes } from "react-router-dom";
import "./App.css";
import RecruitmentForm from "./components/Form/RecruitmentForm";
import VolunteerForm from "./components/Form/VolunteerForm";
import { ModalTerms } from "./components/shared/ModalTerms";
import Pagination from "./components/shared/Pagination";
import Training from "./components/course/Training";
import Faq from "./components/home/Faq";
import Whoarewe from "./components/home/Whoarewe";
import Inspiration from "./components/inspiration/Inspiration";
import { ModalDetail } from "./components/post-recruitment/ModalDetail";
import Opportunity from "./components/post-recruitment/Opportunity";
import PostRecruitment from "./components/post-recruitment/PostRecruitment";
import Contact from "./pages/Contact";
import Course from "./pages/Course";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Recruitment from "./pages/Recruitment";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";
import Profile from "./components/profiles/Profile";
import AccountPage from "./pages/profiles/AccountPage";
import GeneralPage from "./pages/profiles/GeneralPage";
import PasswordPage from "./pages/profiles/PasswordPage";
import UserDetial from "./pages/profiles/UserDetails";

function App() {
  return (
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route path="/recruitment" element={<Recruitment />} />
      <Route path="/course" element={<Course />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/volunteerForm" element={<VolunteerForm />} />
      <Route path="/modalTerms" index element={<ModalTerms />} />
      <Route path="/recruitmentForm" element={<RecruitmentForm />} />
      <Route path="/training" element={<Training />} />
      <Route path="/post-recruitment" element={<PostRecruitment />} />
      <Route path="/inspiration" element={<Inspiration />} />
      <Route path="/modalDetail" element={<ModalDetail />} />
      <Route path="/profile">
        <Route path="account" element={<AccountPage />} />
        <Route path="general" element={<GeneralPage />} />
        <Route path="password" element={<PasswordPage />} />
        <Route path="user_detail" element={<UserDetial />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
