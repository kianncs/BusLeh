import React from 'react';
import Loader from 'react-loader-spinner';
import './style.css';

class Spinner extends React.Component {
  render () {
    return (
      <div className="loaderMargin">
        <Loader
          type="ThreeDots"
          color={this.props.color}
          height="30"
          width="30"
        />
      </div>
    )
  }
}

export default Spinner;