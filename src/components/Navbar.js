import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
  const activeStyle = {
    opacity: '1',
    color: ' var(--blue)',
    borderBottom: '1px solid var(--blue)',
  };

  return (
    <div className="flex justify-between items-center text-yellow-900 hover:text-red-500 uppercase font-bold">
      <NavLink to="/" activeStyle={activeStyle} exact className="mr-8">
        Home
      </NavLink>
      <NavLink to="/colors" activeStyle={activeStyle} exact>
        Colors
      </NavLink>
    </div>
  );
};

export default Navbar;
