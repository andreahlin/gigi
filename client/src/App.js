import React from 'react'
import './App.css';
import {Navigate, Route, Routes} from 'react-router-dom'
import LandingPage from "./pages/LandingPage"
import OptionsPage from "./pages/OptionsPage"
import AboutPage from "./pages/AboutPage"

export default function App() {
  return (
      <Routes>
        <Route path="/" element={< LandingPage />}/>
        <Route exact path="/options"  element={< OptionsPage />} />
        <Route path="*" element={<Navigate to ="/" />}/>
        <Route path="/about" element={< AboutPage />} />
      </Routes>
  )
}