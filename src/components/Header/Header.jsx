
import React from 'react';
import logo from '../../assets/images/system-logo_24_x_24.png'; 
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <img src={logo} alt="Logo barbearia" />
        </Link>
        <a href="./Login/index.html" className="btn desktop">Admin</a>
      </div>
    </header>
  );
}

export default Header;