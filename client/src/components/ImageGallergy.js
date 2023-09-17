import React from 'react';
import './Arrow.css'
import 'photoswipe/dist/photoswipe.css'
import IMG_1 from "../assets/sketch-edited/fist-colored-pencil.png";
import IMG_2 from "../assets/sketch-edited/hand-colored-pencil.png";
import IMG_3 from "../assets/sketch-edited/IMG_5459.jpeg";
import IMG_4 from "../assets/sketch-edited/IMG_5616.jpeg";
import IMG_5 from "../assets/sketch-edited/IMG_5886.jpeg";
import IMG_6 from "../assets/sketch-edited/IMG_6223.jpeg";
import IMG_7 from "../assets/sketch-edited/IMG_6321.jpeg";
import IMG_8 from "../assets/sketch-edited/legs-oil.jpeg";
import IMG_9 from "../assets/sketch-edited/profile-self-portrait-colored-pencil.png";

import "./ImageGallery.css"
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import { Gallery, Item } from 'react-photoswipe-gallery'


export default function ImageGallery() {
    return (

        <div className="gallery-container">
            <Gallery withCaption>
                <Item original={IMG_1} width="1024" height="768" 
                caption="hand study | colored pencil" >
                    {({ ref, open }) => (
                        <div class="responsive">
                            <div className="square" id="square-1" ref={ref} onClick={open} >
                            </div> </div>
                    )}
                </Item>
                <Item original={IMG_2} width="1024" height="768" 
                caption="hand study | colored pencil">
                    {({ ref, open }) => (
                        <div class="responsive">
                            <div className="square" id="square-2" ref={ref} onClick={open} >
                            </div> </div>
                    )}
                </Item>
                <Item original={IMG_3} width="1956" height="2666" 
                caption="persimmons study | oil on canvas + graphite">
                    {({ ref, open }) => (
                        <div class="responsive">
                            <div className="square" id="square-3" ref={ref} onClick={open} >
                            </div> </div>
                    )}
                </Item>
                <Item original={IMG_4} width="1608" height="1425" 
                caption="apple study | oil on cardboard">
                    {({ ref, open }) => (
                        <div class="responsive">
                            <div className="square" id="square-4" ref={ref} onClick={open} >
                            </div> </div>
                    )}
                </Item>
                <Item original={IMG_5} width="2217" height="2730" 
                caption="study: Jeremiah Lamenting the Destruction of Jerusalem (Rembrandt) | oil on linen">
                    {({ ref, open }) => (
                        <div class="responsive">
                            <div className="square" id="square-5" ref={ref} onClick={open} >
                            </div> </div>
                    )}
                </Item>
                <Item original={IMG_6} width="2963" height="2112" 
                caption="garlic study | oil on canvas">
                    {({ ref, open }) => (
                        <div class="responsive">
                            <div className="square" id="square-6" ref={ref} onClick={open} >
                            </div> </div>
                    )}
                </Item>
                <Item original={IMG_7} width="3385" height="2531" 
                caption="oil on canvas">
                    {({ ref, open }) => (
                        <div class="responsive">
                            <div className="square" id="square-7" ref={ref} onClick={open} >
                            </div> </div>
                    )}
                </Item>
                <Item original={IMG_8} width="2563" height="2869"
                caption="oil on cardboard" >
                    {({ ref, open }) => (
                        <div class="responsive">
                            <div className="square" id="square-8" ref={ref} onClick={open} >
                            </div> </div>
                    )}
                </Item>
                <Item original={IMG_9} width="826" height="908" 
                caption="colored pencil">
                    {({ ref, open }) => (
                        <div class="responsive">
                            <div className="square" id="square-9" ref={ref} onClick={open} >
                            </div> </div>
                    )}
                </Item>
            </Gallery>
        </div>
    )
}
