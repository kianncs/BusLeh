import React from 'react';
import './style.css';
import moment from 'moment';

const CURRENT_TIME = moment();

class BusItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      busETA: 0
    }
  }

  componentDidMount() {
    this.getTimeDiffInMinutes();
  }

  getTimeDiffInMinutes(etaTime) {
    if (etaTime === null || etaTime === '' || etaTime === undefined) {
      return 'NEA'
    }
    let momentEtaTime = moment(etaTime);
    let diff = momentEtaTime.diff(CURRENT_TIME, 'minutes');
    return diff <= 0 ? 'Arr' : diff;
  }

  isBusArriving(etaTime) {
    let result = this.getTimeDiffInMinutes(etaTime);
    if (result === 'NEA' || Number(result)) {
      return false;
    } else {
      return true;
    }
  }

  render () {
    const {
      ServiceNo,
    } = this.props.bus;

    const {
      EstimatedArrival,
    } = this.props.bus.NextBus

    return (
      <div className="item">
        <div className="content">
          <div className="icon">
            <i className="fal fa-bus bus"></i>
          </div>
          <div className="busNumber">
            <div>{ServiceNo}</div>
          </div>
          <div className={`busArrivalTime ${this.isBusArriving(EstimatedArrival) ? 'green' : 'grey'}`}>
            <div>
              { this.getTimeDiffInMinutes(EstimatedArrival) }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BusItem;