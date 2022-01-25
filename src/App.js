import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import About from './pages/about/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Carousel } from 'react-bootstrap';



function App() {

  

  const { authIsReady, user } = useAuthContext();

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={!user ? <Login /> : <Home />} />
            <Route path='/login' element={user ? <Home /> : <Login />} />
            <Route path='/signup' element={user && user.displayName ? <Home /> : <Signup />} />
            <Route path='/about' element={<About />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      )}
      <Carousel></Carousel>
      
    </div>
  );
}

export default App