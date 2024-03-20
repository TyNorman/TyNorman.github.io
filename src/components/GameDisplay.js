import React from "react";
import { Link } from 'react-router-dom'
import "./GameDisplay.css";

class GameDisplay extends React.Component {
  render() {
    return (
      <div className="GameContents">
        <h2 className="GameTitle">{this.props.name}</h2>
        <Link to={this.props.url}>
          <img className="GameImg" src={this.props.icon} alt=""/>
          </Link>
      </div>
    );

  }
}

export default GameDisplay;
