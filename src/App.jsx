import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
// import { Header } from './components/Header'
import Community from './pages/Community'
import Home from './pages/Home'
import Recruitment from './pages/Recruitment'
import Signup from './pages/Signup'
//  import Footer from './components/Footer'
import Header from './components/Header'
import Contact from './pages/Contact'
import Login from './pages/Login'


function App() {
 return (
   <>
    <BrowserRouter>
    <Header/>
        <Routes>
                <Route path="/" index element={<Home />} />
                <Route path="/Recruitment" element={<Recruitment />} />
                <Route path="/Community" element={<Community/>}/>
                <Route path="/Login" element={<Login />} />
                <Route path="/Signup" element={<Signup />} />
                <Route path="/Contact" element={<Contact />} />
        </Routes>
    </BrowserRouter>
         </>
   )
 }

export default App

