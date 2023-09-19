import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { HashRouter as Router } from 'react-router-dom'
import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://rbjesqwdqbrytthnjarh.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJiamVzcXdkcWJyeXR0aG5qYXJoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM1OTcwMzcsImV4cCI6MjAwOTE3MzAzN30.66JRLQjKQwHYaTWPImQA3oDclq63DiYDWKGzSwAga54');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router basename='/'>
      <App />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
