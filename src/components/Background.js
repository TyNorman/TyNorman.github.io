import React from "react";
import { View } from 'react-native';
import BackgroundObject from '../components/BackgroundObject';
import { Parallax } from 'react-scroll-parallax';

import treesLeft from '../assets/Trees_Left.png';
import treesRight from '../assets/Trees_Right.png';

class Background extends React.Component {
  render() {
    return (
      <div class="Background">
          <Parallax y={[0, 25]}>
            <img class="bg-trees-left" src={treesLeft} />
            <img class="bg-trees-right" src={treesRight} />
          </Parallax>
      </div>
    );
  }
}

export default Background;
