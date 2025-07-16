import { Parallax } from 'react-scroll-parallax';

import './Background.css';

import treesLeft from '../assets/Trees_Left.png';
import treesRight from '../assets/Trees_Right.png';

function Background() {
    return (
      <div className="bg-objects">
        <span className="parallax-left">
          <Parallax translateY={[80, -40]}>
            <img className="bg-trees-left" src={treesLeft} alt=""/>
          </Parallax>
        </span>
        <span className="parallax-right">
          <Parallax translateY={[80, -40]}>
            <img className="bg-trees-right" src={treesRight} alt=""/>
          </Parallax>
        </span>
      </div>
    );
}

export { Background };
