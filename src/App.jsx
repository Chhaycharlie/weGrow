import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import { Header } from './components/Header'
import Footer from './components/Footer';
import RecruitmentForm from "./components/Form/RecruitmentForm";
import VolunteerForm from './components/Form/VolunteerForm';
import Header from './components/Header';
import { ModalTerms } from "./components/ModalTerms";
import Pagination from "./components/Pagination";
import Training from "./components/course/Training";
import Faq from "./components/home/Faq";
import Whoarewe from "./components/home/Whoarewe";
import Inspiration from './components/inspiration/Inspiration';
import { ModalDetail } from "./components/post-recruitment/ModalDetail";
import Opportunity from "./components/post-recruitment/Opportunity";
import PostRecruitment from "./components/post-recruitment/PostRecruitment";
import Contact from './pages/Contact';
import Course from './pages/Course';
import Home from './pages/Home';
import Login from "./pages/Login";
import Recruitment from './pages/Recruitment';
import Signup from "./pages/Signup";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
                <Route path="/" index element={<Home />} />
                <Route path="/Recruitment" element={<Recruitment />} />
                <Route path="/Course" element={<Course/>}/>
                <Route path="/Contact" element={<Contact />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Signup" element={<Signup />} />
                <Route path="/VolunteerForm" element={<VolunteerForm/>} />
                <Route path="/Pagination" element={<Pagination/>} />
                <Route path="/ModalTerms" index element={<ModalTerms/>}/>
                <Route path="/RecruitmentForm" element={<RecruitmentForm/>}/>
                <Route path="/Training" element={<Training/>}/>
                <Route path="/Whoarewe" element={<Whoarewe/>}/>
                <Route path="/Faq" element={<Faq/>}/>
                <Route path="/PostRecruitment" element={<PostRecruitment/>}/>
                <Route path="/Inspiration" element={<Inspiration/>}/>
                <Route path="/ModalDetail" element={<ModalDetail/>}/>
                <Route path="/Opportunity" element={<Opportunity/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
