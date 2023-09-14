import React, {useEffect} from 'react';
import './Global.css'


export default function PotpourriPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="desktop">
      <div className="layout">
        <h1 className="page-title">
          Potpourri
        </h1>
        <p> here's the good stuff </p>
      </div>
    </div>
  );
}