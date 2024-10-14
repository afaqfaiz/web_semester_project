import { createRoot } from 'react-dom/client'
import React from 'react'
import Navbar from './components/Navbar.jsx'
import Homepage from './pages/Homepage.jsx'
import './assets/fonts.module.css'




createRoot(document.getElementById('root')).render(
  <Homepage />
)
