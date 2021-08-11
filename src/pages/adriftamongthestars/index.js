import React from "react";
import Header from '../../components/Header';
import { Helmet } from 'react-helmet';
import Background from '../../components/Background';
import '../info.css';
import screen1 from '../../assets/adriftamongthestars/Screenshot1.png';
import screen2 from '../../assets/adriftamongthestars/Screenshot2.png';
import screen3 from '../../assets/adriftamongthestars/Screenshot3.png';
import screen4 from '../../assets/adriftamongthestars/Anim.gif';

function AdriftIndex() {
  return (
    <div className="App">
    <Helmet>
      <style>{'body { background-color: rgb(22, 32, 36); }'}</style>
    </Helmet>
      <Header/>
      <body>
      <div className="info">
          <h1>Adrift Among the Stars</h1>
          <p>Adrift Among the Stars was my first solo game jam project and my first project I put online for 7DFPS and ProcJam 2014.</p>
          <p>
            Tasked with defending a sector of space with your spacecraft, fight off waves of incoming alien spacecraft and survive as long as you can.
          </p>
          <p>
            I made Adrift Among the Stars alone in Unity and made all of the art assets and animations. This was my first project using a first-person perspective and mixing 2D visuals in a 3D environment.
          </p>

          <p>You can play Adrift Among the Stars <a href="https://tynorman.itch.io/adrift-among-the-stars">here</a>.</p>
        </div>
        <footer className="footer">
          <img className="Screencap" src={screen1} />
          <img className="Screencap" src={screen2} />
          <img className="Screencap" src={screen3} />
          <img className="Screencap" src={screen4} />
        </footer>
      </body>
      <Background/>
    </div>
  );
}

export default AdriftIndex
