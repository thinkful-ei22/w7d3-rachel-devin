import React, { Component } from 'react';
import './App.css';

import RenderMaze from './component/render-maze'
import MoveButton from './component/move-button'

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      player: {x:7, y:14}
    }
  }

  setPlayerPosition(playerPos){
    this.setState({
      player: playerPos
    })
  }

  render() {
    const targetLeft = {x: this.state.player.x,
                        y: this.state.player.y-1};

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
