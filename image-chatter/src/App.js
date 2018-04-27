import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import Header from './Components/Header/Header'
import Main from './Components/Main/Main'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <Main/>
          {/* <Footer/> */}
      </div>
    );
  }
}

export default App;
