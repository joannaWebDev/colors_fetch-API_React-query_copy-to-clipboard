import React from 'react';

const Layout = (props) => {
  return (
    <div className="container my-8 mx-auto py-0 px-2">{props.children}</div>
  );
};

export default Layout;
