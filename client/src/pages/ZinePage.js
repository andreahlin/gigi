import React, { useState, useRef, useEffect} from 'react';
import './Global.css'
import './ZinePage.css'
import { ZINE_TITLE, ZINE_1, ZINE_2, ZINE_3, ZINE_4, ZINE_5, ZINE_6, ZINE_7A, ZINE_7B, ZINE_8, ZINE_9, ZINE_10, ZINE_11, ZINE_12, ZINE_13, ZINE_14, ZINE_15, ZINE_16 } from '../MediaUtil'
import Flicking, { ViewportSlot } from "@egjs/react-flicking"
import { Arrow, Fade, AutoPlay, Sync } from "@egjs/flicking-plugins"
import "@egjs/flicking-plugins/dist/flicking-plugins.css";
import "@egjs/react-flicking/dist/flicking.css";
import "@egjs/flicking-plugins/dist/arrow.css"

export default function ZinePage() {
  const plugins = [new Fade(), new AutoPlay({animationDuration: 1000})]

  return (
    <div className="desktop">
      <div className="layout">
        <div class="feature-container">
          <div class="text-container">
            <p className="zine-marker">zine</p>
            <h1 className="zine-title">
              Existentialism <br />in the City
            </h1>
            <p className="zine-description"> I created this after moving to NYC in 2022 and experiencing the whirlwind of the big apple. I sketched cafes, pie shops, street corners, people in conversation, and anything else that caught my fancy on a given day. I wanted to express the unique mix of inspiration, beauty and isolation that comes with living in a big city. <br/> <br/> This zine was printed using risograph (AKA "digital screen printing") at <a className="txtbooks-link" target="_blank" href="https://www.txtbooks.us/">txtbooks.us</a> in Brooklyn. <i> Hooray for local & independent studios! </i> &nbsp;You can view the digital version below. </p>
            <a className="zine-explanation" target="_blank" href="https://www.binderymke.com/what-is-a-zine">
              what the heck is a zine?
            </a>
          </div>
          <div className="image-container">
            <img className="main-image" alt="drawing of busy street corner" src={ZINE_11} />
          </div>
        </div>
        <div className="carousel-container" >
          <Flicking circular={false}
            plugins={plugins}>
            <img alt="drawing of rodin's the thinker" src={ZINE_TITLE} width="400" />
            <img alt="drawing of a cafe part 1" src={ZINE_1} width="400" />
            <img alt="drawing of a cafe part 2" src={ZINE_2} width="400" />
            <img alt="drawing of two people sitting on a roof" src={ZINE_3} width="400" />
            <img alt="drawing of a person looking at a bridge" src={ZINE_4} width="400" />
            <img alt="drawing of various items" src={ZINE_5} width="400" />
            <img alt="drawing of people sitting at a bar" src={ZINE_6} width="400" />
            <img alt="drawing of the met part 1" src={ZINE_7A} width="400" />
            <img alt="drawing of the met part 2" src={ZINE_7B} width="400" />
            <img alt="drawing of cafe pastries" src={ZINE_8} width="400" />
            <img alt="drawing of two people walking down a path" src={ZINE_9} width="400" />
            <img alt="drawing of two people looking out on a street" src={ZINE_10} width="400" />
            <img alt="drawing of a brooklyn street corner" src={ZINE_11} width="400" />
            <img alt="drawing of prospect park tunnel" src={ZINE_12} width="400" />
            <img alt="drawing of two sculptures" src={ZINE_13} width="400" />
            <img alt="drawing of matisse's dancers" src={ZINE_14} width="400" />
            <img alt="back page of zine with signature and logo" src={ZINE_16} width="400" />
          </Flicking>
        </div>
      </div>
    </div>
  );
}