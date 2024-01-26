import React from 'react';
import { NavLink } from 'react-router-dom'; 
/* - Handle CSS for Links and How They Are Interacted With According to Wireframe
   - Hoover and Click Events in CSS for the links*/

function Navigation() {
return (
<nav className="navigation">
    <NavLink exact to="/" activeClassName="active">Home</NavLink>
    <NavLink to="/collection" activeClassName="active">Collection</NavLink>
    <NavLink to="/submit-art" activeClassName="active">Submit Art</NavLink>
</nav>
);
}

export default Navigation;


