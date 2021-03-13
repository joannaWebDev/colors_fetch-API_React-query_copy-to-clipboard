import React from 'react';
import Logo from './Logo';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className="flex flex-col items-center my-8">
      <Logo />
      <Navbar />
    </header>
  );
};

export default Header;
