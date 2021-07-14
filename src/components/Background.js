import React from "react";
import BackgroundObject from '../components/BackgroundObject';
import { Parallax } from 'react-scroll-parallax';

class Background extends React.Component {
  render() {
    return (
      <div class = "Background">
        <BackgroundObject/>
        </div>
    );
  }
}

export default Background;
