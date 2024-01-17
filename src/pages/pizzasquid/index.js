import React from "react";
import Header from '../../components/Header';
import { Helmet } from 'react-helmet';
import Background from '../../components/Background';
import Copyright from '../../components/Copyright';
import ModalImage from "react-modal-image";
import '../info.css';

import preview1 from '../../assets/pizzasquid/preview1.png';
import preview2 from '../../assets/pizzasquid/preview2.png';
import preview3 from '../../assets/pizzasquid/preview3.png';
import preview4 from '../../assets/pizzasquid/preview4.gif';
import screen1 from '../../assets/pizzasquid/Screenshot1.png';
import screen2 from '../../assets/pizzasquid/Screenshot2.png';
import screen3 from '../../assets/pizzasquid/Screenshot3.png';
import screen4 from '../../assets/pizzasquid/Anim.gif';

function PizzaIndex() {
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
          <h1>Pizza Squid</h1>
          <p>Pizza Squid is a solo project I developed for Global Game Jam 2015. </p>
          <p>
            Using four of your tentacles, eat as much pizza as you can before the time runs out! Pizza Squid can be played locally with a keyboard or controller. For this project, I really wanted to make something that used Unity's hinge joint system while also coming up with a wacky local multiplayer concept.
          </p>
          <p>
            I made Pizza Squid in 48 hours by myself, doing all of the programming, art, and animation. Later I spent about a week updating the project's art and various issues to demo it locally at the Canadian Gaming Expo 2017 in Ottawa.
          </p>

          <p>You can play Pizza Squid <a href="https://tynorman.itch.io/pizza-squid">here</a>.</p>
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

export default PizzaIndex
