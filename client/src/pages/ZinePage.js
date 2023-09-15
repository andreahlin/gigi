import React, { useState, useRef, useEffect } from 'react';
import './Global.css'
import './ZinePage.css'
import { ZINE_TITLE, ZINE_1, ZINE_2, ZINE_3, ZINE_4, ZINE_5, ZINE_6, ZINE_7A, ZINE_7B, ZINE_8, ZINE_9, ZINE_10, ZINE_11, ZINE_12, ZINE_13, ZINE_14, ZINE_15, ZINE_16 } from '../MediaUtil'
import Flicking, { ViewportSlot } from "@egjs/react-flicking"
import { Fade, AutoPlay, Sync } from "@egjs/flicking-plugins"
import "@egjs/flicking-plugins/dist/flicking-plugins.css";
import "@egjs/react-flicking/dist/flicking.css";
import "@egjs/flicking-plugins/dist/arrow.css"
import { Arrow } from "@egjs/flicking-plugins";
import "@egjs/flicking-plugins/dist/arrow.css";
import Carousel from "../components/Carousel"

export default function ZinePage() {
  const plugins = [new Fade(), new AutoPlay({ animationDuration: 1000 })]

  useEffect(() => {
    window.scrollTo(0, 0);

  }, []);

  return (
    <div className="desktop">
      <div className="layout">
        <div className="feature-container">
          <div className="text-container">
            <p className="zine-marker">zine</p>
            <h1 className="zine-title">
              Existentialism <br />in the City
            </h1>
            <p className="zine-description"> I created this after moving to NYC in 2022 and experiencing the whirlwind of the big apple. I sketched cafes, pie shops, street corners, people in conversation, and anything else that caught my fancy on a given day. I wanted to express the unique mix of inspiration, beauty and isolation that comes with living in a big city. <br /> <br /> This zine was printed using risograph (AKA "digital screen printing") at <a className="txtbooks-link" target="_blank" href="https://www.txtbooks.us/">txtbooks.us</a> in Brooklyn. <i> Hooray for local & independent studios! </i> &nbsp;You can view the pages digitally below. </p>
            <a className="zine-explanation" target="_blank" href="https://www.binderymke.com/what-is-a-zine">
              what the heck is a zine?
            </a>
          </div>
          <div className="image-container">
            <img className="main-image" alt="drawing of busy street corner" src={ZINE_11} />
          </div>
        </div>
        <div className="carousel-container" >
          <Carousel/>
        </div>
      </div>
    </div>
  );
}