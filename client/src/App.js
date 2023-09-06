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
import SingleAnimationPage from "./pages/SingleAnimationPage"
import { createClient } from "@supabase/supabase-js";

export const supabase = createClient("https://rbjesqwdqbrytthnjarh.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJiamVzcXdkcWJyeXR0aG5qYXJoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM1OTcwMzcsImV4cCI6MjAwOTE3MzAzN30.66JRLQjKQwHYaTWPImQA3oDclq63DiYDWKGzSwAga54");

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
          <Route path='projects' element={< PastProjectsPage />}/>
         </Route>
        {/* todo route 404 */}
        <Route path="*" element={<Navigate to ="/" />}/>
      </Routes>
  )
}