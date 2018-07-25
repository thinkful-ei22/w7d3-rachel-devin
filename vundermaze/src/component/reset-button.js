import React from 'react';



export default function RenderMaze(props) {

  return (
    <button className="resetButton" onClick={e => {
        props.handleClick();
      }
    }>Reset</button>
  )
}