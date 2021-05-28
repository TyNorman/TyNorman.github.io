import React from "react";
import Header from '../../components/Header';
import { Helmet } from 'react-helmet';
import '../info.css';
import testPic from '../../assets/cursedseasons/test.gif';

function BotCrashIndex() {
  return (
    <div className="App">
      <Helmet>
        <style>{'body { background-color: #282c34; }'}</style>
      </Helmet>
      <Header/>
      <body>
      <div className="info">
      <h1>BotCrash</h1>
      <p>BotCrash was my first long-term solo project I started since graduating college, under a year of development from 2014-2015.</p>
      <p>
        Play against up to three opponents in a local multiplayer arena, using your gravity beam to pick up and throw objects in order to knock your opponents off the platform. Grab powerups to enhance your abilities. Once you lose all five lives, you're out!
      </p>
      <p>
        I worked alone on BotCrash and made all art assets and animations. This was my second local multiplayer game I worked on since my college graduation project, heavily inspired by that experience and playing games such as <i>Starwhal</i> and <i>Samurai Gunn</i>.
      </p>

      <p>You can play BotCrash <a href="https://tynorman.itch.io/botcrash">here</a>.</p>
        </div>
        <footer className="footer">
          <img src={testPic} />
          <img src={testPic} />
          <img src={testPic} />
          <img src={testPic} />
        </footer>
      </body>
    </div>
  );
}

export default BotCrashIndex
