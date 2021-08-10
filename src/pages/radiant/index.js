import React from "react";
import Header from '../../components/Header';
import { Helmet } from 'react-helmet';
import '../info.css';
import appspire from '../../assets/radiant/appspire.png';
import mflview from '../../assets/radiant/myfantasticlife.png';
import bountymenu from '../../assets/radiant/BountyMenus.GIF';
import bountybattle from '../../assets/radiant/BountyBattle.GIF';

function RadiantIndex() {
  return (
    <div className="App">
      <Helmet>
        <style>{'body { background-color: rgb(22, 32, 36); }'}</style>
      </Helmet>
      <Header/>
      <body>
      <div className="info">
          <h1>Radiant Digital</h1>
          <h2>2013-2021</h2>
          <p>I started working with Radiant Digital in 2013 on various Games for Health projects geared towards children in schools and hospitals.</p>
          <p>
            With Radiant I was the Senior Unity Developer coordinating with Radiant's offshore team to implement several educational activities in a 3D environment and assisting with any troubleshooting as needed while also managing the programming side of the project. I was responsible for integrating 2D UI functionality and ensuring it reflected design documents.
            I was also responsible for integrating activities and game state management into the dialogue system. I implemented spatial audio adjustment and movement-based UI visuals for ease of access. I also developed a flight camera system to be used by other team members to demonstrate work in progress scenes.
          </p>
          <p>
          Other projects with Radiant consisted of implementing activity functionality using Flash Actionscript 2 and 3, AngularJS, and Haxe. I have also been responsible for minigame design and implementation. I also took up inking, painting, and animating basic Flash assets when necessary.
          </p>
        </div>
        <footer className="footer">
          <img className="Screencap" src={appspire} />
          <img className="Screencap" src={mflview} />
          <img className="Screencap" src={bountymenu} />
          <img className="Screencap" src={bountybattle} />
        </footer>
      </body>
    </div>
  );
}

export default RadiantIndex
