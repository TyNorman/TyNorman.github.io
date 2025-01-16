import React, { Component } from "react";
import {
  Route,
  Routes,
} from "react-router";

import './App.css';
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
      <Routes>
       <Route exact path="/" element={<Main/>} />
       <Route exact path="/about" element={<About/>} />
       <Route exact path="/adriftamongthestars" element={<AdriftIndex/>} />
       <Route exact path="/botcrash" element={<BotCrashIndex/>} />
       <Route exact path="/cursedseasons" element={<CursedIndex/>} />
       <Route exact path="/endlessworlddriver" element={<EndlessIndex/>} />
       <Route exact path="/errands99" element={<ErrandsIndex/>} />
       <Route exact path="/islandpopphoto" element={<IslandIndex/>} />
       <Route exact path="/pizzasquid" element={<PizzaIndex/>} />
       <Route exact path="/relentless" element={<RelentlessIndex/>} />

       <Route exact path="/radiant" element={<RadiantIndex/>} />
       <Route exact path="/karman" element={<KarmanIndex/>} />
       <Route exact path="/drinkbox" element={<DrinkboxIndex/>} />
      </Routes>
    );
  }
}

export default App;
