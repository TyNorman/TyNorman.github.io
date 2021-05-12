import React from "react";
import ReactDOM from 'react-dom';
import "./GameDisplay.css";

class GameDisplay extends React.Component {
  render() {
    return (
      <div class="contents">
        <h2>{this.props.name}</h2>
        <a href="/about">
          <img src={this.props.icon} />
        </a>
      </div>
    );

  }
}

export default GameDisplay;
