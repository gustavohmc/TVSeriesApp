import React, { Component } from 'react';
import './App.css';
import Intro from '../intro'

class App extends Component {
  state = {
    series: []
  }

  componentDidMount() {
    const series = ["Vikings", "Game of Thrones"];
    setTimeout(() => {
      this.setState({series});
    }, 2000);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            TV Series List
          </p>
        </header>
        <Intro message="Here you can find all of your most loved series"/>
        The length of series array - {this.state.series.length}
      </div>
    );
  }
}

export default App;
