import {Background} from '../components/Background';
import {Copyright} from '../components/Copyright';
import ModalImage from "react-modal-image";

import './info.css';

import preview1 from '../assets/drinkbox/preview1.png';
import preview2 from '../assets/drinkbox/preview2.png';
import preview3 from '../assets/drinkbox/preview3.png';
import preview4 from '../assets/drinkbox/preview4.png';
import nstw1 from '../assets/drinkbox/NobodySavestheWorld1.jpg';
import nstw2 from '../assets/drinkbox/NobodySavestheWorld2.jpg';
import nstw3 from '../assets/drinkbox/NobodySavestheWorld3.jpg';
import nstw4 from '../assets/drinkbox/NobodySavestheWorld4.jpg';

import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/drinkbox')({
  component: DrinkboxIndex,
})

function DrinkboxIndex() {

  return (
    <div className="App">
    <div className="App-contents">
      <div className="overlay">

      <div className="info">
          <h1>Drinkbox Studios</h1>
          <h2>September - October 2021</h2>
          <p>I worked with Drinkbox Studios as a contract playtester on Nobody Saves the World.</p>
          <p>
            With Drinkbox I played through the entirety of the game as I normally would most games. During playtesting I logged notes on any thoughts, bugs, and issues. I also provided the team with gameplay footage, reception, and contextual experiences from other games I've played.
          </p>
          <p>
            Nobody Saves the World is also my first collaborative credit on a retail title!
          </p>
          <p>You can check out Nobody Saves the World on several platforms <a href="https://www.nobodysavestheworld.com/">here</a>.
          </p>
        </div>
        <footer className="footer">
        <div className="preview">
          <ModalImage small={preview1} large={nstw1} />
          </div>
        <div className="preview">
          <ModalImage small={preview2} large={nstw2} />
        </div>
        <div className="preview">
          <ModalImage small={preview3} large={nstw3} />
        </div>
        <div className="preview">
          <ModalImage small={preview4} large={nstw4} />
        </div>
        </footer>
      </div>
      <Background/>
    </div>
    <Copyright/>
    </div>
  );
}

export default DrinkboxIndex
