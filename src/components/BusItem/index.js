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

  isBusDoubleDecker(busType) {
    return busType === 'DD' ? true : false;
  }

  render () {
    const {
      ServiceNo,
    } = this.props.bus;

    let busType = this.props.bus.NextBus.Type;
    console.log('busType: ', this.props.bus.NextBus.Type);
    let busArrival = this.props.bus.NextBus.EstimatedArrival;
    let nextBusArrival = this.props.bus.NextBus2.EstimatedArrival;

    return (
      <div className="item">
        <div className="content">
          <div className="icon">
            <i className={`fal fa-bus bus ${this.isBusDoubleDecker(busType) ? 'purple' : '' }`}></i>
          </div>
          <div className="busNumber">
            <div>{ServiceNo}</div>
          </div>
          <div className={`busArrivalTime ${this.isBusArriving(nextBusArrival) ? 'green' : 'grey2'}`}>
            <div>
              { this.getTimeDiffInMinutes(nextBusArrival) }
            </div>
          </div>
          <div className={`busArrivalTime marginRight ${this.isBusArriving(busArrival) ? 'green' : 'grey'}`}>
            <div>
              { this.getTimeDiffInMinutes(busArrival) }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BusItem;