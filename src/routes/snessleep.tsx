import { Copyright } from '../components/Copyright';
import { Background } from '../components/Background';
import ModalImage from "react-modal-image";

import './info.css';

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
          <h1>SNES Sleep</h1>
          <p>[WIP]</p>
        </div>
        <footer className="footer">
        </footer>
      </div>
      <Background/>
    </div>
    <Copyright/>
    </div>
  );
}

export default SnesSleepIndex;
