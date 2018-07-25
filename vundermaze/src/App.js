import React, { Component } from 'react';
import './App.css';

import RenderMaze from './component/render-maze'
import MoveButton from './component/move-button'
import ResetButton from './component/reset-button'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player: { x: 7, y: 14 },
      goal: { x: 5, y: 8 },
      hasWon: false
    }
  }

  setPlayerPosition(targetPos) {
    this.setState({
      player: targetPos
    })
  }

  setWin(){
    this.setState({
      hasWon: true
    })
  }

  resetGame(){
    this.setState({
      player: { x: 7, y: 14 },
      goal: { x: 5, y: 8 },
      hasWon: false
    })
  }

  render() {
    const targetLeft = {
      x: this.state.player.x,
      y: this.state.player.y - 1
    };
    const targetUp = {
      x: this.state.player.x - 1,
      y: this.state.player.y
    };
    const targetDown = {
      x: this.state.player.x + 1,
      y: this.state.player.y
    };
    const targetRight = {
      x: this.state.player.x,
      y: this.state.player.y + 1 
    };

    const player = this.state.player;
    const goal = this.state.goal;
    const hasWon = this.state.hasWon;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">AH-MAZE-ING VUNDERMAZE</h1>
        </header>
        <RenderMaze player={player} goal={goal} hasWon={hasWon}/>

        <MoveButton label="left" target={targetLeft} goal={goal}
                    handleClick={val => this.setPlayerPosition(val)}
                    handleWin={val=> this.setWin()}/>
        <MoveButton label="up" target={targetUp} goal={goal} 
                    handleClick={val => this.setPlayerPosition(val)}
                    handleWin={val=> this.setWin()}/>
        <MoveButton label="down" target={targetDown} goal={goal} 
                    handleClick={val => this.setPlayerPosition(val)}
                    handleWin={val=> this.setWin()}/>
        <MoveButton label="right" target={targetRight} goal={goal} 
                    handleClick={val => this.setPlayerPosition(val)}
                    handleWin={val=> this.setWin()}/>

        <br/><br/><ResetButton handleClick={val=> this.resetGame()} />
      </div>
    );
  }
}

export default App;
