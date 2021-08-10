import React from "react";
import {Helmet} from 'react-helmet';
import { Parallax } from 'react-scroll-parallax';
import Header from '../components/Header';

import './About.css';

import profilePic from '../assets/aboutme.jpg';
import treesLeft from '../assets/Trees_Left.png';
import treesRight from '../assets/Trees_Right.png';
import Background from '../components/Background';

function About() {
  return (
    <div className="App">
    <Header/>
    <Helmet>
      <style>{'body { background-color: rgb(22, 32, 36); }'}</style>
    </Helmet>
    <span class="overlay">
    <body>
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
          </span>

          <div class="bg-objects">
            <span class="parallax-left">
              <Parallax y={[0, 30]}>
                <img class="bg-trees-left" src={treesLeft} />
              </Parallax>
            </span>
            <span class="parallax-right">
              <Parallax y={[0, 30]}>
                <img class="bg-trees-right" src={treesRight} />
              </Parallax>
            </span>
          </div>

      </div>
  );
}

export default About
