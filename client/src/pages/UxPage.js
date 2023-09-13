import React, {useEffect} from 'react';
import './Global.css'

export default function UxPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="desktop">
      <div className="layout">
        <h1 className="page-title">
          UX
        </h1>
        <p> coming soon! </p>
      </div>
    </div>
  );
}