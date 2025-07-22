import { createFileRoute } from '@tanstack/react-router';

import { GameDisplay } from '../components/GameDisplay';
import { Copyright } from '../components/Copyright';
import {Background} from '../components/Background';

import './index.css';

import profilePic from '../assets/aboutme.png';

import snesSleep from '../assets/SNESSleep.png';

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
import drinkbox from '../assets/Drinkbox.png';


export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="App">
      <div className="App-contents">
        <div className="overlay">
        <div className="profile-icon">
                <img src={profilePic} alt=""/>
        </div>

        <div className="itme">
          <h1 className="name">Tyler Norman</h1>
          <p className="title">Web Developer | Game Developer | Amateur Equestrian</p>
          <p className="subtitle">Web Developer with over 10 years in Game Development for web and mobile platforms. Strong background in front-end UI and UX with applying perspectives from developing video games. Often picking up web technologies to develop new skills in this career transition.</p>
        </div>

        <div className="hobby-Projects">
          <p>
            Web Projects
          </p>
          <div className="Games-grid">
            <GameDisplay name="SNES Sleep" icon={snesSleep} url={'/snessleep'}/>
          </div>
        </div>

        <header className="hobby-Projects">
        <p>
          Video Game Projects
        </p>

        <div className="Games-grid">
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
      <div className="Companies-grid">
        <GameDisplay name="Radiant Digital" icon={radiant} url={'/radiant'}/>
        <GameDisplay name="Drinkbox Studios" icon={drinkbox} url={'/drinkbox'}/>
        <GameDisplay name="Karman Interactive" icon={karman} url={'/karman'}/>
        </div>
      </header>
      </div>
    <Background/>
      
    </div>
    <Copyright/>
  </div>
  )
}