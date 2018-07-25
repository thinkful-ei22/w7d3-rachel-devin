import React, { Component } from 'react';
import './App.css';

import RenderMaze from './component/render-maze'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">AH-MAZE-ING VUNDERMAZE</h1>
        </header>
        <RenderMaze />
      </div>
    );
  }
}

export default App;
