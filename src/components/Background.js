import React from "react";
import { View } from 'react-native';
import BackgroundObject from '../components/BackgroundObject';
import { Parallax } from 'react-scroll-parallax';

import treesLeft from '../assets/Trees_Left.png';
import treesRight from '../assets/Trees_Right.png';

class Background extends React.Component {
  render() {
    return (
      <div class="bg-objects">
        <span class="parallax-left">
          <Parallax y={[0, 30]}>
            <img class="bg-trees-left" src={treesLeft} />
          </Parallax>
        </span>
        <span class="parallax-right">
          <Parallax y={[0, 30]}>
            <img class="bg-trees-right" src={treesRight} />
          </Parallax>
        </span>
      </div>
    );
  }
}

export default Background;
