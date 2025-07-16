import {Background} from '../components/Background';
import { Copyright } from '../components/Copyright';
import ModalImage from "react-modal-image";

import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: About,
})

import './about.css';

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
    <div className="App-contents">
      <div className="overlay">
      <div className="profile-icon">
          <img src={profilePic} alt=""/>
      </div>
      <div className="About-contents">
          <span>
            Hey! I'm Tyler Norman, a game developer turned web developer who's spent over a decade freelancing in the games and interactive media space for web and mobile.  Here's a handy list of some tools and languages I've picked up and used across many different projects.
            <br/><br/>
            <div className="skills">
              <div className="skills-category">
                <strong>Languages & Frameworks:</strong>
                <ul>
                  <li>React (what this site was made in!)</li>
                  <li>JavaScript</li>
                  <li>TypeScript</li>
                  <li>Angular</li>
                  <li>NodeJS</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>C#</li>
                  <li>C++</li>
                  <li>Actionscript 3.0 and 2.0</li>
                  <li>Haxe</li>
                </ul>
              </div>
              <div className="skills-category">
                <strong>Dev Environments:</strong>
                <ul>
                  <li>Visual Studio Code</li>
                  <li>Atom</li>
                  <li>Unity</li>
                  <li>GB Studio</li>
                  <li>Godot</li>
                  <li>Adobe Flash & Animate</li>
                  <li>HaxeDevelop</li>
                </ul>
              </div>
              <div className="skills-category">
                <strong>Tools & Libraries:</strong>
                <ul>
                  <li>Git</li>
                  <li>SVN</li>
                  <li>Cypress</li>
                  <li>NPM</li>
                  <li>Vite</li>
                  <li>Tailwind CSS</li>
                  <li>Redux</li>
                  <li>TanStack Router</li>
                </ul>
              </div>
            </div>
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
            <a href="mailto:tylernorman881@gmail.com">Email</a>
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
          </div>

          <Background/>

          </div>
          <Copyright/>
      </div>
  );
}

export default About;