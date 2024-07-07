import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import './NavBar.css';
import logo from '../../../Assets/logo-eSabraHub.png';

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [dropdown, setDropdown] = useState(false);
  const [targetSection, setTargetSection] = useState(null);

  const handleMouseEnter = () => {
    setDropdown(true);
  };

  const handleMouseLeave = () => {
    setDropdown(false);
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleServiceClick = (servicePath) => {
    navigate(servicePath);
  };

  const handleScrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      setTargetSection(sectionId);
      navigate('/');
    } else {
      setTargetSection(sectionId);
    }
  };

  useEffect(() => {
    if (targetSection) {
      const sectionElement = document.getElementById(targetSection);
      if (sectionElement) {
        const top = sectionElement.offsetTop;
        window.scrollTo({
          top,
          behavior: 'smooth',
        });
      }
      setTargetSection(null);
    }
  }, [targetSection, location.pathname]);

  return (
    <div className="navibar">
      <nav>
        <div className="logo" onClick={() => navigate('/')}>
          <img src={logo} alt="eSabraHub Logo" />
        </div>
        <ul>
          <li className="navlist">
            <ScrollLink
              to="heroId"
              smooth={true}
              offset={-100}
              duration={500}
              className="scrollLink"
              onClick={() => handleScrollToSection('heroId')}
            >
              Home
            </ScrollLink>
            <hr />
          </li>
          <li
            className="services"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Services
            {dropdown && (
              <ul className="dropdown">
                <li className="dropdownlist" onClick={() => handleServiceClick('/accommodation')}>
                  Accommodations
                </li>
                <li className="dropdownlist" onClick={() => handleServiceClick('/transport')}>
                  Transport
                </li>
                <li className="dropdownlist" onClick={() => handleServiceClick('/food')}>
                  Food Shops
                </li>
                <li className="dropdownlist" onClick={() => handleServiceClick('/medicine')}>
                  Medical Center
                </li>
                <li className="dropdownlist" onClick={() => handleServiceClick('/places')}>
                  Attractive Places
                </li>
              </ul>
            )}
          </li>
          <li className="navlist">
            <ScrollLink
              to="aboutId"
              smooth={true}
              offset={-100}
              duration={500}
              className="scrollLink"
              onClick={() => handleScrollToSection('aboutId')}
            >
              About Us
            </ScrollLink>
            <hr />
          </li>
          <li className="navlist">
            <ScrollLink
              to="contactId"
              smooth={true}
              offset={-100}
              duration={500}
              className="scrollLink"
              onClick={() => handleScrollToSection('contactId')}
            >
              Contact Us
            </ScrollLink>
            <hr />
          </li>
          <li>
            <button onClick={handleLoginClick}>Login</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
