import React from "react";
import {Helmet} from 'react-helmet';
import Header from '../components/Header';
import Background from '../components/Background';
import Copyright from '../components/Copyright';
import ModalImage from "react-modal-image";

import './About.css';

import profilePic from '../assets/aboutme4.png';

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
    <div className="Container">
    <Header/>
    <Helmet>
      <style>{'body { background-color: rgb(22, 32, 36); }'}</style>
    </Helmet>
    <span className="overlay">
      <div className="profile-icon">
          <img src={profilePic} alt=""/>
      </div>
      <div className="About-contents">
          <span>
            Hey! I'm Tyler Norman, a game developer turned web developer who's spent over a decade freelancing in the games and interactive media space for web and mobile.  Here's a handy list of some tools and languages I've picked up and used across many different projects.
            <br/><br/>
            Dev Environments:
            <ul>
              <li>Atom</li>
              <li>Unity</li>
              <li>Microsoft Visual Studio</li>
              <li>GB Studio</li>
              <li>Godot</li>
              <li>HaxeDevelop</li>
              <li>Adobe Flash & Animate</li>
            </ul>
            Languages:
            <ul>
              <li>Javascript, HTML, CSS</li>
              <li>C# and C++</li>
              <li>Haxe</li>
              <li>React</li>
              <li>AngularJS</li>
              <li>Actionscript 2.0 and 3.0</li>
            </ul>
            <br/><br/>
            Outside of work I've made a couple small games, participated in game jams, and demonstrated my projects at <a href="https://www.dirty-rectangles.com/">Dirty Rectangles</a> in Ottawa. Pre-pandemic, I started a small, casual gathering of other game developers to meet up for coffee throughout the city.
            <br/><br/>
            Away from the screen, I've taken up horseback riding, indoor bouldering, cooking and baking, and longboarding.
            <br/><br/>
            I live in Ottawa, Ontario.
          </span>

          <p className="contact">
            Contact
          </p>
          <div>
            <a href="https://forms.gle/q28kTyd5hoz6QCsJ6">Email</a>
            <a href="https://tynorman.itch.io/">Itch.io</a>
            <a href="https://www.linkedin.com/in/tylernorman/">LinkedIn</a>
          </div>
          </div>
          <footer className="footer">
          <div className="preview">
            <ModalImage small={preview1} large={about1} alt=""/>
            </div>
          <div className="preview">
            <ModalImage small={preview2} large={about2} alt=""/>
          </div>
          <div className="preview">
            <ModalImage small={preview3} large={about3} alt=""/>
          </div>
          <div className="preview">
            <ModalImage small={preview4} large={about4} alt=""/>
          </div>
          </footer>
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
