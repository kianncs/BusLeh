import React from 'react';
import './style.css';
import '../../../node_modules/@fortawesome/fontawesome-pro/css/all.min.css';

import { zoomIn } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

const styles = {
  zoomIn: {
    animation: 'x 2s',
    animationName: Radium.keyframes(zoomIn, 'zoomIn')
  }
}

class Logo extends React.Component {
  render () {
    return (
      <StyleRoot>
        <div className="center logoContainer" style={styles.zoomIn}>
          <div className="logo">
            <div className="circleShape">
              <i className="fal fa-bus busIcon"></i>
            </div>
          </div>
          <div className="logoText">
            <label htmlFor="">
              BusLeh...
            </label>
          </div>
        </div>
      </StyleRoot>
    )
  }
}

export default Logo;
