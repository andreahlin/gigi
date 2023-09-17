import React, { useEffect } from 'react'
import './Global.css'
import './FigurePage.css'
import ImageGallery from '../components/ImageGallergy'

export default function FigurePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='desktop'>
      <div className='layout'>
        <h1 className='page-title'>
          Sketch
        </h1>
        <div className='sketch-text-container'>
        <p className='sketch-description'> I am fascinated by the visual world around me. Whether it’s at a museum, in a class, or just plain people-watching, drawing helps me both explore and introspect. I am especially drawn to figurative work and the expressive potential of the human body.</p>
        <p className='note-description'>NOTE: I am using the word “sketch” flexibly to include different mediums and levels of finish. It’s all groovy man!</p>
        </div>
        <ImageGallery />
      </div>
    </div>
  );
}