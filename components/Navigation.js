import React from 'react';
import { NavLink } from 'react-router-dom'; 

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


