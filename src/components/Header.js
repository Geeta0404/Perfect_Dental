// src/components/Header.js
import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  const [activeNav, setActiveNav] = useState('');
  const [location, setLocation] = useState(null);
  const currentLocation = useLocation();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    }
  }, []);

  useEffect(() => {
    setActiveNav(currentLocation.pathname);
  }, [currentLocation.pathname]);

  const navItems = [
    { name: 'Home', path: '/home' },
    { name: 'About', path: '/about' },
    { name: 'Treatment', path: '/treatment' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];
  return (
    <header>
      {/* Top Bar */}
      <div className="bg-dark text-light text-center py-2">
        <small>
          Clinic No.: +91 8459647556 | Contact Dr. Priyank: +91 9970192595 | drpriyank@smilekraftdentistry.com
        </small>
      </div>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-white shadow-sm">
        <div className="container">
          {/* Logo */}
          <a className="navbar-brand" href="#">
            <img src="logo.webp" alt="Smilekraft Dentistry" height="50" />
          </a>

          {/* Hamburger Menu for mobile */}
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Links */}
          <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
        {navItems.map((item) => (
          <li key={item.name} className="nav-item">
            <Link 
              to={item.path} 
              className={`nav-link ${activeNav === item.path ? 'text-orange-500 underline' : 'text-black'}`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
