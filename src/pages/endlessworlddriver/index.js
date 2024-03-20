import React from "react";
import Header from '../../components/Header';
import { Helmet } from 'react-helmet';
import Background from '../../components/Background';
import Copyright from '../../components/Copyright';
import ModalImage from "react-modal-image";
import '../info.css';

import preview1 from '../../assets/endlessworlddriver/preview1.png';
import preview2 from '../../assets/endlessworlddriver/preview2.png';
import preview3 from '../../assets/endlessworlddriver/preview3.gif';
import preview4 from '../../assets/endlessworlddriver/preview4.gif';
import screen1 from '../../assets/endlessworlddriver/Screenshot1.png';
import screen2 from '../../assets/endlessworlddriver/Screenshot2.png';
import screen3 from '../../assets/endlessworlddriver/Anim1.gif';
import screen4 from '../../assets/endlessworlddriver/Anim2.gif';

function EndlessIndex() {
  return (
    <div className="App">
    <div className="Container">
      <Helmet>
        <style>{'body { background-color: rgb(22, 32, 36); }'}</style>
      </Helmet>
      <Header/>
      <span className="overlay">
      <div className="info">
          <h1>Endless World Driver</h1>
          <p>Endless World Driver is a looping, animated project I made for Screensaver Jam 2016.</p>
          <p>
            Watch an endlessly scrolling road through day and night, with drifting clouds and changing phases of the moon. There may even be small easter eggs!
          </p>
          <p>
            I made Endless World Driver on my own in Unity and made all assets and animations. For this project I wanted to play with the illusion of a 3D perspective only using 2D assets with scaling and positioning to give a sense of depth.
          </p>

          <p>You can download Endless World Driver <a href="https://tynorman.itch.io/endless-world-driver">here</a>.</p>
        </div>
        <footer className="footer">
        <div className="preview">
          <ModalImage small={preview1} large={screen1} />
          </div>
        <div className="preview">
          <ModalImage small={preview2} large={screen2} />
        </div>
        <div className="preview">
          <ModalImage small={preview3} large={screen3} />
        </div>
        <div className="preview">
          <ModalImage small={preview4} large={screen4} />
        </div>
        </footer>
      </span>
      <Background/>
    </div>
    <Copyright/>
    </div>
  );
}

export default EndlessIndex
