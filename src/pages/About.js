import React from "react";
import {Helmet} from 'react-helmet';
import { Parallax } from 'react-scroll-parallax';
import Header from '../components/Header';
import Background from '../components/Background';
import Copyright from '../components/Copyright';

import './About.css';

import profilePic from '../assets/aboutme3.jpg';
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
            <br/><br/>
            My major focus is in C# development through Unity, though I've picked up several different programming languages throughout my career including AngularJS, Actionscript, and Haxe.
            I also picked up web development in React and website deployment through GitHub Pages to make this site!
            <br/><br/>
            Outside of work, I like to tinker away at hobby projects, mostly based in Unity where I solely do game design, programming, writing, pixel art, and animation.
            <br/><br/>
            Away from the screen, I'm often keen on spending time exercising outside and taking up indoor climbing. I also thoroughly enjoy cooking and baking and regularly share what I've made with friends through photography and recipes. Lately my interests have been focused towards the improvement of my own mental health in the midst of a pandemic. Pre-pandemic, I started a small, casual gathering of other game developers to meet up for coffee outside of work throughout the city.
            <br/><br/>
            I live in Ottawa, Ontario.
          </p>

          <p class="contact">
            Contact
          </p>
          <div>
            <a href="https://forms.gle/q28kTyd5hoz6QCsJ6">Email</a>
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
