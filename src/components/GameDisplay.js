import React from "react";
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'
import "./GameDisplay.css";

class GameDisplay extends React.Component {
  render() {
    return (
      <div class="contents">
        <h2>{this.props.name}</h2>
        <Link to={this.props.url}>
          <img src={this.props.icon} />
          </Link>
      </div>
    );

  }
}

export default GameDisplay;
