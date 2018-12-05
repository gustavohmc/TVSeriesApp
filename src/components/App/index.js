import React, { Component } from 'react';
import './App.css';
import Intro from '../intro';
import 'whatwg-fetch';
import Series from '../../containers/series'

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            TV Series List
          </p>
        </header>
        <Intro message="Here you can find all of your most loved series"/>
        <Series />
      </div>
    );
  }
}

export default App;
