import { Copyright } from '../components/Copyright';
import { Background } from '../components/Background';
import ModalImage from "react-modal-image";
import ReactPlayer from 'react-player';

import './info.css';

import preview1 from '../assets/restles_snes/preview1.png';
import preview2 from '../assets/restles_snes/preview2.png';
import screen1 from '../assets/restles_snes/Screenshot1.png';
import screen2 from '../assets/restles_snes/Screenshot2.png';

import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/snessleep')({
  component: SnesSleepIndex,
})

function SnesSleepIndex() {
  return (
    <div className="App">
    <div className="App-contents">
      <div className="overlay">
      <div className="info">
          <h1>Restles_SNES</h1>
          <p>
            Restles_SNES is a web-based music player I developed as a personal project. While struggling to fall asleep I often turned to YouTube playlists which were often delisted or interrupted by ads. As for the ones that weren't, listening to the same videos over and over gets repetitive and I wanted some more variety. This made me realize I could just roll my own personal site with some dynamic features to let me tweak audio levels, shuffle a playlist, and pick which background rain loop I wanted to use.
          </p>
          <p>Restles_SNES is not hosted publicly due to copywritten content, though you can check it out on <a href="https://github.com/TyNorman/Restles_SNES">GitHub</a>.</p>
          <div className="video-player">
            <ReactPlayer src='https://www.youtube.com/watch?v=LyYDdc0yGJI' controls style={{ width: '60%', height: 'auto', aspectRatio: '16/9' }} />
          </div>
        </div>
        <footer className="footer">
          <div className="preview">
            <ModalImage small={preview1} large={screen1} />
          </div>
        <div className="preview">
          <ModalImage small={preview2} large={screen2} />
        </div>
        </footer>
      </div>
      <Background/>
    </div>
    <Copyright/>
    </div>
  );
}

export default SnesSleepIndex;
