import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import { Header } from './components/Header'
import Course from './pages/Course';
import Home from './pages/Home';
import Recruitment from './pages/Recruitment';
import Signup from './pages/Signup';

//  import Footer from './components/Footer'
import RecruitmentForm from "./components/Form/RecruitmentForm";
import VolunteerForm from './components/Form/VolunteerForm';
import Header from './components/Header';
import { Modal } from "./components/Modal";
import Pagination from "./components/Pagination";
import Content from "./components/inspiration/Content";
import Contact from './pages/Contact';
import Login from './pages/Login';
import Opportunity from "./pages/Opportunity";


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
                <Route path="/" index element={<Home />} />
                <Route path="/Recruitment" element={<Recruitment />} />
                <Route path="/Course" element={<Course/>}/>
                <Route path="/Login" element={<Login />} />
                <Route path="/Signup" element={<Signup />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/VolunteerForm" element={<VolunteerForm/>} />
                <Route path="/Content" element={<Content/>} />
                <Route path="/Pagination" element={<Pagination/>} />
                <Route path="/Modal" index element={<Modal/>}/>
                <Route path="/Opportunity" element={<Opportunity/>}/>
                <Route path="/RecruitmentForm" element={<RecruitmentForm/>}/>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
