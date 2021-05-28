import React from "react";
import Header from '../../components/Header';
import { Helmet } from 'react-helmet';
import '../info.css';
import pch_games from '../../assets/karman/PCH_Lotto.jpg';
import ar_sticker from '../../assets/karman/AR_Preview.PNG';

function KarmanIndex() {
  return (
    <div className="App">
      <Helmet>
        <style>{'body { background-color: #282c34; }'}</style>
      </Helmet>
      <Header/>
      <body>
      <div className="info">
          <h1>Karman Interactive</h1>
          <h2>2017</h2>
          <p>I worked with Karman in 2017 on contracts for PCH Games, PCH Lotto, and got my first experience with AR dev on a scannable AR prototype.</p>
          <p>
            With Karman I was responsible for communicating with the team to implement UI prefabs and updated 2D assets on existing Unity projects for mobile platforms while ensuring designs matched existing design documents.
          </p>
        </div>
        <footer className="footer">
          <img src={pch_games} />
          <img src={ar_sticker} />
        </footer>
      </body>
    </div>
  );
}

export default KarmanIndex
