import React from "react";
import Header from '../../components/Header';
import { Helmet } from 'react-helmet';
import Background from '../../components/Background';
import Copyright from '../../components/Copyright';
import '../info.css';
import screen1 from '../../assets/botcrash/Screenshot1.png';
import screen2 from '../../assets/botcrash/Screenshot2.png';
import screen3 from '../../assets/botcrash/Screenshot3.png';
import screen4 from '../../assets/botcrash/Screenshot4.png';

function BotCrashIndex() {
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
      <h1>BotCrash</h1>
      <p>BotCrash was my first long-term solo project I started since graduating college from 2014-2015.</p>
      <p>
        Play against up to three opponents in a local multiplayer arena, using your gravity beam to pick up and throw objects in order to knock your opponents off the platform. Grab powerups to enhance your abilities. Once you lose all five lives, you're out!
      </p>
      <p>
        I worked alone on BotCrash and made all art assets and animations. This was my second local multiplayer game I worked on since my college graduation project, heavily inspired by that experience and playing games such as <i>Starwhal</i> and <i>Samurai Gunn</i>.
      </p>

      <p>You can play BotCrash <a href="https://tynorman.itch.io/botcrash">here</a>.</p>
        </div>
        <footer className="footer">
          <img className="Screencap" src={screen1} />
          <img className="Screencap" src={screen2} />
          <img className="Screencap" src={screen3} />
          <img className="Screencap" src={screen4} />
        </footer>
      </body>
      </span>
      <Background/>
    </div>
    <Copyright/>
    </div>
  );
}

export default BotCrashIndex
