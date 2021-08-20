import React from "react";
import Header from '../../components/Header';
import { Helmet } from 'react-helmet';
import Background from '../../components/Background';
import Copyright from '../../components/Copyright';
import '../info.css';
import pch_games from '../../assets/karman/PCH_Lotto.jpg';
import ar_sticker from '../../assets/karman/AR_Preview.PNG';

function KarmanIndex() {
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
          <h1>Karman Interactive</h1>
          <h2>2017</h2>
          <p>I worked with Karman in 2017 on mobile-based Unity contracts for PCH Games, PCH Lotto, and a small scannable AR prototype app.</p>
          <p>
            My responsibilities at Karman consisted of the following:
            <br/>
            <br/>• Solely integrating Vuforia into a simple Unity app to display an animated 3D model using AR through an iPhone camera and touch input for extra visuals
            <br/>
            <br/>• Updating, texture packing, and implementing 2D assets into existing games while meeting mobile asset criteria
            <br/>
            <br/>• Updating and integrating UI elements into existing games
            <br/>
            <br/>• Ensuring that UI elements matched existing design mockups
            <br/>
            <br/>• Communicating with the team to ensure that added work was cohesive with the rest of the project
            <br/>
            <br/>• Troubleshooting in-house Unity tools for Windows environments
          </p>
        </div>
        <footer className="footer">
          <img className="Screencap" src={pch_games} />
          <img className="Screencap"src={ar_sticker} />
        </footer>
      </body>
      </span>
      <Background/>
    </div>
    <Copyright/>
    </div>
  );
}

export default KarmanIndex
