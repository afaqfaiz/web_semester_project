import React from 'react';
import { Link } from 'react-router-dom';
import {useAuthStore} from '../Store/useAuthStore';
import {useNavigate} from 'react-router-dom';

function Navbar() {
  const {logout} = useAuthStore();
  const navigate = useNavigate();
  const handlelogout = async ()=>{
    logout();
    navigate('/');
  }
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
        <li>
          <button onClick={handlelogout}>logout</button>
        </li>

      </ul>
    </nav>
  );
}

export default Navbar;
