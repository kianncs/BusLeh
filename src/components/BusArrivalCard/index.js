import React from 'react';
import './style.css'

import { fadeIn } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

const styles = {
  fadeIn: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn')
  }
}

class BusArrivalCard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    console.log('time: ', this.props.data);
  }

  onClickBackButton = () => {
    this.props.showBusArrivalCard(false);
  }

  renderCard () {
    return (
      <StyleRoot>
        <div className="ui centered card" style={styles.fadeIn}>
          <div className="content contentContainer">
            <label className="cardLabel">Next bus in: </label>
            <label className="time">10</label>
            <label className="units">mins</label>
          </div>
        </div>
      </StyleRoot>
    )
  }

  render () {
    return (
      <div>
        { this.renderCard() }
      </div>
    )
  }
}

export default BusArrivalCard;