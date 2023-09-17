import React, { useEffect } from 'react';
import './Global.css'
import './FigurePage.css'
import ImageGallery from "../components/ImageGallergy"

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
        <div className="sketch-text-container">
        <p className="sketch-description"> information about this </p>
        <p className="note-description">Note: hi </p>
        </div>
        <ImageGallery />
      </div>
    </div>
  );
}