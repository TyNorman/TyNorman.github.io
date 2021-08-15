import logo from '../logo.svg';
import './Main.css';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Background from '../components/Background';
import GameDisplay from '../components/GameDisplay';
import { Parallax } from 'react-scroll-parallax';
import Legal from '../components/Legal';

import treesLeft from '../assets/Trees_Left.png';
import treesRight from '../assets/Trees_Right.png';
import profilePic from '../assets/aboutme.jpg';
import cursedSeasons from '../assets/Twitter1.jpg'
import islandpopphoto from '../assets/Itch_Preview8.png'
import errands99 from '../assets/Errands99.png';
import pizzaSquid from '../assets/PizzaSquid.png';
import botCrash from '../assets/BotCrash.png';
import relentless from '../assets/Relentless.png';
import adriftAmongTheStars from '../assets/AdriftAmongTheStars.png';
import endlessWorldDriver from '../assets/EndlessWorldDriver.png';
import karman from '../assets/karman.png';
import radiant from '../assets/Radiant.png';

function Main() {
  return (

    <div className="App">
    <div class="Container">

      <Header/>
      <Helmet>
        <style>{'body { background-color: rgb(22, 32, 36); }'}</style>
      </Helmet>

      <span class="overlay">
      <body>

      <header className="hobby-Projects">
        {/* <img src={logo} className="App-logo" alt="logo" fill="#ffffff"/> */}
        <div class="profile-icon">
                <img src={profilePic} />
        </div>

        <h1>Tyler Norman</h1>
        <h2>Game Developer</h2>
        <p>
          Hobby Projects
        </p>

        <div class="Games-grid">
          <div class="Games-entry">
            <GameDisplay name="Cursed Seasons" icon={cursedSeasons} url={'/cursedseasons'}/>
          </div>

          <div class="Games-entry">
            <GameDisplay name="Errands '99" icon={errands99} url={'/errands99'}/>
          </div>

          <div class="Games-entry">
            <GameDisplay name="IslandPop Photo" icon={islandpopphoto} url={'/islandpopphoto'}/>
          </div>

          <div class="Games-entry">
            <GameDisplay name="Pizza Squid" icon={pizzaSquid} url={'/pizzasquid'}/>
          </div>

          <div class="Games-entry">
            <GameDisplay name="Endless World Driver" icon={endlessWorldDriver} url={'/endlessworlddriver'}/>
          </div>

          <div class="Games-entry">
            <GameDisplay name="Relentless" icon={relentless} url={'/relentless'}/>
          </div>

          <div class="Games-entry">
            <GameDisplay name="BotCrash" icon={botCrash} url={'/botcrash'}/>
          </div>

          <div class="Games-entry">
            <GameDisplay name="Adrift Among the Stars" icon={adriftAmongTheStars} url={'/adriftamongthestars'}/>
          </div>
        </div>
      </header>

      <header className="work-Projects">
      <p>
        Companies
      </p>
      <div class="Companies-grid">
      <div class="Games-entry">
        <GameDisplay name="Radiant Digital" icon={radiant} url={'/radiant'}/>
        </div>
        <div class="Games-entry">
        <GameDisplay name="Karman Interactive" icon={karman} url={'/karman'}/>
      </div>
        </div>
      </header>

      </body>
      </span>

      <Background/>

    </div>
    <Legal/>
    </div>
  );
}

export default Main
