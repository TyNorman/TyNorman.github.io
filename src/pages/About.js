import React from "react";
import {Helmet} from 'react-helmet';
import { Parallax } from 'react-scroll-parallax';
import Header from '../components/Header';
import Background from '../components/Background';
import Copyright from '../components/Copyright';
import ModalImage from "react-modal-image";

import './About.css';

import profilePic from '../assets/aboutme4.png';
import treesLeft from '../assets/Trees_Left.png';
import treesRight from '../assets/Trees_Right.png';

import preview1 from '../assets/about/preview1.png';
import preview2 from '../assets/about/preview2.png';
import preview3 from '../assets/about/preview3.png';
import preview4 from '../assets/about/preview4.png';
import about1 from '../assets/about/aboutme1.jpg';
import about2 from '../assets/about/aboutme2.jpg';
import about3 from '../assets/about/aboutme3.jpg';
import about4 from '../assets/about/aboutme4.jpg';


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
            Hey! I'm Tyler Norman, a game developer turned web developer who's spent most of his career freelancing in the games and interactive media space for web and mobile.
            <br/><br/>
            My major focus in game development is in C# development through Unity, though I've picked up several different programming languages throughout my career including AngularJS, Actionscript, and Haxe.
            I also picked up web development in React and website deployment through GitHub Pages to make this site!
            <br/><br/>
            Outside of work, I like to tinker away at hobby projects, mostly based in Unity where I find myself doing game design, programming, writing, pixel art, and animation.
            <br/><br/>
            Away from the screen, I've taken up horseback riding, indoor bouldering, cooking and baking, and longboarding. Pre-pandemic, I started a small, casual gathering of other game developers to meet up for coffee throughout the city.
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
          </div>
          </div>
          <footer className="footer">
          <div class="preview">
            <ModalImage small={preview1} large={about1} />
            </div>
          <div class="preview">
            <ModalImage small={preview2} large={about2} />
          </div>
          <div class="preview">
            <ModalImage small={preview3} large={about3} />
          </div>
          <div class="preview">
            <ModalImage small={preview4} large={about4} />
          </div>
          </footer>
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
