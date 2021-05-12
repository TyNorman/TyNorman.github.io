import logo from '../logo.svg';
import './Main.css';
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

function Main() {
  return (
    <div className="App">
      <Header/>
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" fill="#ffffff"/> */}
        <div class="profile-icon">
                <img src={profilePic} />
        </div>

        <h1>Hello World!</h1>
        <p>
          Bing bong I'm slowly making a website here
        </p>

        <div className="Games-grid">
          <div className="Games-entry">
            <GameDisplay name="Cursed Seasons" icon={cursedSeasons}/>
          </div>

          <div className="Games-entry">
            <GameDisplay name="Errands '99" icon={errands99}/>
          </div>

          <div className="Games-entry">
            <GameDisplay name="IslandPop Photo" icon={islandpopphoto}/>
          </div>

          <div className="Games-entry">
            <GameDisplay name="Pizza Squid" icon={pizzaSquid}/>
          </div>

          <div className="Games-entry">
            <GameDisplay name="Endless World Driver" icon={endlessWorldDriver}/>
          </div>

          <div className="Games-entry">
            <GameDisplay name="Relentless" icon={relentless}/>
          </div>

          <div className="Games-entry">
            <GameDisplay name="BotCrash" icon={botCrash}/>
          </div>

          <div className="Games-entry">
            <GameDisplay name="Adrift Among the Stars" icon={adriftAmongTheStars}/>
          </div>

        </div>
      </header>
    </div>
  );
}

export default Main
