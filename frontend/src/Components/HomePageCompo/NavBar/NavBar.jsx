import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import logo from '../../../Assets/logo-eSabraHub.png';

const NavBar = () => {
  const [dropdown, setDropdown] = useState(false);

  const handleMouseEnter = () => {
    setDropdown(true);
  };

  const handleMouseLeave = () => {
    setDropdown(false);
  };

  return (
    <div className="navibar">
      <nav>
        <div className="logo">
          <img src={logo} alt="eSabraHub Logo" />
        </div>
        <ul>
          <li className='navlist'><Link to="/">Home</Link></li>
          <li 
            className="services"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Services
            {dropdown && (
              <ul className="dropdown">
                <li className='dropdownlist'><Link to="/accommodation">Accommodations</Link></li>
                <li className='dropdownlist'><Link to="/transport">Transport</Link></li>
                <li className='dropdownlist'><Link to="/food">Food Shops</Link></li>
                <li className='dropdownlist'><Link to="/medicine">Medical Center</Link></li>
                <li className='dropdownlist'><Link to="/places">Attractive Places</Link></li>
              </ul>
            )}
          </li>
          <li className='navlist'><Link to="/about">About Us</Link></li>
          <li className='navlist'><Link to="/contact">Contact Us</Link></li>
          <li><button><Link to="/login">Login</Link></button></li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
