import React from 'react';
import Navigation from './Navigation';
import logoImage from '../images/logo.png'; 
/* - Handle CSS for Logo Image*
   - Perhaps a hoover event on CSS*/


function Header() {
return (
<header className="header">
    <div className="logo">
    <img src={logoImage} alt="Muse Logo" />
    </div>
    <Navigation />
</header>
);
}

export default Header;


