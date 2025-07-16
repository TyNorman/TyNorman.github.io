import {Background} from '../components/Background';
import {Copyright} from '../components/Copyright';
import ModalImage from "react-modal-image";
import './info.css';

import preview1 from '../assets/errands99/preview1.png';
import preview2 from '../assets/errands99/preview2.png';
import preview3 from '../assets/errands99/preview3.png';
import preview4 from '../assets/errands99/preview4.png';
import screen1 from '../assets/errands99/Screenshot1.png';
import screen2 from '../assets/errands99/Screenshot2.png';
import screen3 from '../assets/errands99/Screenshot3.png';
import screen4 from '../assets/errands99/Screenshot4.png';

import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/errands99')({
  component: ErrandsIndex,
})

function ErrandsIndex() {
  return (
    <div className="App">
    <div className="App-contents">
      <div className="overlay">
      <div className="info">
        <h1>Errands '99</h1>
        <p>Errands '99 is a game jam entry developed in GB Studio for TOJam 2020 and a love-letter to my childhood spent frequently playing on my GameBoy Colour.</p>
        <p>
          You play as a youth on a hot summer's day spurned to run an errand from the note on the kitchen table.
        </p>
        <p>
          I solely developed Errands '99 in GB Studio with interest in learning the game editor's environment and wanting to create a game on the system from my childhood. I made all of the art and implemented all of the game logic involved.
        </p>

        <p>You can play Errands '99' <a href="https://tynorman.itch.io/errands-99">here</a>.</p>
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

export default ErrandsIndex
