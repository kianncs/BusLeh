import React from 'react';
import moment from 'moment';
import './style.css';
import { fadeIn } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import history from '../../history';

import LTA from '../../apis/lta';
import BusItem from '../../components/BusItem';
import Spinner from '../../components/Spinner';
import busListData from './busListData';

const CURRENT_TIME = moment().format('MMMM Do YYYY, h:mm:ss a');

const styles = {
  fadeIn: {
    animation: 'x 2s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn')
  }
}

class BusList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      busStopCode: this.props.match.params.busStopCode,
      busDataArray: [],
      isLoading: true
    }
  }

  componentDidMount = async () => {
    const res = await LTA.get('/ltaodataservice/BusArrivalv2?', {
      params: {
        BusStopCode: this.state.busStopCode
      }
    });

    // Sort the array based on bus service no
    res.data.Services.sort(function (a,b) {
      return parseInt(a.ServiceNo) - parseInt(b.ServiceNo);
    })

    this.setState({
      busDataArray: res.data.Services,
      isLoading: false
    })
    // this.setState({
    //   busDataArray: busListData,
    //   isLoading: false
    // })
  }

  onClickBackButton = () => {
    history.push('/');
  }

  renderBackButton() {
    return (
      <div className="backButton" >
        <button
          onClick={this.onClickBackButton}
        >
          Back
        </button>
      </div>
    )
  }

  renderSpinner() {
    return (
      <div className="spinnerBusList">
        <Spinner color={"white"} />
        Wait arh, Loading!
      </div>
    )
  }

  renderBusStopCode() {
    return (
      <div className="item">
        <div className="content signPostContainer">
          <div className="icon">
            <i className="fal fa-sign signPost"></i>
          </div>
          <div className="busStopCode">
            <div>{this.state.busStopCode}</div>
          </div>
        </div>
      </div>
    )
  }

  renderErrorMessage () {
    return (
      <div>
        Error
      </div>
    )
  }

  renderBusItem () {
    return (
      this.state.busDataArray.map((bus, index) => {
        return (
          <BusItem bus={bus} key={index}/>
        )
      })
    )
  }

  renderBusList() {
    return (
      <div>
        <div className="ui container shadow" style={styles.fadeIn}>
          <div className="ui segment">
            <div className="ui relaxed divided list">
              { this.renderBusStopCode() }
              { this.state.busDataArray.length === 0 ? this.renderErrorMessage() : this.renderBusItem() }
              <div className="lastUpdatedTime">
                <label>
                  Last Updated: { CURRENT_TIME }
                </label>
              </div>
            </div>
          </div>
        </div>
        {this.renderBackButton()}
      </div>
    )
  }

  render () {
    return (
      <StyleRoot>
        {this.state.isLoading ? this.renderSpinner() : this.renderBusList() }
      </StyleRoot>
    )
  }
}

export default BusList;