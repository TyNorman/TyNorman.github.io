import React from "react";
import { Parallax } from 'react-scroll-parallax';

import './Background.css';

import treesLeft from '../assets/Trees_Left.png';
import treesRight from '../assets/Trees_Right.png';

class Background extends React.Component {
  render() {
    return (
      <div className="bg-objects">
        <span className="parallax-left">
          <Parallax y={[0, 30]}>
            <img className="bg-trees-left" src={treesLeft} alt=""/>
          </Parallax>
        </span>
        <span className="parallax-right">
          <Parallax y={[0, 30]}>
            <img className="bg-trees-right" src={treesRight} alt=""/>
          </Parallax>
        </span>
      </div>
    );
  }
}

export default Background;
