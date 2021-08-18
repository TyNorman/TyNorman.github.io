import React from "react";
import {Helmet} from 'react-helmet';
import { Parallax } from 'react-scroll-parallax';
import Header from '../components/Header';
import Background from '../components/Background';
import Copyright from '../components/Copyright';

import './About.css';

import profilePic from '../assets/aboutme.jpg';
import treesLeft from '../assets/Trees_Left.png';
import treesRight from '../assets/Trees_Right.png';


function About() {
  return (
    <div className="App">
    <div class="Container">
    <Header/>
    <Helmet>
      <style>{'body { background-color: rgb(22, 32, 36); }'}</style>
    </Helmet>
    <span class="overlay">
    <body>
      <div class="profile-icon">
          <img src={profilePic} />
      </div>
      <div className="About-contents">
          <p>
            Hey! I'm Tyler Norman, a game developer who's spent most of his career freelancing in the games and interactive media space.
            My major focus is in C# development through Unity, though I've picked up several different programming languages throughout my career including AngularJS, Actionscript, and Haxe.
            I also picked up web development in React to make this site!
            <br/><br/>
            In my spare time, I like to work on my various hobby projects where I do programming, pixel art, and animation. I'm often keen on spending time exercising outside and taking up indoor climbing.
          </p>

          <p class="contact">
            Contact
          </p>
          <div>
            <a href="https://docs.google.com/forms/d/1KR1Hb1VQbFUF1usHL8Y50p71OV7Bc9QZIgdo5o_xb1U">Email</a>
            <a href="https://tynorman.itch.io/">Itch.io</a>
            <a href="https://www.linkedin.com/in/tylernorman/">LinkedIn</a>
            <a href="https://twitter.com/TyNorman">Twitter</a>
          </div>
          </div>
          </body>
          </span>

          <div className="spacer">
            <Background/>
          </div>

          </div>
          <Copyright/>
      </div>
  );
}

export default About
