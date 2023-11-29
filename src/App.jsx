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

function App() {
  return (
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route path="/Recruitment" element={<Recruitment />} />
      <Route path="/Course" element={<Course />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/VolunteerForm" element={<VolunteerForm />} />
      <Route path="/Pagination" element={<Pagination />} />
      <Route path="/ModalTerms" index element={<ModalTerms />} />
      <Route path="/RecruitmentForm" element={<RecruitmentForm />} />
      <Route path="/Training" element={<Training />} />
      <Route path="/Whoarewe" element={<Whoarewe />} />
      <Route path="/Faq" element={<Faq />} />
      <Route path="/PostRecruitment" element={<PostRecruitment />} />
      <Route path="/Inspiration" element={<Inspiration />} />
      <Route path="/ModalDetail" element={<ModalDetail />} />
      <Route path="/Opportunity" element={<Opportunity />} />
      <Route path="/profile"></Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
