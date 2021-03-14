import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/">
      <img
        src={process.env.PUBLIC_URL + '/logo.png'}
        alt="Multiplica colored Logo"
        width="248"
      />
    </Link>
  );
};

export default Logo;
