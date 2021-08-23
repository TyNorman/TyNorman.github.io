import React from "react";
import Header from '../../components/Header';
import { Helmet } from 'react-helmet';
import Background from '../../components/Background';
import Copyright from '../../components/Copyright';
import '../info.css';
import appspire from '../../assets/radiant/appspire.png';
import mflview from '../../assets/radiant/myfantasticlife.png';
import bountymenu from '../../assets/radiant/BountyMenus.gif';
import bountybattle from '../../assets/radiant/BountyBattle.gif';

function RadiantIndex() {
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
          <h1>Radiant Digital</h1>
          <h2>2013-2021</h2>
          <p>I started working with Radiant Digital in 2013 on various Games for Health projects geared towards children in schools and hospitals.</p>
          <p>
            With Radiant I was the Lead Unity Developer coordinating with Radiant's offshore team to implement several educational activities in a 3D environment and assisting with any troubleshooting as needed while also managing the programming side of the project. I was responsible for integrating 2D UI functionality and ensuring it reflected design documents. I was also responsible for integrating activities and game state management into the dialogue system. I implemented spatial audio adjustment and movement-based UI visuals for ease of access. I also developed a flight camera system to be used by other team members to demonstrate work in progress scenes.
          </p>
          <p>
            On other Radiant projects I was a Front-End Developer implementing UI, activities, gameplay mechanics, and bug fixes. On some Flash-based projects I also took responsibility for basic ink and paint work on sketched assets to be integrated into the project. I also taught myself Haxe and AngularJS for two projects to assist the team with development.
          </p>
          <br/>
          <p>
          Over the years, my responsibilities at Radiant consisted of the following:
          <br/>
          <br/><b>• Unity:</b> developing activities, integrating assets and animations, critical bug fixes for client demos, basic tools to assist with demoing in-progress scenes
          <br/>
          <br/><b>• Haxe:</b> designing and developing minigames, establishing an isometric layout to display objects the player could earn, implementing a physics library, debugging issues across the project
          <br/>
          <br/><b>• AngularJS:</b> implementing activities, resolving bugs across the project
          <br/>
          <br/><b>• Actionscript:</b> integrating activities, updating an existing project with player customization, platforming minigames, and fixing game progression issues
          <br/>
          <br/><b>• Flash:</b> integrating activities, inking and painting simple artwork pieces to be used within activities, simple animation of assets
          </p>
        </div>
        <footer className="footer">
          <img className="Screencap" src={appspire} />
          <img className="Screencap" src={mflview} />
          <img className="Screencap" src={bountymenu} />
          <img className="Screencap" src={bountybattle} />
        </footer>
      </body>
      </span>
      <Background/>
    </div>
    <Copyright/>
    </div>
  );
}

export default RadiantIndex
