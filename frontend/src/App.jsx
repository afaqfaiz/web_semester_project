import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './assets/fonts.module.css'
import Homepage from './pages/Homepage.jsx'
import SignupModal from './components/signup.jsx'
import LoginModal from './components/Login.jsx'
import BookingPage from './pages/booking.jsx'
import Account from './pages/Accont.jsx';
import {useAuthStore} from './store/useAuthStore.js'  


const App = () => {
    const {user}=useAuthStore();
    console.log("user in app",user);
  return (
    <div>
        <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='/signup' element={<SignupModal/>}/>
            <Route path='/login' element={<LoginModal/>}/>
            {/* <Route path='/booking' element={<BookingPage/>}></Route> */}
            <Route path='/booking' element={user ? <BookingPage/>: <Navigate to='/login'/>}/>

            <Route path="/account" element={user? <Account />  : <LoginModal/>} />
        </Routes>
    </div>
  )
}

export default App
