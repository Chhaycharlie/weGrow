// import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
// import Home from './pages/Home'
// import { Header } from './components/Header'
// import Signup from './pages/Signup'
// import Login from './pages/Login'
// import Footer from './components/Footer'
import AccountPage from './pages/profiles/AccountPage'

function App() {
  return (
    <>
        {/* <Routes>
          <Route path='/'>
            <Route index element={<Home />}></Route>
          </Route>
        </Routes> */}
        <AccountPage />
    </>
  )
}

export default App
