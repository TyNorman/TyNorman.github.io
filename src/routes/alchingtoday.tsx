import { Copyright } from '../components/Copyright';
import { Background } from '../components/Background';
import ModalImage from "react-modal-image";
import ReactPlayer from 'react-player';

import './info.css';

import preview1 from '../assets/alchingtoday/preview1.png';
import preview2 from '../assets/alchingtoday/preview2.png';
import screen1 from '../assets/alchingtoday/Screenshot1.png';
import screen2 from '../assets/alchingtoday/Screenshot2.png';

import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/alchingtoday')({
    component: AlchingTodayIndex
})

function AlchingTodayIndex() {
    return (
        <div className="App">
            <div className="App-contents">
                <div className="overlay">
                    <div className="info">
                        <h1>Alching Today</h1>
                        <p>
                            Alching Today is an online tool I developed for Old School Runecape using live data from the in-game Grand Exchange to help users determine optimal purchases for High Alchemy training and moneymaking.
                        </p>
                        <p>
                            I made this project to demonstrate efficient RESTful API use and easy to use UI/UX on both web and mobile resolutions.
                        </p>
                        <p>You can check it out <a href="https://alchingtoday.netlify.app/" target="_blank" rel="noopener noreferrer">here</a>.</p>
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
                <Background />
            </div>
            <Copyright />
        </div>
    );
}

export default AlchingTodayIndex;
