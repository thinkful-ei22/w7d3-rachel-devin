import React from 'react';
import './render-maze.css';

export default function RenderMaze(props){
  const defaultMaze = [
    'x----------+---x',
    '|          |   |',
    '+-+ +------+ + |',
    '|            | |',
    '| +--+ +-----+ |',
    '|    | |       |',
    '+----+ +-------+',
    '|              |',
    'x--------------x'
  ]

  function stringSplice(s) {
      return function splice() {
          var a = s.split('');
          Array.prototype.splice.apply(a, arguments);
          return a.join('');
      };
  }

  const player = props.player;
  const goal = props.goal;
  var newMaze = defaultMaze;

  newMaze[player.x] = stringSplice(newMaze[player.x])(player.y, 1, 'O');
  newMaze[goal.x] = stringSplice(newMaze[goal.x])(goal.y, 1, 'G');

  const mazeHTML = (
    <section className="maze-container">
      <pre>{newMaze[0]}</pre>
      <pre>{newMaze[1]}</pre>
      <pre>{newMaze[2]}</pre>
      <pre>{newMaze[3]}</pre>
      <pre>{newMaze[4]}</pre>
      <pre>{newMaze[5]}</pre>
      <pre>{newMaze[6]}</pre>
      <pre>{newMaze[7]}</pre>
      <pre>{newMaze[8]}</pre>
    </section>
  )

  const cookie = (
    <section className="maze-container">
      <h2>You Win a Cookie!</h2>
      <img src="./cookie.jpg" alt="You Win!" />
    </section>
  )

  console.log('Has won: ', props.hasWon);
  if(!props.hasWon)
    return mazeHTML;
  else  
    return cookie;


}