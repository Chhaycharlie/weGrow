// import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
// import { Header } from './components/Header'
// import Signup from './pages/Signup'
// import Login from './pages/Login'
// import Footer from './components/Footer'


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
            displayName: userAuth.displayName,
            photoURL: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  });

  return (
    <>
        {/* <Routes>
          <Route path='/'>
            <Route index element={<Home />}></Route>
          </Route>
        </Routes> */}
        <Home />
    </>
  )
}

export default App;
