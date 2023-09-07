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
import UxPage from "./pages/UxPage"
import SingleAnimationPage from "./pages/SingleAnimationPage"

export default function App() {
  return (
      <Routes>
        <Route path='/' element={< LandingPage />}/>
        <Route path='home' element={< HomePage />}>
          <Route path='about' element={< AboutPage />} />
          <Route path='animation' element={< AnimationPage />}/>
          <Route path='animation/:id' element={< SingleAnimationPage />}/>
          <Route path='deepcuts' element={< DeepCutsPage />}/>
          <Route path='design' element={< DesignPage />}/>
          <Route path='figure' element={< FigurePage />}/>
          <Route path='software' element={< SoftwarePage />}/>
          <Route path='ux' element={< UxPage />}/>
         </Route>
        {/* todo route 404 */}
        <Route path="*" element={<Navigate to ="/" />}/>
      </Routes>
  )
}