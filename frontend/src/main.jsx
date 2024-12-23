import { createRoot } from 'react-dom/client'
import React, { StrictMode } from 'react'
import Navbar from './components/Navbar.jsx'
import App from './App.jsx'
import './assets/fonts.module.css'
import {BrowserRouter} from 'react-router-dom'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
       <App />
    </BrowserRouter> 
  </StrictMode>
)
