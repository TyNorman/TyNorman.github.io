import {Background} from '../components/Background';
import {Copyright} from '../components/Copyright';
import ModalImage from "react-modal-image";

import './info.css';

import preview1 from '../assets/radiant/preview1.png';
import preview2 from '../assets/radiant/preview2.png';
import preview3 from '../assets/radiant/preview3.png';
import preview4 from '../assets/radiant/preview4.png';
import appspire from '../assets/radiant/appspire.png';
import mflview from '../assets/radiant/myfantasticlife.png';
import bountymenu from '../assets/radiant/BountyMenus.gif';
import bountybattle from '../assets/radiant/BountyBattle.gif';

import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/radiant')({
  component: RadiantIndex,
})

function RadiantIndex() {
  return (
    <div className="App">
    <div className="App-contents">
      <div className="overlay">
      <div className="info">
          <h1>Radiant Digital</h1>
          <h2>2013-2024</h2>
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
        <div className="preview">
          <ModalImage small={preview1} large={appspire} />
          </div>
        <div className="preview">
          <ModalImage small={preview2} large={mflview} />
        </div>
        <div className="preview">
          <ModalImage small={preview3} large={bountybattle} />
        </div>
        <div className="preview">
          <ModalImage small={preview4} large={bountymenu} />
        </div>
        </footer>
      </div>
      <Background/>
    </div>
    <Copyright/>
    </div>
  );
}

export default RadiantIndex
