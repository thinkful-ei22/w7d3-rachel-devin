import React from 'react';


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

  const player = {x:7, y:14};
  const goal = {x:5, y:8};

  const target = {x:7, y:13};

  return (
    <button onClick={e =>{
        if(defaultMaze[target.x][target.y] === ' '){
          console.log("VALID SPACE");
        }else{
          console.log("INVALID SPACE");
        }
      }
    }>{props.label}</button>
  )
}