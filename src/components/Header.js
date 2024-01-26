import React from 'react';
import Navigation from './Navigation';
import logo from './logo.png'; 

function Header() {
return (
    <header className="header">
    <div className="logo">
        <a href="/" className="home-link">
        <img src={logo} alt="Muse Logo" />
        </a>
    </div>
    <Navigation />
    </header>
);
}

export default Header;


