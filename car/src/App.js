import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import { BrowserRouter as Router, Routes, Route ,useLocation} from "react-router-dom";

import NewPage from "./pages/List/Newpage";
import Next from "./pages/mainCar/MainCar";
import Login from './components/Navbar/Auth/Login/login';
import Register from './components/Navbar/Auth/Register/register';
import BookNow from './pages/BookNow/BookNow';
import Account from './pages/Account/Account';
import About from './pages/About/About';
import Contact from './pages/Contactus/Contactus';

function AppLayout() {
  const location = useLocation();
  const hideNavbarPaths = ['/', '/register'];

  return (
    <>
      {!hideNavbarPaths.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<Login />} />
        
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/booknow" element={<BookNow />} />
        <Route path="/account" element={<Account  num={1}/>} />
        <Route path="/contact" element={<Contact  num={1}/>} />
        <Route path="/about" element={<About num={1} />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppLayout /> {/* Now useLocation is inside the Router ✅ */}
    </Router>
  );
}

export default App;