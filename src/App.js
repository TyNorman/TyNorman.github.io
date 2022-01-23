import React, { Component } from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

import './App.css';
import Header from './components/Header';
import profilePic from './assets/aboutme.jpg';
import Main from './pages/Main';
import About from './pages/About';
import AdriftIndex from './pages/adriftamongthestars/index';
import BotCrashIndex from './pages/botcrash/index';
import CursedIndex from './pages/cursedseasons/index';
import EndlessIndex from './pages/endlessworlddriver/index';
import ErrandsIndex from './pages/errands99/index';
import IslandIndex from './pages/islandpopphoto/index';
import PizzaIndex from './pages/pizzasquid/index';
import RelentlessIndex from './pages/relentless/index';

import RadiantIndex from './pages/radiant/index';
import KarmanIndex from './pages/karman/index';
import DrinkboxIndex from './pages/drinkbox/index';

class App extends Component {
  render() {
    return (
      <Switch>
       <Route exact path="/" component={Main} />
       <Route exact path="/about" component={About} />
       <Route exact path="/adriftamongthestars" component={AdriftIndex} />
       <Route exact path="/botcrash" component={BotCrashIndex} />
       <Route exact path="/cursedseasons" component={CursedIndex} />
       <Route exact path="/endlessworlddriver" component={EndlessIndex} />
       <Route exact path="/errands99" component={ErrandsIndex} />
       <Route exact path="/islandpopphoto" component={IslandIndex} />
       <Route exact path="/pizzasquid" component={PizzaIndex} />
       <Route exact path="/relentless" component={RelentlessIndex} />

       <Route exact path="/radiant" component={RadiantIndex} />
       <Route exact path="/karman" component={KarmanIndex} />
       <Route exact path="/drinkbox" component={DrinkboxIndex} />
      </Switch>
    );
  }
}

export default App;
