import React from "react";
import Header from '../../components/Header';
import { Helmet } from 'react-helmet';
import '../info.css';
import testPic from '../../assets/cursedseasons/test.gif';

function ErrandsIndex() {
  return (
    <div className="App">
      <Helmet>
        <style>{'body { background-color: #282c34; }'}</style>
      </Helmet>
      <Header/>
      <body>
        <h1>Errands '99</h1>
        <p>Errands '99 is a game jam entry developed in GB Studio for TOJam 2020 and a love-letter to my childhood spent frequently playing on my GameBoy Colour.</p>
        <p>
          You play as a youth on a hot summer's day spurned to run an errand from the note on the kitchen table.
        </p>
        <p>
          I solely developed Errands '99 in GB Studio with interest in learning the game editor's environment and wanting to create a game on the system from my childhood. I made all of the art and implemented all of the game logic involved.
        </p>

        <p>You can play Errands '99' <a href="https://tynorman.itch.io/errands-99">here</a>.</p>
        <div className="screencaps">
          <img src={testPic} />
          <img src={testPic} />
          <img src={testPic} />
          <img src={testPic} />
        </div>
      </body>
    </div>
  );
}

export default ErrandsIndex
