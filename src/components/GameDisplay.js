import React from "react";
import ReactDOM from 'react-dom';
import "./GameDisplay.css";

class GameDisplay extends React.Component {
  render() {
    return (
      <div class="contents">
      <h2>{this.props.name}</h2>
      <img src={this.props.icon} />
      </div>
    );

  }
}

export default GameDisplay;
