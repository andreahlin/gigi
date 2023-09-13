import React, {useEffect} from "react";
import Header from "../components/Header"
import './Global.css'
import './HomePage.css'
import image from '../assets/home-image.png'
import Flower from "../components/Flower"
import HomeArrow from "../components/HomeArrow"
import Footer from "../components/Footer"
export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="desktop">
      <Header />
      <div className="home-layout">
        <div className="background-image-layout">
          <img alt="space-image" src={image} width="700" />

          <div className="art-world-layout">
            <div className="animation-flower-layout">
              <Flower name="animation"/>
            </div>
            <div className="zine-flower-layout">
              <Flower name="zine"/>
            </div>
            <div className="sketch-flower-layout">
              <Flower name="sketch"/>
            </div>
            <div className="deep-cuts-flower-layout">
              <Flower name="deepCuts"/>
            </div>
          </div>
          <div className="tech-world-layout">
            <div className="software-flower-layout">
              <Flower name="software"/>
            </div>
            <div className="ux-flower-layout">
              <Flower name="ux"/>
            </div>
          </div>
          <HomeArrow/>
      </div>
    </div>
    <div className="home-footer"> <Footer /> </div>
    </div>

  );
}