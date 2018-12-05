import React, { Component } from 'react';
import './App.css';

const Intro = (props) => (
  <p className="App-intro">
    Our first functional component.
  </p>
)

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            TV Series List
          </p>
        </header>
        <Intro />
      </div>
    );
  }
}

export default App;
