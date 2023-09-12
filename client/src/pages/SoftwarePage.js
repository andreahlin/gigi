import React from 'react';
import './Global.css'
import './SoftwarePage.css'
import { PiHeartStraightFill } from 'react-icons/pi'
import { FLYING_HOME_GAME } from '../MediaUtil'

export default function Software() {
  return (
    <div className="desktop">
      <div className="layout">
        <div className="past-projects-layout">
          <h1 className="page-title">
            Software
          </h1>
          <div className="row">
            <div className="software-element">
              <h2 className="project-name"> ANDREA-LIN.COM </h2>
              <p className="project-description"> Revamped for the season! <br/> Developed with <PiHeartStraightFill /> using <br/> Node.js and React.</p> <p>2023</p>
            </div>
            <div className="software-element">
              <h2 className="project-name"> ARCHITECTURE REPORTS  </h2>
              <p className="project-description">Utilizing the Spring Framework and PostgreSQL, I wrote an application which processed weekly software architecture reports in order to highlight new vulnerabilities that occurred in our system. Developed for internal use at Elsevier.</p> <p> 2020</p>
            </div>
          </div>

          <div className="row">
            <div className="software-element">
              <h2 className="project-name"> A.MAZE.ING</h2>
              <p className="project-description">My goal was to develop a game tool in 3d using an isographic view. I was largely inspired by the game, Monument Valley, because its unique perspective allows for impossible paths to form. Using Unity, I implemented a maze generating algorithm + A* pathfinding algorithm for character navigation.</p> <p>2019</p>
            </div>
            <div className="software-element">
              <h2 className="project-name"> BIOMAKERLAB </h2>
              <p className="project-description">The Bio.Maker.Lab was a Penn research project. Using Javascript, HTML/CSS and NodeRed, I developed an interactive interface which controlled the machine remotely while displaying data. I also created the several illustrations that accompanied the data in Photoshop.</p> <p>2017</p>
            </div>
          </div>

          <div className="row">
            <div className="software-element">
              <h2 className="project-name">PROCEDURAL PLANETS </h2>
              <p className="project-description"> Along with two classmates, I developed a world of procedurally generated planets that were generated procedurally and/or driven procedurally by sound. One of the planets is surrounded in water modeled from Fractal Brownian Motion noise. Youtube demo here!</p> <p>2017</p>
            </div>
            <div className="software-element">
              <h2 className="project-name">L-SYSTEMS </h2>
              <p className="project-description">Using Javascript, Three.JS, and WebGL, I created a procedural bamboo plant through a 3D visualization of an L-system. The algorithm takes in the number of branches, an axiom, and degree of variation and outputs a unique plant. Noice! Demo found here.</p> <p>2017</p>
            </div>
          </div>

          <div className="row">
            <div className="software-element">
              <h2 className="project-name">MINECRAFT</h2>
              <p className="project-description"> Using C++ and OpenGl, my two teammates and I developed a mini-version of Minecraft. I was responsible for efficient rendering of the terrain, textures and animating textures, procedural rain and snow implementation and sound. </p> <p> 2016</p>
            </div>
            <div className="software-element">
              <h2 className="project-name">FLYING HOME GAME </h2>
              <p className="project-description">This was a platformer game I developed my freshman year using the Java Swing library. The user can press the arrows to control a flying crane to collect flowers and avoid obstacles. Graphics drawn with Photoshop, and original music featured!</p>
              {/* <img className="software-element" alt="flying home game" src={FLYING_HOME_GAME} width="200"></img>  */}
              <p>2016</p>
            </div>
          </div>



        </div>

        <br /><br />
      </div>
    </div>
  );
}