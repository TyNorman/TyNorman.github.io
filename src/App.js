import React, { Component } from "react";
import {
  BrowserRouter as Router,
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

class App extends Component {
  render() {
    return (
      <Router>
       <Route exact path="/" component={Main} />
       <Route exact path="/about" component={About} />
      </Router>
    );
  }
}

export default App;
