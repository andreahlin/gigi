import React, {useEffect} from 'react';
import './Global.css'
import './UxPage.css'

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
        <p className="ux-text"> coming soon! </p>
      </div>
    </div>
  );
}