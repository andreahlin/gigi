import React from 'react';
import './Global.css'
import './PastProjectsPage.css'

export default function PastProjectsPage() {
  return (
    <div className="desktop">
      <div className="layout">
        <h1 className="page-title">
          Past Projects
        </h1>
        <p>
          <h2 className="project-name"> ANDREA-LIN.COM // 2023 </h2>
          Revamped for the season! Developed with Node.js and React.

          <h2 className="project-name"> ARCHITECTURE REPORTS // 2020  </h2>
          Spring framework

          <h2 className="project-name"> A.MAZE.ING // 2018 </h2>
          My goal was to develop a game tool in 3d using an isographic view. I was largely inspired by the game, Monument Valley, because its unique perspective allows for impossible paths to form. Using Unity, I implemented a maze generating algorithm + A* pathfinding algorithm for character navigation.

          <h2 className="project-name"> BIOMAKERLAB // 2017 </h2>
          The Bio.Maker.Lab was a Penn research project led by Professor Orkan Telhan. My role was to develop an interface for the machine made with Raspberry Pis. Using Javascript, HTML/CSS and NodeRed, I developed an interactive interface which controlled the machine remotely while displaying data. I also created the several illustrations that accompanied the data in Photoshop.

          <h2 className="project-name">PROCEDURAL PLANETS // 2017 </h2>
          Along with two classmates, I developed a world of procedurally generated planets that were generated procedurally and/or driven procedurally by sound. One of the planets is surrounded in water modeled from Fractal Brownian Motion noise. Youtube demo here!

          <h2 className="project-name">L-SYSTEMS // 2017</h2>
          Using Javascript, Three.JS, and WebGL, I created a procedural bamboo plant through a 3D visualization of an L-system. The algorithm takes in the number of branches, an axiom, and degree of variation and outputs a unique plant. Noice! Demo found here.

          <h2 className="project-name">MINECRAFT // 2016</h2>
          Using C++ and OpenGl, my two teammates and I developed a mini-version of Minecraft. I was responsible for efficient rendering of the terrain, textures and animating textures, procedural rain and snow implementation and sound.

          <h2 className="project-name">FLYING HOME GAME // 2016</h2>
          This was a platformer game I developed my freshman year using the Java Swing library. The user can press the arrows to control a flying crane to collect flowers and avoid obstacles. Graphics drawn with Photoshop, and original music featured!

        </p>
      </div>
    </div>
  );
}