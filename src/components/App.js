import React from 'react';
import '../../src/style.css'

import Logo from '../components/Logo';
import InputForm from '../components/InputForm';

class App extends React.Component {
  render () {
    return (
      <div className="ui container">
        <Logo />
        <InputForm />
      </div>
    )
  }
}

export default App;