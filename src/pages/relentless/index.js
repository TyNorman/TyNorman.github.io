import React from "react";
import Header from '../../components/Header';
import { Helmet } from 'react-helmet';
import '../info.css';
import testPic from '../../assets/cursedseasons/test.gif';

function RelentlessIndex() {
  return (
    <div className="App">
      <Helmet>
        <style>{'body { background-color: #282c34; }'}</style>
      </Helmet>
      <Header/>
      <body>
      <div className="info">
          <h1>Cursed Seasons</h1>
          <p>Cursed Seasons is a hobby project made in Unity that I've worked on since 2014 on the side of contract work and other projects. </p>
          <p>
            In Cursed Seasons, you have inherited both a long-forgotten farm and a curse of repeating death.
            Using what you've farmed and gathered on the surface, delve into deep dungeons and ominous caves to find a cure and break the cycle.
            Encounter hostile monsters at night and in the wilderness outside your farm, and meet villagers in the nearby towns to exchange with and learn more about the world.
            Explore procedurally generated dungeons, with each death randomizing a completely new experience.
            Play as several different characters with unique traits and starting gear.
          </p>
          <p>
            I am the sole developer on Cursed Seasons programming in C#, creating and animating pixel art assets, and writing shaders for neat visuals.
          </p>
          <p>Cursed Seasons is currently in development.</p>

          <p>You can see more about Cursed Seasons <a href="https://tynorman.itch.io/cursed-seasons">here</a>.</p>
        </div>
        <footer className="footer">
          <img src={testPic} />
          <img src={testPic} />
          <img src={testPic} />
          <img src={testPic} />
        </footer>
      </body>
    </div>
  );
}

export default RelentlessIndex
