import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Admin Dashboard</h1>
      <ul>
        <li>
          <Link to="/bookings">Bookings</Link>
        </li>
        <li>
          <Link to="/rooms">Rooms</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
