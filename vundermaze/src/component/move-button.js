import React from 'react';


export default function RenderMaze(props) {
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

  const goal = props.goal;
  const target = props.target;

  return (
    <button onClick={e => {
      if ((target.x === goal.x) && (target.y === goal.y)) {
        console.log("Have a cookie!");
      } else if (defaultMaze[target.x][target.y] === ' ') {
        console.log("VALID SPACE")
      } else {
        console.log("INVALID SPACE");
      }
    }
    }>{props.label}</button>
  )
}