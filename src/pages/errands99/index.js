import React from "react";
import Header from '../../components/Header';
import { Helmet } from 'react-helmet';
import '../info.css';
import screen1 from '../../assets/errands99/Screenshot1.png';
import screen2 from '../../assets/errands99/Screenshot2.png';
import screen3 from '../../assets/errands99/Screenshot3.png';
import screen4 from '../../assets/errands99/Screenshot4.png';

function ErrandsIndex() {
  return (
    <div className="App">
      <Helmet>
        <style>{'body { background-color: rgb(22, 32, 36); }'}</style>
        </Helmet>
      <Header/>
      <body>
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
          <img className="Screencap" src={screen1} />
          <img className="Screencap" src={screen2} />
          <img className="Screencap" src={screen3} />
          <img className="Screencap" src={screen4} />
        </footer>
      </body>
    </div>
  );
}

export default ErrandsIndex
