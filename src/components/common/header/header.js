import React from 'react';
import logo from '@Assets/imgs/logo.png';
import { Link } from 'react-router-dom';

import './header.css';

const header = () => (
  <nav className="navbar">
    <div className="navLogo">
      <img src={logo} alt="logo" />
    </div>
    <div className="nav__links">
      <div className="link_div">
        <Link to="/" className="nav_items">Home</Link>
      </div>
      <div className="link_div">
        <Link to="/" className="nav_items">Profile</Link>
      </div>
      <div className="link_div">
        <Link to="/" className="nav_items"> Logout</Link>
      </div>
    </div>
  </nav>
);

export default header;
