import React, { useState } from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';
import LanguageIcon from '@mui/icons-material/Language';
import SearchIcon from '@mui/icons-material/Search';
import logo from './cardekho2.png'; // Your logo

function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle menu visibility
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the menu
  };

  return (
    <div className="navbar">
      <div className="navbarLeft">
        <img src={logo} alt="Logo" className="logo" />
        <div className={`navLinks ${menuOpen ? 'open' : ''}`}>
          <span className="navLink" onClick={() => navigate('/home')}>Home</span>
          <span className="navLink" onClick={() => navigate('/About')}>About</span>
          <span className="navLink" onClick={() => navigate('/Contact')}>Contact</span>
          
        </div>
      </div>

      <div className="navbarCenter">
        <div className="searchBox">
          <input type="text" placeholder="Search destination..." />
          <SearchIcon />
        </div>
      </div>

      <div className="navbarRight">
        <div className="language">
          <LanguageIcon />
          <span>EN</span>
        </div>
        <span className="login" onClick={() => navigate('/login')}>Log In</span>
        
      </div>

      {/* Burger Icon for Mobile View */}
      <div className="burger" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </div>
  );
}

export default Navbar;
