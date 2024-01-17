import React from "react";
import Header from '../../components/Header';
import { Helmet } from 'react-helmet';
import Background from '../../components/Background';
import Copyright from '../../components/Copyright';
import ModalImage from "react-modal-image";
import '../info.css';

import preview1 from '../../assets/islandpopphoto/preview1.gif';
import preview2 from '../../assets/islandpopphoto/preview2.png';
import preview3 from '../../assets/islandpopphoto/preview3.png';
import preview4 from '../../assets/islandpopphoto/preview4.png';
import screen1 from '../../assets/islandpopphoto/VR_test.gif';
import screen2 from '../../assets/islandpopphoto/Screenshot1.png';
import screen3 from '../../assets/islandpopphoto/Screenshot2.png';
import screen4 from '../../assets/islandpopphoto/Screenshot3.png';

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
            In 2021 I briefly revisited the project to practice VR implementation in Unity using the Oculus Rift.
          </p>
          <p>
            I programmed this project myself and created all of the 2D sprite assets.
          </p>

          <p>You can play IslandPop Photo <a href="https://tynorman.itch.io/islandpop-photo">here</a>.</p>
        </div>
        <footer className="footer">
        <div class="preview">
          <ModalImage small={preview1} large={screen1} />
          </div>
        <div class="preview">
          <ModalImage small={preview2} large={screen2} />
        </div>
        <div class="preview">
          <ModalImage small={preview3} large={screen3} />
        </div>
        <div class="preview">
          <ModalImage small={preview4} large={screen4} />
        </div>
        </footer>
      </body>
      </span>
      <Background/>
    </div>
    <Copyright/>
    </div>
  );
}

export default IslandIndex
