import React from 'react';
import './Global.css'
import { ZINE_TITLE, ZINE_1, ZINE_2, ZINE_3, ZINE_4, ZINE_5, ZINE_6, ZINE_7, ZINE_8, ZINE_9, ZINE_10, ZINE_11, ZINE_12, ZINE_13, ZINE_14, ZINE_15, ZINE_16 } from '../MediaUtil'

export default function ZinePage() {
  return (
    <div className="desktop">
      <div className="layout">
        <h1 className="page-title">
          Zine
        </h1>
        <p> here's the good stuff </p>
        <img alt="title page" src={ZINE_TITLE} width="400" /><br />
        <img alt="title page" src={ZINE_1} width="400" />
        <img alt="title page" src={ZINE_2} width="400" />

      </div>
    </div>
  );
}