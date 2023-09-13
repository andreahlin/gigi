import React from "react";
import "./AboutPage.css"
import './Global.css'
import photo from '../assets/about-image.png'
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function AboutPage() {
    return (
        <div className="desktop">
            <Header />
            <div className="layout">
                <div className="about-layout">
                    <h1 className="about-title">WHO IS SHE?</h1>
                    <div className="about-contents">
                        <div className="about-description">
                            <p>Andrea is a maker! Depending on the day, that can look like building well-designed software, creating artwork, or experimenting with different mediums, both digital and analog. She brings an attitude of curiosity, empathy, and excellence to each challenge she encounters. </p>
                            <p>Andrea graduated from the University of Pennsylvania with a BSE in computer graphics. She is currently a software engineer at Elsevier.</p>
                            <div className="contact-info"> <p > Want to get in touch? <br />
                                <a className="email-link" href="mailto: andhualin@gmail.com"><b>Let’s be buds.</b></a> </p>
                                <img className="about-photo" alt="Andrea Lin" src={photo}></img> </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}