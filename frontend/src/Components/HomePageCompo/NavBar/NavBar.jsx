import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  const [dropdown, setDropdown] = useState(false);

  const handleMouseEnter = () => {
    setDropdown(true);
  };

  const handleMouseLeave = () => {
    setDropdown(false);
  };

  return (
    <div className='navibar'>
      <nav>
        <div className="logo">
          <h1>Logo</h1>
        </div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li 
            className="services"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Services
            {dropdown && (
              <ul className="dropdown">
                <li><Link to="/accommodation">Accommodation Details</Link></li>
                <li><Link to="/transport">Transport</Link></li>
                <li><Link to="/food">Food Shops</Link></li>
                <li><Link to="/medicine">Medical Center</Link></li>
                <li><Link to="/places">Attractive Places</Link></li>
              </ul>
            )}
          </li>
          <li><Link to="/contact">Contact Us</Link></li>
          <button><Link to="/login">Login</Link></button>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
