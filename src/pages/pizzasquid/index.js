import React from "react";
import Header from '../../components/Header';
import { Helmet } from 'react-helmet';
import '../info.css';
import screen1 from '../../assets/pizzasquid/Screenshot1.png';
import screen2 from '../../assets/pizzasquid/Screenshot2.png';
import screen3 from '../../assets/pizzasquid/Screenshot3.png';
import screen4 from '../../assets/pizzasquid/Anim.gif';

function PizzaIndex() {
  return (
    <div className="App">
      <Helmet>
        <style>{'body { background-color: rgba(44, 40, 52, 0.8); }'}</style>
      </Helmet>
      <Header/>
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
          <img className="Screencap" src={screen1} />
          <img className="Screencap" src={screen2} />
          <img className="Screencap" src={screen3} />
          <img className="Screencap" src={screen4} />
        </footer>
      </body>
    </div>
  );
}

export default PizzaIndex