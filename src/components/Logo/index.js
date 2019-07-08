import React from 'react';
import './style.css';
import '../../../node_modules/@fortawesome/fontawesome-pro/css/all.min.css';

class Logo extends React.Component {
  render () {
    return (
      <div className="center">
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
    )
  }
}

export default Logo;
