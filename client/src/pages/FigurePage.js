import React, {useEffect} from 'react';
import './Global.css'


export default function FigurePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="desktop">
      <div className="layout">
        <h1 className="page-title">
          Sketch
        </h1>
      </div>
    </div>
  );
}