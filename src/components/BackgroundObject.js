import React from "react";
import { Parallax } from 'react-scroll-parallax';
import treesLeft from '../assets/Trees_Left.png';
import treesRight from '../assets/Trees_Right.png';

class BackgroundObject extends React.Component {
  render() {
    return (
      <div class="Image">

        <img src={treesLeft} />

      </div>
    );
  }
}

export default BackgroundObject;
