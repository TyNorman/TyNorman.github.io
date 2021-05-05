import React from "react";
import Header from '../components/Header';
import profilePic from '../assets/aboutme.jpg';

function About() {
  return (
    <div className="App">
    <Header/>
      <div class="profile-icon">
          <img src={profilePic} />
        </div>
      </div>
  );
}

export default About
