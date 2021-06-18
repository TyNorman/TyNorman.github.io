import React from "react";
import {Helmet} from 'react-helmet';
import './About.css';
import Header from '../components/Header';
import profilePic from '../assets/aboutme.jpg';

function About() {
  return (
    <div className="App">
    <Helmet>
      <style>{'body { background-color: rgba(44, 40, 52, 0.8);}'}</style>
    </Helmet>
    <Header/>
    <body className="about">
      <div class="profile-icon">
          <img src={profilePic} />
      </div>
      <div className="contents">
          <p>
            Hey I'm Tyler Norman, a game developer who's spent most of their career freelancing in the games and interactive media space.
            My major focus is in C# development through Unity, though I've picked up several different programming languages throughout my career including AngularJS, Actionscript, and Haxe.
            I also picked up web development in React to make this site!
            <br/><br/>
            In my spare time, I like to work on my various hobby projects where I do programming, pixel art, and animation. I'm often keen on spending time exercising outside and taking up indoor climbing.
          </p>
          </div>
          </body>
      </div>
  );
}

export default About
