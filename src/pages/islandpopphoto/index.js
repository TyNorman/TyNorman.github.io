import React from "react";
import Header from '../../components/Header';
import { Helmet } from 'react-helmet';
import Background from '../../components/Background';
import '../info.css';
import screen1 from '../../assets/islandpopphoto/Screenshot1.png';
import screen2 from '../../assets/islandpopphoto/Screenshot2.png';
import screen3 from '../../assets/islandpopphoto/Screenshot3.png';
import screen4 from '../../assets/islandpopphoto/Screenshot4.png';

function IslandIndex() {
  return (
    <div className="App">
    <div class="Container">
      <Helmet>
        <style>{'body { background-color: rgb(22, 32, 36); }'}</style>
        </Helmet>
      <Header/>
      <span class="overlay">
      <body>
      <div className="info">
          <h1>IslandPop Photo</h1>
          <p>IslandPop Photo is a game jam entry developed for 7DFPS and ProcJam 2018. </p>
          <p>
            Inspired by <i>Proteus</i> and the works of Hiroshi Nagai often featured on albums from the City Pop music genre, IslandPop Photo is a photography and exploration game where you wander around a procedurally generated island and snap photos of your surroundings. For this project, I wanted to learn how to procedurally generate 3D geometry and mix 2D assets into the scenery with colours taken from palettes of Hiroshi Nagai's paintings.
          </p>
          <p>
            I programmed this project myself and created all of the 2D sprite assets.
          </p>

          <p>You can play IslandPop Photo <a href="https://tynorman.itch.io/islandpop-photo">here</a>.</p>
        </div>
        <footer className="footer">
          <img className="Screencap" src={screen1} />
          <img className="Screencap"src={screen2} />
          <img className="Screencap" src={screen3} />
          <img className="Screencap" src={screen4} />
        </footer>
      </body>
      </span>
      <Background/>
    </div>
    </div>
  );
}

export default IslandIndex
