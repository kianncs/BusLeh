import React from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";
import '../../src/style.css'
import history from '../history';

import Logo from '../components/Logo';
import InputForm from '../routes/InputForm'
import BusList from '../routes/BusList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    }
  }

  onClickBackButton = () => {
    this.setState({
      busListView: false
    })
  }

  showbusListView = (busListView) => {
    this.setState({
      busListView: busListView,
    })
  }

  getBusArrivalData = (data) => {
    this.setState({
      data: data
    })
  }

  render () {
    return (
      <div className="wrapper">
        <div className="ui container bodyContainer">
          <Logo />
          <HashRouter history={history}>
            <Switch>
              <Route path="/" exact component={InputForm} />
              <Route path="/busArrival/:busStopCode" component={BusList} />
            </Switch>
          </HashRouter>
        </div>
      </div>
    )
  }
}

export default App;