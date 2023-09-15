import React, { useEffect } from 'react';
import './Global.css'
import './SoftwarePage.css'
import { PiHeartStraightFill } from 'react-icons/pi'
import { MINECRAFT, MAZE_PROJECT_2, SHADERS_PROJECT, MAZE_PROJECT, BAMBOO_PROJECT, PENROSE_GIF, FLYING_HOME_GAME } from '../MediaUtil'

export default function Software() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="desktop">
      <div className="layout">
        <div className="past-projects-layout">
          <h1 className="page-title">
            Software
          </h1>
          <div className="row">
            <div className="software-element" id="one">
              <h2 className="project-name"> ANDREA-LIN.COM </h2>
              <p className="project-description"> Revamped for the season! <br /> Developed with <PiHeartStraightFill /> using <br /> <b>Node.js</b> and <b>React</b>.</p> <p>2023</p>
            </div>
            <div className="software-element" id="two">
              <h2 className="project-name"> ARCHITECTURE REPORTS  </h2>
              <p className="project-description">Utilizing the <b>Spring Framework</b> and <b>PostgreSQL</b>, I wrote an application which processed weekly software architecture reports in order to highlight new vulnerabilities that occurred in our system. Developed for internal use at Elsevier.</p> <p> 2020</p>
            </div>
          </div>

          <div className="row">
            <div className="software-element" id="three">
              <h2 className="project-name"> A.MAZE.ING</h2>
              <p className="project-description">My goal was to develop a game tool in 3d using an isographic view. I was largely inspired by the game, Monument Valley, because its unique perspective allows for impossible paths to form. Using <b>Unity</b>, I implemented a <b>maze generating algorithm</b> + A* pathfinding algorithm for character navigation.</p> <p>2019</p>
            </div>
            <div className="software-element" id="four">
              <img className="software-image" src={MAZE_PROJECT} alt="procedurally generated maze" />
            </div>
          </div>

          <div className="row">
            <div className="software-element" id="five">
              <h2 className="project-name"> BIOMAKERLAB </h2>
              <p className="project-description">The Bio.Maker.Lab was a Penn research project. Using <b>Javascript</b>, <b>HTML/CSS</b> and <b>NodeRed</b>, I developed an interactive interface which controlled the machine remotely while displaying data. I also created the several illustrations that accompanied the data in Photoshop.</p> <p>2017</p>
            </div>
            <div className="software-element" id="six">
              <h2 className="project-name">PROCEDURAL PLANETS </h2>
              <p className="project-description"> Along with two classmates, I developed a world of <b>procedurally generated</b> planets that were generated procedurally and/or driven procedurally by sound. One of the planets is surrounded in water modeled from <b>Fractal Brownian Motion</b> noise. Check out the demo <a className="demo-link" target="_blank" href="https://www.youtube.com/watch?v=yWhc-ZxIrWA"> here</a>! </p> <p>2017</p>
            </div>
          </div>

          <div className="row">
            <div className="software-element">
              <img className="software-image" src={BAMBOO_PROJECT} alt="procedurally generated bamboo plant" />
            </div>
            <div className="software-element" id="seven">
              <h2 className="project-name">L-SYSTEMS </h2>
              <p className="project-description">Using <b>Javascript</b>, <b>Three.JS</b>, and <b>WebGL</b>, I created a procedural bamboo plant through a 3D visualization of an L-system. The algorithm takes in the number of branches, an axiom, and degree of variation and outputs a unique plant each time. Nice! </p> <p>2017</p>
            </div>

          </div>

          <div className="row">
            <div className="software-element" id="eight">
              <h2 className="project-name">MINECRAFT</h2>
              <p className="project-description"> Using <b>C++</b> and <b>OpenGl</b>, my two teammates and I developed a mini-version of Minecraft. I was responsible for implementing an efficient terrain rendering algorithm, static and animated texture mapping, and procedurally generated weather. </p> <p> 2016</p>
            </div>
            <div className="software-element" id="nine">
              <img className="software-image" src={MINECRAFT} alt="procedurally generatedm inecraft landscape" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}