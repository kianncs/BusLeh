import React from 'react';

class Header extends React.Component {
  render () {
    return (
      // <div class="ui menu">
      //   <div class="header item">
      //     Our Company
      //   </div>
      //   <a class="item" href>
      //     About Us
      //   </a>
      //   <a class="item" href>
      //     Jobs
      //   </a>
      //   <a class="item active" href>
      //     Locations
      //   </a>
      // </div>
      <div class="ui stackable menu">
        <div class="item">
          <img src="/images/logo.png" alt="HI"/>
        </div>
        <a class="item" href>Features</a>
        <a class="item" href>Testimonials</a>
        <a class="item" href>Sign-in</a>
      </div>
    )
  }
}

export default Header;