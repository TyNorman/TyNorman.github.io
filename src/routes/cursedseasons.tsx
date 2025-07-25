import { Copyright } from '../components/Copyright';
import { Background } from '../components/Background';
import ModalImage from "react-modal-image";

import './info.css';

import preview1 from '../assets/cursedseasons/preview1.gif';
import preview2 from '../assets/cursedseasons/preview2.gif';
import preview3 from '../assets/cursedseasons/preview3.gif';
import preview4 from '../assets/cursedseasons/preview4.gif';
import screen1 from '../assets/cursedseasons/test.gif';
import screen2 from '../assets/cursedseasons/Bow_Anims.gif';
import screen3 from '../assets/cursedseasons/Dungeon_Boss.gif';
import screen4 from '../assets/cursedseasons/Farming.gif';

import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/cursedseasons')({
  component: CursedSeasonsIndex,
})

function CursedSeasonsIndex() {
  return (
    <div className="App">
    <div className="App-contents">
      <div className="overlay">
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
          <p>Cursed Seasons was put on indefinite hiatus in 2020. One day I might get the urge to return to it and start fresh in Godot.</p>

          <p>You can see more about Cursed Seasons <a href="https://tynorman.itch.io/cursed-seasons">here</a>.</p>
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
      </div>
      <Background/>
    </div>
    <Copyright/>
    </div>
  );
}

export default CursedSeasonsIndex;
