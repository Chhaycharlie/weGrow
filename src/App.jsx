import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import { Header } from './components/Header'
<<<<<<< HEAD
import Course from './pages/Course'
import Home from './pages/Home'
import Recruitment from './pages/Recruitment'
import Signup from './pages/Signup'
//  import Footer from './components/Footer'
import VolunteerForm from './components/Form/VolunteerForm'
import Header from './components/Header'
import Content from './components/inspiration/Content'
import Contact from './pages/Contact'
import Login from './pages/Login'

=======
import Community from "./pages/Community";
import Home from "./pages/Home";
import Recruitment from "./pages/Recruitment";
import Signup from "./pages/Signup";
//  import Footer from './components/Footer'
import Header from "./components/Header";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
>>>>>>> 66517d617ed8ad3f26ca051897f6645c7dfb6e1e

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
<<<<<<< HEAD
                <Route path="/" index element={<Home />} />
                <Route path="/Recruitment" element={<Recruitment />} />
                <Route path="/Course" element={<Course/>}/>
                <Route path="/Login" element={<Login />} />
                <Route path="/Signup" element={<Signup />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/VolunteerForm" element={<VolunteerForm/>} />
                <Route path="/Content" element={<Content/>} />
=======
          <Route path="/" index element={<Home />} />
          <Route path="/Recruitment" element={<Recruitment />} />
          <Route path="/Community" element={<Community />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Contact" element={<Contact />} />
>>>>>>> 66517d617ed8ad3f26ca051897f6645c7dfb6e1e
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
