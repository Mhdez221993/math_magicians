import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Math Magicians',
    },
    {
      id: 2,
      path: '/',
      text: 'Home',
    },
    {
      id: 3,
      path: '/calculator',
      text: 'Calculator',
    },
    {
      id: 4,
      path: '/quotes',
      text: 'Quotes',
    },
  ];

  return (
    <nav className="navBar">
      <ul className="nav-list">
        {links.map(link => (
          <li key={link.id} className="nav-links">
            <NavLink to={link.path} activeClassName="active-link" exact>
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
