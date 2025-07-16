import { createRootRoute, Link } from '@tanstack/react-router'

import "./GameDisplay.css";

interface GameDisplayProps {
    name: string;
    url: string;
    icon: string;
}

function GameDisplay(props: GameDisplayProps) {
    return (
      <div className="GameContents">
        <h2 className="GameTitle">{props.name}</h2>
        <Link to={props.url} className="GameLink">
          <img className="GameImg" src={props.icon} alt=""/>
        </Link>
      </div>
    );
}

export { GameDisplay };
