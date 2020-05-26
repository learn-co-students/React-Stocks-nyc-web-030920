import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'

class App extends Component {


  render() {
    console.log(this.state)
    return (
      <div>
        <Header/>
        <MainContainer/>
      </div>
    );
  }
  }

export default App;
