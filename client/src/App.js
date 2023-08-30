import React from 'react'
import './App.css';
import {Navigate, Route, Routes} from 'react-router-dom'
import LandingPage from "./pages/LandingPage"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import AnimationPage from "./pages/AnimationPage"
import DeepCutsPage from "./pages/DeepCutsPage"
import DesignPage from "./pages/DesignPage"
import FigurePage from "./pages/FigurePage"
import SoftwarePage from "./pages/SoftwarePage"
import PastProjectsPage from "./pages/PastProjectsPage"

export default function App() {
  return (
      <Routes>
        <Route path="/" element={< LandingPage />}/>
        <Route exact path="/home" element={< HomePage />} />
        <Route exact path="/about" element={< AboutPage />} />
        <Route exact path="/animation" element={< AnimationPage />}/>
        <Route exact path="/deepcuts" element={< DeepCutsPage />}/>
        <Route exact path="/design" element={< DesignPage />}/>
        <Route exact path="/figure" element={< FigurePage />}/>
        <Route exact path="/software" element={< SoftwarePage />}/>
        <Route exact path="/projects" element={< PastProjectsPage />}/>
        {/* todo route 404 */}
        <Route path="*" element={<Navigate to ="/" />}/>
      </Routes>
  )
}