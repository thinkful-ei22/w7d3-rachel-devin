import React from 'react';



export default function RenderMaze(props) {

  const goal = props.goal;
  const target = props.target;

  return (
    <button className="resetButton" onClick={e => {
        props.handleClick();
      }
    }>Reset</button>
  )
}