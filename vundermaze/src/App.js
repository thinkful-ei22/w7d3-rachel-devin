import React, { Component } from 'react';
import './App.css';

import RenderMaze from './component/render-maze'
import MoveButton from './component/move-button'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">AH-MAZE-ING VUNDERMAZE</h1>
        </header>
        <RenderMaze />

        <MoveButton label="left"/>
        <MoveButton label="up"/>
        <MoveButton label="down"/>
        <MoveButton label="right"/>
      </div>
    );
  }
}

export default App;
