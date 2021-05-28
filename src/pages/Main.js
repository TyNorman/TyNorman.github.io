import logo from '../logo.svg';
import './Main.css';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import GameDisplay from '../components/GameDisplay';
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
    <Helmet>
                <style>{'body { background-color: #282c34; }'}</style>
      </Helmet>
      <Header/>
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

        <div className="Games-grid">
          <div className="Games-entry">
            <GameDisplay name="Cursed Seasons" icon={cursedSeasons} url={'/cursedseasons'}/>
          </div>

          <div className="Games-entry">
            <GameDisplay name="Errands '99" icon={errands99} url={'/errands99'}/>
          </div>

          <div className="Games-entry">
            <GameDisplay name="IslandPop Photo" icon={islandpopphoto} url={'/islandpopphoto'}/>
          </div>

          <div className="Games-entry">
            <GameDisplay name="Pizza Squid" icon={pizzaSquid} url={'/pizzasquid'}/>
          </div>

          <div className="Games-entry">
            <GameDisplay name="Endless World Driver" icon={endlessWorldDriver} url={'/endlessworlddriver'}/>
          </div>

          <div className="Games-entry">
            <GameDisplay name="Relentless" icon={relentless} url={'/relentless'}/>
          </div>

          <div className="Games-entry">
            <GameDisplay name="BotCrash" icon={botCrash} url={'/botcrash'}/>
          </div>

          <div className="Games-entry">
            <GameDisplay name="Adrift Among the Stars" icon={adriftAmongTheStars} url={'/adriftamongthestars'}/>
          </div>
        </div>
      </header>

      <header className="work-Projects">
      <p>
        Companies
      </p>
      <div className="Companies-grid">
      <div className="Games-entry">
        <GameDisplay name="Radiant Digital" icon={radiant} url={'/radiant'}/>
        </div>
        <div className="Games-entry">
        <GameDisplay name="Karman Interactive" icon={karman} url={'/karman'}/>
      </div>
        </div>
      </header>

      </body>
    </div>
  );
}

export default Main
