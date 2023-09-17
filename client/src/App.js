import React, {useEffect} from 'react'
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import AnimationPage from './pages/AnimationPage'
import PotpourriPage from './pages/PotpourriPage'
import ZinePage from './pages/ZinePage'
import FigurePage from './pages/FigurePage'
import SoftwarePage from './pages/SoftwarePage'
import UxPage from './pages/UxPage'
import SingleAnimationPage from './pages/SingleAnimationPage'
import TechPage from './pages/TechPage'
import ArtPage from './pages/ArtPage'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={< LandingPage />} />
      <Route path='about' element={< AboutPage />} />
      <Route path='home' element={< HomePage />} />
      <Route path='tech' element={<TechPage />} >
        <Route path='software' element={< SoftwarePage />} />
        <Route path='ux' element={< UxPage />} />
      </Route>
      <Route path='art' element={<ArtPage />} >
        <Route path='animation' element={< AnimationPage />} />
        <Route path='animation/:id' element={< SingleAnimationPage />} />
        <Route path='potpourri' element={< PotpourriPage />} />
        <Route path='zine' element={< ZinePage />} />
        <Route path='sketch' element={< FigurePage />} />
      </Route>
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  )
}