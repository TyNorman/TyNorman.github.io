import React from "react";
import Header from '../../components/Header';
import { Helmet } from 'react-helmet';
import '../info.css';
import screen1 from '../../assets/relentless/Screenshot1.png';
import screen2 from '../../assets/relentless/Screenshot2.png';
import screen3 from '../../assets/relentless/Screenshot3.png';
import screen4 from '../../assets/relentless/Screenshot4.png';

function RelentlessIndex() {
  return (
    <div className="App">
      <Helmet>
        <style>{'body { background-color: #282c34; }'}</style>
      </Helmet>
      <Header/>
      <body>
      <div className="info">
          <h1>Relentless</h1>
          <p>Relentless is a project I entered in GameJolt's Indies Vs Gamers jam in 2015.</p>
          <p>
            Relentless is a 2D arcade shooter where you survive against waves of enemies, using money earned to purchase upgrades between waves. For this project, I really wanted to make another wave survival game after making Adrift Among the Stars, with a basic shop system to be used before the next wave starts. This was also the first project where I wanted to loosely follow GameBoy Colour palette restrictions.
          </p>
          <p>
            I made Relentless in Unity in 72 hours on my own, consisting of programming, pixel art, and animation.
          </p>

          <p>You can play Relentless <a href="https://tynorman.itch.io/relentless">here</a>.</p>
        </div>
        <footer className="footer">
          <img src={screen1} />
          <img src={screen2} />
          <img src={screen3} />
          <img src={screen4} />
        </footer>
      </body>
    </div>
  );
}

export default RelentlessIndex
