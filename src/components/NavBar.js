import './NavBar.css';

import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () =>
{
  return (
    <nav>
      <div className="menuitem">
        <Link to = "/">
          <img src = "img/logo.png" alt="Company Logo" className="logo" />
        </Link>
        <div className = "centered-links">
          <Link to = "/">Home</Link>
          <Link to = "/about">About</Link>
          <Link to = "/pets">Pets</Link>
          <Link to = "/contactus">Contact Us</Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;