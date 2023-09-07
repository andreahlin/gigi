import React, { useState, useEffect } from 'react';
import './Global.css'
import './AnimationPage.css'
import { Link } from 'react-router-dom'
import {FLYING_HOME_STILL_URL} from '../MediaUtil'
import {supabase} from '../index'

export default function AnimationPage() {
  const [imageUrl, setImageUrl] = useState("");
  const [images, setImages] = useState([]);

  // useEffect(() => {
  //   (async () => {
  //     const { data } = await supabase
  //       .storage
  //       .from('media')
  //       .getPublicUrl('animation/flying-home-still.png');
  //     setImageUrl(data);
  //     console.log("use " + data)
  //   })();
  // }, []);

  // useEffect(() => {
  //   (async () => {
  //     const { data } = await supabase
  //       .storage
  //       .from('media')
  //       .list('animation', {
  //         limit: 100,
  //         offset: 0,
  //         sortBy: { column: 'name', order: 'asc' },
  //       })
  //       console.log(data);
  //       setImages(data);
  //   })();
  // }, []);

  return (
    <div className="desktop">
      <div className="layout">
        <h1 className="page-title">
          Animation
        </h1>
        <div className="row">
          <Link className="element" to="/home/animation/shadows">
            <img className="element-still" alt="animation still" src={FLYING_HOME_STILL_URL}></img>
            <p className="element-title"> shadows catching up to each other</p>
          </Link>
          <Link className="element" to="/home/animation/goodbye">
            <img className="element-still" alt="animation still" src={FLYING_HOME_STILL_URL}></img>
            <p className="element-title"> good bye</p>
          </Link>
        </div>
        <div className="row">
          <Link className="element" to="/home/animation/propogate">
            <img className="element-still" alt="animation still" src={FLYING_HOME_STILL_URL}></img>
            <p className="element-title"> propogate </p>
          </Link>
          <Link className="element" to="/home/animation/flyinghome">
            <img className="element-still" alt="animation still" src={FLYING_HOME_STILL_URL}></img>
            <p className="element-title"> flying home </p>
          </Link>
        </div>
      </div>
    </div>
  );
}