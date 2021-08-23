import logo from '../logo.svg';
import './Main.css';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Background from '../components/Background';
import GameDisplay from '../components/GameDisplay';
import { Parallax } from 'react-scroll-parallax';
import Copyright from '../components/Copyright';

import treesLeft from '../assets/Trees_Left.png';
import treesRight from '../assets/Trees_Right.png';
import profilePic from '../assets/aboutme.jpg';
import cursedSeasons from '../assets/Twitter1.jpg';
import islandpopphoto from '../assets/Itch_Preview8.png';
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


        {/* <img src={logo} className="App-logo" alt="logo" fill="#ffffff"/> */}
        <div class="profile-icon">
                <img src={profilePic} />
        </div>

        <div class="itme">
          <h1 class="name">Tyler Norman</h1>
          <p class="title">Game Developer</p>
        </div>

        <header className="hobby-Projects">
        <p>
          Personal Projects
        </p>

        <div class="Games-grid">
            <GameDisplay name="Cursed Seasons" icon={cursedSeasons} url={'/cursedseasons'}/>

            <GameDisplay name="Errands '99" icon={errands99} url={'/errands99'}/>

            <GameDisplay name="IslandPop Photo" icon={islandpopphoto} url={'/islandpopphoto'}/>

            <GameDisplay name="Pizza Squid" icon={pizzaSquid} url={'/pizzasquid'}/>

            <GameDisplay name="Endless World Driver" icon={endlessWorldDriver} url={'/endlessworlddriver'}/>

            <GameDisplay name="Relentless" icon={relentless} url={'/relentless'}/>

            <GameDisplay name="BotCrash" icon={botCrash} url={'/botcrash'}/>

            <GameDisplay name="Adrift Among the Stars" icon={adriftAmongTheStars} url={'/adriftamongthestars'}/>
        </div>
      </header>

      <header className="work-Projects">
      <p>
        Companies
      </p>
      <div class="Companies-grid">
        <GameDisplay name="Radiant Digital" icon={radiant} url={'/radiant'}/>
        <GameDisplay name="Karman Interactive" icon={karman} url={'/karman'}/>
        </div>
      </header>

      </body>
      </span>

      <Background/>

    </div>
    <Copyright/>
    </div>
  );
}

export default Main
