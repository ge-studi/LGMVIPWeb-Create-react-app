import React from 'react';

const Navbar = ({ handleGetUsers }) => {
  return (
    <nav>
      <div className="navbar-brand">Brand Name</div>
      <button onClick={handleGetUsers}>Get Users</button>
    </nav>
  );
};

export default Navbar;
