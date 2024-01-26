import React from 'react';
import Navigation from './Navigation';
import logo from './logo.png'; 
/* - Handle CSS for Logo Image*
   - Perhaps a hoover event on CSS*/


function Header() {
return (
<header className="header">
    <div className="logo">
    <img src={logo} alt="Muse Logo" />
    </div>
    <Navigation />
</header>
);
}

export default Header;


