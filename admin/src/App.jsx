import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/AdminDashboard';
import Bookings from './components/Bookings';
import Rooms from './components/Rooms';
import AddRoom from './components/AddRoom';
import {useAuthStore} from './Store/useAuthStore';

function App() {
   const user = useAuthStore();
   const admin= user.user;
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={admin ?<Dashboard />: <Login />} />
        <Route path="/bookings" element={admin?<Bookings />:<Login /> } />
        <Route path="/rooms" element={admin?<Rooms />:<Login/>} />
        <Route path="/add-room" element={admin?<AddRoom /> : <Login/>} />
      </Routes>
    </Router>
  );
}

export default App;
