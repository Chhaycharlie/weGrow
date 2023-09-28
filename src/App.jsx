import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
// import { Header } from './components/Header'

function App() {
  return (
    <>
        <Routes>
          <Route path='/'>
            <Route index element={<Home />}></Route>
          </Route>
        </Routes>
    </>
  )
}

export default App
